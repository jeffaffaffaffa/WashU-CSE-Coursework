<?php
echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Upload</title>
    <link rel="stylesheet" href= "style.css" >
</head> 
<body>
HTML;
session_start();

//get file name and make sure it is valid
$filename = basename($_FILES['uploadedfile']['name']);
if (!preg_match('/^[\w_\.\-]+$/', $filename)){
    echo "Invalid filename";
    exit;
}

// get username and make sure valid
$username = $_SESSION['user'];
if (!preg_match('/^[\w_\-]+$/', $username)) {
    echo "Invalid username";
    exit;
}

// Check if the file already exists
if (file_exists(sprintf("/home/module2-users/user-uploads/%s/%s",$username, $filename))) {
    header("Location: file-already-exists.php");
    exit;
} 

$full_path = sprintf("/home/module2-users/user-uploads/%s/%s", $username, $filename); // TODO: save the logic of generating the file path (in a function) in a third file that you include into the upload and download scripts.

if (move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $full_path)) {
    header("Location: upload_success.php");
    exit;
}
else {
    header("Location: upload_failure.php");
    exit;
}
echo "</body> </html>"

?>