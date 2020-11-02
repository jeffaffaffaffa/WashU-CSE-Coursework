<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Module 2 File Sharing</title>
	<link rel="stylesheet" href= "style.css" >
</head>
<body>
	<?php 
		session_start();
		if (isset($_SESSION["user"])) {
			echo "hi";
			header("Location: user-view.php");
			exit;
		}
	?>
	<form id="log-in" action="user.php" method="GET">
		<label>Username: <input type="text" name="user" /></label><br> <!-- FIXME: login is separate from main!-->
		<input type="submit" value="submit" />
	</form>
	<form id="register" action="register.php" method="POST">
		<label>No username? Create one: <input type="text" name="register" /></label><br>
		<input type="submit" value="submit" />
	</form>
</body>
</html>