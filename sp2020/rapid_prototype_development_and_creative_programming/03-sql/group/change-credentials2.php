<?php
    session_start();

    require 'connect_to_database.php';
    $mysqli = connectDatabase('registered');

    $pass = htmlentities($_POST['newpass']);
    $pass2 = htmlentities($_POST['newpass2']);

    if (strlen($pass) == 0 || strlen($pass2) == 0) {
        echo "The passwords must be nonempty."; //FIXME: is this the best way to do this since we don't know js yet?
        header( "refresh:2; url=edit-user-pass.php");
        exit;
    }

    if ($pass != $pass2) {
        echo "Must enter the same password twice.";
        header( "refresh:2; url=edit-user-pass.php");
        exit;
    }

    if (preg_match('[\s]', $pass)) {
        echo "The password must not contain any whitespace.";
        header( "refresh:2; url=edit-user-pass.php");
        exit;
    }

    $hashed_password2 = password_hash($pass2, PASSWORD_DEFAULT);

    $stmt = $mysqli->prepare("UPDATE users SET hashed_password = ? WHERE id = ?");
    if (!$stmt) {
        printf("Query Prep Failed: %s\n", $mysqli->error);
        header("Location: query_prep_fail.php"); //for debugging, quert prep failure
        exit;
    }

    $stmt->bind_param('si', $hashed_password2, $_SESSION['user_id']);
    $stmt->execute();
    $stmt->close();

    header("Location: pass-updated.php");

?>