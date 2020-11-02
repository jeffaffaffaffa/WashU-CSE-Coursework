<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Delete</title>
    <link rel="stylesheet" href= "style.css" >
</head>
<body>
    <?php
    include 'check-user-logged-in.php';

    $user = htmlentities($_SESSION["user"]);
    if (empty($_POST)) {
        header("Location: user-view.php");
        exit;
    }

    $fileType = htmlentities($_POST["userOwned"]);
    $file = htmlentities($_POST["file"]);

    $file_pointer = sprintf("/home/module2-users/%s-uploads/%s/%s", $fileType, $user, $file);


    if (!unlink($file_pointer)) {
        echo ("Error, file could not be deleted.");
    }
    else {
        echo ("File has been deleted successfully.");
    }

    header("refresh:1; url=user-view.php");
    ?>
</body>
</html>
