<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Finding User</title>
	<link rel="stylesheet" href= "style.css" >
</head>
<body>
	<?php	

		if (!isset(($_GET["user"]))) { // Check that a username has been passed
			include 'check-user-logged-in.php';
		}

		$h = fopen("/home/module2-users/users.txt", "r");

		$userExists = FALSE;
		while( !feof($h) ){
			$tempUser = fgets($h);
			if (htmlentities($_GET["user"])."\n" == $tempUser) {
				echo "user found";
				$userExists = TRUE;
				break;
			}
		}
		fclose($h);
		if ($userExists) { // redirect to user's view
			session_start();
			$_SESSION["user"] = htmlentities($_GET["user"]);

			header("Location: user-view.php"); 
			exit;
		} else { // redirect back to login screen
			header( "refresh:2; url=mod2-file-sharing.php" ); // solution found https://www.php.net/manual/en/function.header.php
			echo 'User Not Found! </br> You\'ll be redirected back to login screen in about 5 seconds. If not, click <a href="mod2-file-sharing.php">here</a>.';
		}
	?>
</body>
</html>