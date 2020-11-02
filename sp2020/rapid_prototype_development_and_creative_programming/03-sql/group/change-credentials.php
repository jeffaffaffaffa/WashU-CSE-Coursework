<?php
    session_start();
    
    require 'connect_to_database.php';
    $mysqli = connectDatabase('registered');

    $username = htmlentities($_POST['newuser']);
    echo "username: ".$username;

    if (strlen($username) == 0) {
        echo "The username must be nonempty."; //FIXME: is this the best way to do this since we don't know js yet?
        header( "refresh:2; url=edit-user-pass.php");
        exit;
    }

    if (!preg_match('/^[\w_\.\-]+$/', $username)) {
        echo "The username must not contain any special characters.";
        header( "refresh:2; url=edit-user-pass.php");
        exit;
    }

    // TODO: checkj about case sensitivity!!!
    $stmt = $mysqli->prepare("SELECT username FROM users WHERE username=?;");
    if (!$stmt) {
        printf("Query Prep Failed: %s\n", $mysqli->error);
        header("Location: query_prep_fail.php"); //for debugging, quert prep failure
        exit;
    }
    $stmt->bind_param('s', $returnedUsername);
    $stmt->execute();
    $stmt->bind_result($returnedUsername);
    $stmt->fetch();
    $returnedUsername = htmlspecialchars($returnedUsername);

    if (strlen($returnedUsername)>0) {
        printf("The username %s already exists. Please choose another.", $returnedUsername);
        header( "refresh:2; url=edit-user-pass.php");
        exit;
    }

    $stmt = $mysqli->prepare("UPDATE users SET username = ? WHERE id = ?");
    if (!$stmt) {
        printf("Query Prep Failed: %s\n", $mysqli->error);
        header("Location: query_prep_fail.php"); //for debugging, quert prep failure
        exit;
    }

    $stmt->bind_param("si", $username, $_SESSION['user_id']);
    $stmt->execute();
    $stmt->close();

    $_SESSION['username'] = $username;

    header("Location: username-updated.php");

?>