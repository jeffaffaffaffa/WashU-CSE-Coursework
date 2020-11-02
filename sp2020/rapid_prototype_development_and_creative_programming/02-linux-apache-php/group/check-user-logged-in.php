<?php
    // This is run on pages that require a user to be signed in. If the user is not signed in, redirect them back to the login page.
    session_start();
    if (!isset($_SESSION["user"])) {
        header( "refresh:2; url=mod2-file-sharing.php" );
        echo 'Not logged in. Redirecting you back to log-in screen...';
        exit;
    }
?>