<?php 
echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Share</title>
    <link rel="stylesheet" href= "style.css" >
</head> 
<body>
HTML;
session_start();
$user = $_SESSION["user"];

//get file name and make sure it is valid
$filename = $_GET["file"];
echo "filename: ".$filename;
if (!preg_match('/^[\w_\.\-]+$/', $filename)){
    echo "Invalid filename";
    exit;
}

// get username and make sure valid
$sharedUser = $_GET["sharedUser"]; // Note: this is the user to share with!!
echo "\nsharedUser: ".$sharedUser;
if (!preg_match('/^[\w_\-]+$/', $sharedUser)) {
    echo "Invalid username";
    exit;
}

// TODO: check that user exists!

// Check if the file already exists
if (file_exists(sprintf("/home/module2-users/shared-uploads/%s/%s",$sharedUser, $filename))) {
    header("Location: file-already-exists.php");
    exit;
} 

$copyFrom = sprintf("/home/module2-users/user-uploads/%s/%s", $user, $filename);
$saveTo = sprintf("/home/module2-users/shared-uploads/%s/%s", $sharedUser, $filename); // TODO: save the logic of generating the file path (in a function) in a third file that you include into the upload and download scripts.

if (copy($copyFrom, $saveTo)) {
    header("Location: share_success.php");
    exit;
}
else { 
    header("Location: share_failure.php");
    exit;
}

echo "</body> </html>"
?>