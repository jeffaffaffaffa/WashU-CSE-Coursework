<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Search</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <?php 
        session_start();
        $userExists = isset($_SESSION['user_id']); // boolean value that is TRUE when a user is signed in and FALSE otherwise
    ?>
    <header>
        <a href="loginandhome.php">Main Page</a>
        <?php if ($userExists) { ?>
            |
            <a class="top" href="log-out.php">Log Out</a>
            |
            <a href="dashboard.php">Dashboard</a>
        <?php } ?>
        <h1>The Daily Coder</h1>
    </header>
    <div class="wrapper">
        <form id="register" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="POST">
            <label>Search: <input type="text" name="search-string" /></label><br>
            <label>Title<input type="radio" name="search-type" value="title" checked/> </label>
            <label>Username<input type="radio" name="search-type" value="username" /> </label>
            <input type="hidden" name="search" value="true" />
            <input type="submit" value="Go" />
        </form>

    <?php 
        require 'connect_to_database.php';

        if ($userExists) {
            $mysqli = connectDatabase('registered');
        } else {
            $mysqli = connectDatabase('unregistered');
        }
    
    if (isset($_POST['search'])) { ?>
        <h4>Search Results</h4>
        <?php 
            $searchResult = htmlentities($_POST['search-string']);
            $words = preg_split("/[\s,]*\\\"([^\\\"]+)\\\"[\s,]*|" . "[\s,]*'([^']+)'[\s,]*|" . "[\s,]+/", $searchResult, 0, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE); // found solution https://www.php.net/manual/en/function.preg-split.php

            $searchResult = implode("%' OR title LIKE '%", $words);

            if (htmlentities($_POST['search-type']) == "title") {
                $searchResult = "SELECT title, date_created, username, stories.id AS story_id FROM stories JOIN users ON (author_id=users.id) WHERE title LIKE '%" . $searchResult . "%' ORDER BY date_created DESC;";
            } else {
                $searchResult = "SELECT title, date_created, username, stories.id AS story_id FROM stories JOIN users ON (author_id=users.id) WHERE users.username LIKE '%" . $searchResult . "%' ORDER BY date_created DESC;";
            }


            $stmt = $mysqli->prepare($searchResult); //TODO: change 25 to a variable
            if(!$stmt){
                printf("Query Prep Failed: %s\n", $mysqli->error);
                exit;
            }

            $stmt->execute();
            
            $stmt->bind_result($title, $dateCreated, $authorUsername, $storyId);
            echo '<div class="wrapper">';
            echo "<ul>\n";

            $storiesExist = FALSE; //temporary to check that loop is working

            while($stmt->fetch()){
                printf("\t<li><a href='view-story.php?post=%s'>%s</a> | %s | %s</li>\n",
                    htmlspecialchars($storyId),
                    htmlspecialchars($title),
                    htmlspecialchars($authorUsername),
                    htmlspecialchars($dateCreated)
                );
            }
    } 
    ?>
    </div>
</body>
</html>