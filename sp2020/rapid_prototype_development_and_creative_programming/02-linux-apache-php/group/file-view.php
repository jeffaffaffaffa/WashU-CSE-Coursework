<?php
    function viewFile($displayType="user") {
        include 'check-user-logged-in.php'; // TODO: put file name in title

        $filename = htmlentities($_GET['file']);

        if( !preg_match('/^[\w_\.\-]+$/', $filename) ){
            echo "Invalid filename";
            exit;
        }

        $user = htmlentities($_SESSION['user']);
        if( !preg_match('/^[\w_\-]+$/', $user) ){
            echo "Invalid username";
            exit;
        }
        $full_path = sprintf("/home/module2-users/%s-uploads/%s/%s", $displayType, $user, $filename);

        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $mime = $finfo->file($full_path);

        header("Content-Type: ".$mime);
        header('content-disposition: inline; filename="'.$filename.'";');

        readfile($full_path);
    }
?>