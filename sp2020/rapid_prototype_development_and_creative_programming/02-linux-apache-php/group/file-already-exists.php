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
        include 'check-user-logged-in.php';
    ?>
    <p>A file with that name already exists. Please either delete it or rename the new file.</p>
    <?php
        header("refresh:2; url=user-view.php");
    ?>
</body>
</html>