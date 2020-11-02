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
        include 'check-user-logged-in.php';
    ?>
    <div id="log-out-page">
    <?php
    session_destroy();
    header( "refresh:2; url=mod2-file-sharing.php" ); // solution found https://www.php.net/manual/en/function.header.php
    echo 'Logged out. Redirecting you back to log-in screen...'; // TODO: make sure only done when successfully destroyed.
    ?>
    </div>
</body>
</html>
