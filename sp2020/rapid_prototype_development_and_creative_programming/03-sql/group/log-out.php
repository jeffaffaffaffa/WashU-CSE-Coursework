<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Log Out</title>
    <link rel="stylesheet" href= "style.css" >
</head>
<body>
    <?php
    session_start();
    session_destroy();
    
    //only if the session is destroyed, go back to loginandhome
    // if (!isset($_SESSION['user_id'])){
        header( "refresh:1; url=loginandhome.php" ); // solution found https://www.php.net/manual/en/function.header.php
        echo 'Logged out. Redirecting you back to main page...'; // TODO: make sure only done when successfully destroyed.
    // }
    ?>
</body>
</html>
