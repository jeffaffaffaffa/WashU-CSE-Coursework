<?php
echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Delete All Shared</title>
    <link rel="stylesheet" href= "style.css" >
</head> 
<body>
HTML;
include 'check-user-logged-in.php';

$user = htmlentities($_SESSION["user"]);

$file_pointer = sprintf("/home/module2-users/shared-uploads/%s", $user);

$files = glob($file_pointer."/*");

foreach($files as $file) {
    if (is_file($file)) {
        unlink($file);
    }
}

echo ("All shared files deleted successfully.");
header("refresh:1; url=user-view.php");

echo "</body> </html>"

?>