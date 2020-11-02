<?php
echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Delete User</title>
    <link rel="stylesheet" href= "style.css" >
</head> 
<body>
HTML;
    include 'check-user-logged-in.php';
    
    $user = htmlentities($_SESSION["user"])."\n";
    $filename = "/home/module2-users/users.txt";
    $users = file_get_contents($filename);
    $users = str_replace($user, '', $users);
    file_put_contents($filename, $users);

    $user = substr($user, 0, -1); // get rid of \n character

    $path_pointer = sprintf("/home/module2-users/user-uploads/%s", $user); //FIXME: delete all subfiles

    $files = glob($path_pointer."/*");

    foreach($files as $file) {
        if (is_file($file)) {
            unlink($file);
        }
    }

    if (!rmdir($path_pointer)) {
        echo ("Error, user could not be deleted.");
    }
    else {
        $path_pointer = sprintf("/home/module2-users/shared-uploads/%s", $user);

        $files = glob($path_pointer."/*");

        foreach($files as $file) {
            if (is_file($file)) {
                unlink($file);
            }
        }
        if (!rmdir($path_pointer)) {
            echo ("Error, user could not be deleted.");
        } else {
            echo ("User has been deleted successfully.");
        }
    }

    header("refresh:1; url=user-view.php");
    
    session_destroy();
echo "</body> </html>"
?>