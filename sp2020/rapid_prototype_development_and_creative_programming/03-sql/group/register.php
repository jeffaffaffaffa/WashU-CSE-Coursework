<?php

    require 'connect_to_database.php';
    $mysqli = connectDatabase('register');

    $username = htmlentities($_POST['register_user']);
    $pass = htmlentities($_POST['register_pass']);

    if (strlen($username) == 0 || strlen($pass) == 0) {
        echo "Both the username and password must be nonempty."; //FIXME: is this the best way to do this since we don't know js yet?
        header( "refresh:2; url=loginandhome.php");
        exit;
    }

    if (!preg_match('/^[\w_\.\-]+$/', $username)) {
        echo "The username must not contain any special characters.";
        header( "refresh:2; url=loginandhome.php");
        exit;
    }

    if (preg_match('[\s]', $pass)) {
        echo "The password must not contain any whitespace.";
        header( "refresh:2; url=loginandhome.php");
        exit;
    }

    // TODO: checkj about case sensitivity!!!
    $stmt = $mysqli->prepare("SELECT username FROM users WHERE username=?;");
    if (!$stmt) {
        printf("Query Prep Failed: %s\n", $mysqli->error);
        header("Location: query_prep_fail.php"); //for debugging, quert prep failure
        exit;
    }
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->bind_result($returnedUsername);
    $stmt->fetch();
    $returnedUsername = htmlspecialchars($returnedUsername);

    if (strlen($returnedUsername)>0) {
        printf("The username %s already exists. Please choose another.", $returnedUsername);
        header( "refresh:2; url=loginandhome.php");
        exit;
    }

    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

    $stmt = $mysqli->prepare("INSERT INTO users (username, hashed_password) VALUES (?, ?);");
    if (!$stmt) {
        printf("Query Prep Failed: %s\n", $mysqli->error);
        header("Location: query_prep_fail.php"); //for debugging, query prep failure
        exit;
    }

    //id should be auto increment i think, so it is generated when a new user is inserted.

    $stmt->bind_param('ss', $username, $hashed_password);

    $stmt->execute();

    $stmt->close();

    header("Location: register_success.php");

?>