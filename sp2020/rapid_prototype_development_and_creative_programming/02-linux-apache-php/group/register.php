<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href= "style.css" >
</head>
<body>
    <?php
    $newUser = htmlentities($_POST["register"])."\n";

    if( !preg_match('/^[\w_\-]+$/', $newUser) ){
        echo "Invalid username.";
    } else {
        $h = fopen("/home/module2-users/users.txt", "r");
        while( !feof($h) ){
			$tempUser = fgets($h);
			if ($newUser == $tempUser) {
                echo "Username already exists.";
                header( "refresh: 1; url=mod2-file-sharing.php" );
				exit;
			} 
		}
        $filename = "/home/module2-users/users.txt";
        file_put_contents($filename, $newUser, FILE_APPEND | LOCK_EX);
    }
    header( "refresh: 1; url=mod2-file-sharing.php" );
    ?> 
</body>
</html>

