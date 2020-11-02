<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>View Story</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <?php
        session_start();
        $_SESSION['token3'] = bin2hex(openssl_random_pseudo_bytes(32));

        $userExists = isset($_SESSION['user_id']); // boolean value that is TRUE when a user is signed in and FALSE otherwise
    ?>
        <!-- echo <<<HTML -->
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
            require 'connect_to_database.php';
            if ($userExists) {
                $mysqli = connectDatabase('registered');
            } else {
                $mysqli = connectDatabase('unregistered');
            }
            // echo htmlentities($_GET['post']);
            $storyId = htmlentities($_GET['post']); //FIXME: go back to home screen if post doesn't exist!!
            
            $stmt = $mysqli->prepare('SELECT title, content, username, stories.author_id, date_created, link FROM stories JOIN users ON (author_id=users.id) WHERE stories.id=?;'); //TODO: change 25 to a variable
            if(!$stmt){
                printf("Query Prep Failed: %s\n", $mysqli->error);
                exit;
            }
            $stmt->bind_param('i', $storyId);
            $stmt->execute();
            $stmt->bind_result($title, $content, $username, $storyAuthorId, $date, $link);
            $stmt->fetch();
            
            echo "<h2>".htmlspecialchars($title)."</h2>";
            echo "<h4>".htmlspecialchars($username)."</h4>";
            echo "<h4>".htmlspecialchars($date)."</h4>";
            echo "<p>".htmlspecialchars($content)."</p>";
            // only post link if it exists (i.e. it's length is > 0)
            if (strlen(htmlspecialchars($link))) {printf("<a href=%s>%s</a><br><br>", htmlspecialchars($link), htmlspecialchars($link)); }

            $stmt->close();

            if ($userExists && $_SESSION['user_id'] == $storyAuthorId) { ?>
                <form id="edit-story" action="make-changes.php" method="POST">
                    <input type="hidden" name="contentType" value="story" />
                    <?php printf('<input type="hidden" name="contentId" value=%d />', $storyId) ?>
                    <input type="submit" name="changeType" value="edit" />
                    <input type="submit" name="changeType" value="delete" />
                </form>
            <?php }

            echo "<h4>Comments</h4>";

            if ($userExists) { //if user exists can post comments
                echo <<<HTML
                    <form id="new-comment" action="newcomment.php" method="POST">
                        <textarea name="comment" id="comment" placeholder="comment"></textarea><br>
                        <input type="hidden" name="token3" value="$_SESSION[token3]" /> 
                        <input type="submit" value="Post" />
                        <input type="hidden" name="storyId" value=$storyId />
                    </form>
HTML;
            }
            // TODO; check it queries the correct author_id
            $stmt = $mysqli->prepare('SELECT comments.id AS comment_id, comments.author_id, users.username, comments.content, comments.date_created FROM comments JOIN stories ON (comments.story_id=stories.id) JOIN users ON (comments.author_id=users.id) WHERE story_id=? ORDER BY date_created DESC;');
            if(!$stmt){
                printf("Query Prep Failed: %s\n", $mysqli->error);
                exit;
            }
            $stmt->bind_param('i', $storyId);
            $stmt->execute();
            $stmt->bind_result($commentId, $authorId, $username, $content, $date_created);

            echo "<ul>";
            while($stmt->fetch()){ ?>
                <li>
                <?php printf("%s | %s | %s",
                    htmlspecialchars($content),
                    htmlspecialchars($username),
                    htmlspecialchars($date_created)
                ); 
                if ($userExists && $authorId == $_SESSION['user_id']) {
                ?>
                <form action="make-changes.php" method="POST">
                    <input type="hidden" name="contentType" value="comment" />
                    <input type="hidden" name="storyId" value="<?php echo $storyId;?>" />
                    <?php printf('<input type="hidden" name="contentId" value=%d />', $commentId) ?>
                    
                    <input type="submit" name="changeType" value="edit" />
                    <input type="submit" name="changeType" value="delete" />
                </form>
                <?php } ?>
                </li>
            <?php }
            echo "</ul>";
        ?>
    </div>
</body>
</html>