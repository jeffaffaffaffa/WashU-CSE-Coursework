<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Module 3 Simple News Site</title>
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
        <?php if ($userExists) { ?>
            |
            <a class="top" href="log-out.php">Log Out</a>
            |
            <a href="dashboard.php">Dashboard</a>
        <?php } ?>
        <h1>The Daily Coder</h1>
    </header>
    <?php
    if ($userExists) {
        echo '<a href="new-post.php">New Post</a> | ';
    }
    ?>
    <a href="search.php">Search</a> <br>
    <?php 
    
    $_SESSION['token1'] = bin2hex(openssl_random_pseudo_bytes(32));

    if (!$userExists) {
    ?>
    <!-- <div> -->
    <form id="login_user" action="logincheck.php" method="POST">
        <h4>Login:</h4>
        <label>Username: <input type="text" name="user" /></label><br>
        <label>Password: <input type="password" name="pass" /></label><br>
        <input type="hidden" name="token1" value="<?php echo $_SESSION['token1']?>" />
        <input type="hidden" name="endLocation" value="initialLogin" />
        <input type="submit" value="login" />
    </form>

    <form id="register" action="register.php" method="POST">
        <h4>New User:</h4>
        Username: <input type="text" name="register_user" /><br>
        Password: <input type="password" name="register_pass" /><br> 
        <input type="submit" value="Create Account" />
    </form>
    <!-- </div> -->
<?php
    }
        require 'connect_to_database.php';

        if ($userExists) {
            $mysqli = connectDatabase('registered');
        } else {
            $mysqli = connectDatabase('unregistered');
        }

        $stmt = $mysqli->prepare("SELECT title, date_created, username, stories.id AS story_id FROM stories JOIN users ON (author_id=users.id) ORDER BY date_created DESC LIMIT ?, ?;"); //TODO: change 25 to a variable
        if(!$stmt){
            printf("Query Prep Failed: %s\n", $mysqli->error);
            exit;
        }

        $pageLimit = 10;
        if (isset($_GET['page'])) {
            $pageNum = htmlentities($_GET['page']);
            $pageStart = 10*$pageNum;
        } else {
            $pageNum = 0;
            $pageStart = 0;
        }
        $stmt->bind_param('ii',$pageStart, $pageLimit);
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

            $storiesExist=TRUE;
        }
        echo "</ul>\n";
        if ($storiesExist!=TRUE)
        {
            echo "no stories";
        }
        $stmt->close();
        
        $nextPage = $pageNum + 1;
        $prevPage = $pageNum - 1;

        ?>

        <form id="next-previous-page" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="GET">
            <?php if ($pageNum > 0) { ?>
                <input type="submit" name="page" value=<?php echo $prevPage; ?> />
            <?php } ?>
            <input type="submit" name="page" value=<?php echo $nextPage; ?>  />
        </form>
    </div>
</body>
</html>