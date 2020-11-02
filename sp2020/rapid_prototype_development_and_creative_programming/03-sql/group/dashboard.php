<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard</title>
    <link rel="stylesheet" href= "loginandhome.css" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <?php
        session_start();
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
                echo "<p>Uh Oh! You've found a feature only for registered users! Please sign in!</p>";
                header( "refresh:2; url=loginandhome.php" ); // unregistered user should not be able to be here
                exit;
            }
            require 'connect_to_database.php';
            $mysqli = connectDatabase('registered');

            // Stories List
            $stmt = $mysqli->prepare('SELECT title, author_id, date_created, stories.id AS story_id FROM stories WHERE author_id=? ORDER BY date_created DESC;'); //TODO: change 25 to a variable
            if(!$stmt){
                printf("Query Prep Failed: %s\n", $mysqli->error);
                exit;
            }
            $stmt->bind_param('i', $_SESSION['user_id']);
            $stmt->execute();
            $stmt->bind_result($title, $authorIid, $dateCreated, $storyId);
           
            // echo '<div class="wrapper">';
            echo '<h3><a href="edit-user-pass.php">Edit Account Info</a></h3>';
            printf("<h4>Username: %s</h4>", $_SESSION['username']);
            echo "<h4>Your Stories</h4><ul>";
    
            $postExist = FALSE; //temporary to check that loop is working
    
            while($stmt->fetch()){
                printf("\t<li><a href='view-story.php?post=%s'>%s</a> | %s</li>\n",
                    htmlspecialchars($storyId),
                    htmlspecialchars($title),
                    htmlspecialchars($dateCreated)
                );
    
                $postExist=TRUE;
            }
            if (!$postExist) {
                echo "<li>You have no stories.</li>";
            }
            echo "</ul>\n";

            // Comments List
            $postExist = FALSE;
            $commentSnippetLength = 100; // Length of comment snippet for user to view on dashboard.
            $stmt = $mysqli->prepare('SELECT comments.id AS comment_id, LEFT(comments.content,?) AS comment_snippet, char_length(comments.content), comments.author_id, story_id, title, comments.date_created FROM comments JOIN stories ON (comments.story_id=stories.id) WHERE comments.author_id=? ORDER BY date_created DESC');
            if(!$stmt){
                printf("Query Prep Failed: %s\n", $mysqli->error);
                exit;
            }
            $stmt->bind_param('ii', $commentSnippetLength, $_SESSION['user_id']);
            $stmt->execute();
            $stmt->bind_result($commentId, $commentSnippet, $commentLength, $authorIid, $storyId, $title, $dateCreated);
            // echo '<div class="wrapper">';
            echo "<h4>Your Comments</h4> <ul>";
    
            $storiesExist = FALSE; //temporary to check that loop is working
    
            while($stmt->fetch()){
                $commentOnDashboard = $commentSnippetLength <= $commentLength ? htmlspecialchars($commentSnippet)."..." : htmlspecialchars($commentSnippet);

                printf("<li> %s | <a href='view-story.php?post=%s'>%s</a> | %s</li>",
                $commentOnDashboard,
                htmlspecialchars($storyId),
                // htmlspecialchars($title),
                htmlspecialchars($title),
                htmlspecialchars($dateCreated)
                );
                $postExist=TRUE;
            }
            if (!$postExist) {
                echo "<li>You have no comments.</li>";
            }
            echo "</ul>\n";
        ?>
    </div>
</body>
</html>