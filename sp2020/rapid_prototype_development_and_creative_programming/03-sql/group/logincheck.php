<?php
    session_start();
    if (!isset($_POST['token1'])) {
        header("Location: loginandhome.php"); // unregistered user should not be able to be here
        exit;
    }
    
    require 'connect_to_database.php';
    $mysqli = connectDatabase();

    // echo htmlentities($_POST['token1']);
    // echo $_SESSION['token1']; // TODO: check about htmlentities

    if(!hash_equals($_SESSION['token1'], htmlentities($_POST['token1']))){
	    die("Request forgery detected");
    }

    $stmt = $mysqli->prepare("SELECT COUNT(*), id, 
    hashed_password, username FROM users WHERE username=?"); // FIXME: check about also selecting username

    $stmt->bind_param('s', $user);
    $user = htmlentities($_POST['user']);
    $stmt->execute();

    $stmt->bind_result($cnt, $user_id, $pwd_hash, $username);
    $stmt->fetch();

    $pwd_guess = htmlentities($_POST['pass']);

    if($cnt == 1 && password_verify($pwd_guess, $pwd_hash)) {
        if ($_POST['endLocation'] == "editUser") {
            $_SESSION['user_valid'] = $user_id;
            header("Location: edit-user-pass.php");
        } else {
            $_SESSION['user_id'] = $user_id;
            $_SESSION['username'] = $username;
            header("Location: loginandhome.php"); //the main page with all news things  
        }
        exit;
    } else {
        if ($_POST['endLocation'] == "editUser") {
            echo "Login Failed";
            header( "refresh:2; url=loginandhome.php" );
        } else {
            header("Location: query_prep_fail.php"); //for debugging, quert prep failure
        }
        exit;
    }
    ?>



