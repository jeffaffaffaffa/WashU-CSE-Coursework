<?php
    session_start();
    $userExists = isset($_SESSION['user_id']); // boolean value that is TRUE when a user is signed in and FALSE otherwise

    if(!hash_equals($_SESSION['token3'], htmlentities($_POST['token3']))){
	    die("Request forgery detected");
    } 

    if (!$userExists) {
        echo "Uh Oh! You've found a feature only for registered users! Please sign in!";
        header( "refresh:2; url=loginandhome.php" ); // unregistered user should not be able to be here
        exit;
    }

    // echo $_SESSION['user_id'];
    require 'connect_to_database.php';
    $mysqli = connectDatabase('registered');

    $comment = htmlentities($_POST['comment']);
    $storyId = htmlentities($_POST['storyId']);


    // echo "comment: ".$comment."</br>";
    // echo "storyId: ".$storyId."</br>";
    

    if (strlen($comment) == 0) {
        echo "Comment must be nonempty.";
        header("refresh:2; url=view-story.php?post=$storyId");
        exit;
    }

    $stmt = $mysqli->prepare('INSERT INTO comments (author_id, story_id, content) VALUES (?, ?, ?);');
    if (!$stmt) {
        printf("Query Prep Failed: %s\n", $mysqli->error);
        header("refresh:2; url=view-story.php?post=$storyId");
        exit;
    }
    
    $stmt->bind_param('iis', $_SESSION['user_id'], $storyId, $comment);
    $stmt->execute();
    $stmt->close();
    header("Location: view-story.php?post=$storyId");
?>