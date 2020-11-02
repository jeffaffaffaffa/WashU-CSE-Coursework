<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Make a post!</title>
    <link rel="stylesheet" href= "new-post.css" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <?php 
        session_start();
        $_SESSION['token2'] = bin2hex(openssl_random_pseudo_bytes(32));
        $userExists = isset($_SESSION['user_id']); // boolean value that is TRUE when a user is signed in and FALSE otherwise
        if (!$userExists) {
            echo "Uh Oh! You've found a feature only for registered users! Please sign in!";
            header( "refresh:2; url=loginandhome.php" ); // unregistered user should not be able to be here
            exit;
        }
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
    <h3>Make a post:</h3>
    <form id="new-post" action="newpost.php" method="POST">
        <label>Title: <input type="text" name="title" id="title" placeholder="Florida man..." /></label><br>
        <textarea name="body" id="body" placeholder="45 year old Michael Stevens from Fort Lauderdale..."></textarea><br>
        <label>Link (include http:// or https://): <input type="url" name="link" id="link" placeholder="http://www.myflorida.com" value='' maxlength="255"></label><br>
        <input type="hidden" name="token2" value="<?php echo $_SESSION['token2'];?>" />
        <input type="submit" value="Create" />
    </form>

</body>
</html>