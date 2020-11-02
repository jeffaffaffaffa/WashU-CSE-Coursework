<?php
    session_start();
    $userExists = isset($_SESSION['user_id']); // boolean value that is TRUE when a user is signed in and FALSE otherwise

    if(!hash_equals($_SESSION['token2'], htmlentities($_POST['token2']))){
	    die("Request forgery detected");
    } 
    
    if (!$userExists) {
        echo "Uh Oh! You've found a feature only for registered users! Please sign in!";
        header( "refresh:2; url=loginandhome.php" ); // unregistered user should not be able to be here
        exit;
    }

    echo $_SESSION['user_id'];
    require 'connect_to_database.php';
    $mysqli = connectDatabase('registered');

    $title = htmlentities($_POST['title']);
    $body = htmlentities($_POST['body']);
    $link = htmlentities($_POST['link']);

    if (strlen($title) == 0 || strlen($body) == 0) {
        echo "Title and body must be nonempty."; //FIXME: is this the best way to do this since we don't know js yet?
        header( "refresh:2; url=new-post.php");
        exit;
    }

    //how to get the current user's id/username to insert into table?

    // TODO: deal w/links
    $stmt = $mysqli->prepare("INSERT INTO stories (author_id, title, content, link) VALUES (?, ?, ?, ?)"); //TODO: NEED TO ADD LINK FIELD IN TABLE
    if (!$stmt) {
        printf("Query Prep Failed: %s\n", $mysqli->error);
        header("Location: query_prep_fail.php"); //for debugging, query prep failure
        exit;
    }

    $link = strlen($link) == 0 ? NULL : $link;

    $stmt->bind_param('ssss', $_SESSION['user_id'], $title, $body, $link);

    $stmt->execute();

    $stmt->close();

    header("Location: loginandhome.php");

?>