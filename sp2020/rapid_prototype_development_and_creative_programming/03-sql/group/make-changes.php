<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Make Changes</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <?php
        session_start();

    if (isset($_POST['selfsubmit'])){
        echo 'selfsubmit';
        if (isset($_SESSION['token3'])) { //since page loads before token is passed in modify form below
            // echo 'token set';
            echo "\n";
            var_dump($_SESSION['token3']);
            echo "\n";
            var_dump($_POST['token3']);
            echo "\n";
            if(!hash_equals($_SESSION['token3'], htmlentities($_POST['token3']))){
                die("Request forgery detected");
            }
        }
    }
        

        $userExists = isset($_SESSION['user_id']); // boolean value that is TRUE when a user is signed in and FALSE otherwise
    ?>
    <header>
        <a href="loginandhome.php">Main Page</a>
        <?php if (isset($_SESSION['user_id'])) { ?>
            |
            <a class="top" href="log-out.php">Log Out</a>
            |
            <a href="dashboard.php">Dashboard</a>
        <?php } ?>
        <h1>The Daily Coder</h1>
    </header>

    <div class="wrapper">
    <?php
        if (!$userExists) {
            echo "Uh Oh! You've found a feature only for registered users! Please sign in!";
            header( "refresh:2; url=loginandhome.php" ); // unregistered user should not be able to be here
            exit;
        }

        require 'connect_to_database.php';
        $mysqli = connectDatabase('registered');

        if (!(isset($_POST['contentType']) && isset($_POST['contentId']) && isset($_POST['changeType']))) {
            echo "You shouldn't be here... Redirecting";
            header( "refresh:2; url=loginandhome.php" ); // unregistered user should not be able to be here
            exit;
        }
        $contentType = htmlentities($_POST['contentType']); // Either comment or story. Page display depends on it.
        $contentId = htmlentities($_POST['contentId']); // The id of either the story or comment
        $changeType = htmlentities($_POST['changeType']); // Either edit or delete

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // This portion between the '/'s will only be called after making edits, or if the user selected delete.

        // This will be called when the changes have been made or if changeType is delete
        if (isset($_POST['changepost']) || $changeType=="delete") {
            if ($changeType=="delete") { // Delete story/comment
                // if(!hash_equals($_SESSION['token3'], htmlentities($_POST['tokend']))){
                //     die("Request forgery detected");
                // }
                // Delete a story
                if ($contentType == "story") {
                    // First, delete all associated comments
                    $stmt = $mysqli->prepare('DELETE FROM comments WHERE story_id=?'); //FIXME: protection against sql injection?
                    $stmt->bind_param('i', $contentId);
                    $stmt->execute();
                    $stmt->close();

                    // Now, delete the story
                    $stmt = $mysqli->prepare('DELETE FROM stories WHERE id=? AND author_id=?;'); // FIXME: Check if this is safe to do? could someone else delete? do we need to always verify password?
                    $stmt->bind_param('ii', $contentId, $_SESSION['user_id']);

                    // return home after deleting a post
                    $locationAfterExecute = "Location: loginandhome.php";
                } else { // Delete a comment
                    // Delete the comment
                    $stmt = $mysqli->prepare('DELETE FROM comments WHERE id=? AND author_id=?;'); // FIXME: Check if this is safe to do? could someone else delete? do we need to always verify password?
                    $stmt->bind_param('ii', $contentId, $_SESSION['user_id']);

                    // return home after deleting a post
                    $locationAfterExecute = sprintf("Location: view-story.php?post=%d", htmlentities($_POST['storyId']));
                }
            } else { // Edit story/comment
                // Edit a story
                if ($contentType == "story") {
                    $storyBody = htmlentities($_POST['body']);
                    $storyTitle = htmlentities($_POST['title']);
    
                    $stmt = $mysqli->prepare('UPDATE stories SET title=?, content=? WHERE id=? AND author_id=?;'); // FIXME: Check if this is safe to do? could someone else delete? do we need to always verify password?
                    $stmt->bind_param('ssii', $storyTitle, $storyBody, $contentId, $_SESSION['user_id']);

                    $locationAfterExecute = sprintf("Location: view-story.php?post=%d", $contentId);
                } else { // Edit a comment
                    $commentBody = htmlentities($_POST['body']);

                    // TODO: do this
                    $stmt = $mysqli->prepare('UPDATE comments SET content=? WHERE id=? AND author_id=?;');
                    $stmt->bind_param('sii', $commentBody, $contentId, $_SESSION['user_id']);

                    $locationAfterExecute = sprintf("Location: view-story.php?post=%d", htmlentities($_POST['storyId']));
                }
            }
            $stmt->execute();
            $stmt->close();
            header($locationAfterExecute);
            exit;
        }


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if ($contentType=="story") { // story
        $stmt = $mysqli->prepare('SELECT title, content, link FROM stories WHERE author_id=? AND id=?');
    } else { // comment
        $stmt = $mysqli->prepare("SELECT content FROM comments WHERE author_id=? AND id=?;"); // FIXME: add!!
    }
    if (!$stmt) {
        printf("Query Prep Failed: %s\n", $mysqli->error);
        header("Location: query_prep_fail.php"); //for debugging, query prep failure
        exit;
    }
    $stmt->bind_param('ii', $_SESSION['user_id'], $contentId);
    $stmt->execute();
    if ($contentType=="story") {
        $stmt->bind_result($title, $content, $link);
    } else {
        $stmt->bind_result($content);
    }
    $stmt->fetch();
    ?>
    
    <h4>Modify your <?php if ($contentType=="story") { echo "story"; } else { echo "comment"; } ?> </h4>

    <form id="change-post" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="POST">
        <!-- Only display title if it's a story (comments don't have titles) -->
        <?php if ($contentType=="story") { ?> <label>Title: <input type="text" name="title" id="title" value=<?php echo "\"".htmlspecialchars($title)."\"";?>/></label><br> <?php }?>
    
        <textarea name="body" id="body"><?php echo htmlspecialchars($content); ?></textarea><br>

        <!-- Only display link if it's a story -->
        <?php if ($contentType=="story") { ?> <label>Link (include http:// or https://): <input type="url" name="link" id="change-link" value=<?php echo "\"".htmlspecialchars($link)."\"";?>/></label><br> <?php }?>

        <input type="submit" value="Make Changes" />
        <input type="hidden" name="changepost" value="change" />
        <input type='hidden' name='contentType' value=<?php echo $contentType;?> />
        <input type='hidden' name='contentId' value=<?php echo $contentId;?> />
        <input type='hidden' name='changeType' value=<?php echo $changeType;?> />
        <?php if ($contentType=="comment") { ?> <input type='hidden' name='storyId' value=<?php echo htmlentities($_POST['storyId']);?> /><?php } ?>
        <input type="hidden" name="token3" value="<?php echo $_SESSION['token3']; ?>" />
        <input type="hidden" name="selfsubmit" value="true"/>
    </form>

    </div>
</body>
</html>


<!-- htmlentities($_POST['storyId']) -->