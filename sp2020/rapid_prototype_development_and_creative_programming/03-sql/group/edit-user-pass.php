<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit Account Information</title>
    <link rel="stylesheet" href= "loginandhome.css" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <?php
        session_start();
        $userValid = isset($_SESSION['user_valid']); // boolean value that is TRUE when a user is signed in and FALSE otherwise
    ?>

    <header>
        <a href="loginandhome.php">Main Page</a>
        <?php if (isset($_SESSION['user_id'])) { ?>
            |
            <a class="top" href="log-out.php">Log Out</a>
            |
            <a href="dashboard.php">Dashboard</a>
            <!-- |
            <a href="edit-user-pass.php">Edit Account Info</a> -->
        <?php } ?>
        <h1>The Daily Coder</h1>
    </header>

    <?php
        // $_SESSION['token2'] = bin2hex(openssl_random_pseudo_bytes(32));
    ?>

    <?php if (!$userValid) { ?>
        <!-- <form id="login_user" action="logincheck2.php" method="POST"> -->
        <form id="login_user" action="logincheck.php" method="POST">
            <h4>Must login before changes are allowed:</h4>
            <label>Username: <input type="text" name="user" /></label><br>
            <label>Password: <input type="password" name="pass" /></label><br>
            <input type="hidden" name="token1" value=<?php /*echo $_SESSION['token2'];*/ echo $_SESSION['token1'];?> />
            <input type="hidden" name="endLocation" value="editUser" />
            <input type="submit" value="login" />
        </form>
    <?php } ?>

    <?php if ($userValid) { ?>
        <h3>Change Username:</h3>
        <form class="newcreds" action="change-credentials.php" method="POST">
            <input type="text" name="newuser" id="newuser" placeholder="New username" /><br>
            <input type="submit" value="Update" />
        </form>
        <h3>Change Password:</h3>
        <form class="newcreds" action="change-credentials2.php" method="POST">
            <input type="password" name="newpass" id="newpass" placeholder="New password" /><br>
            <input type="password" name="newpass2" id="newpass2" placeholder="Type again" /><br>
            <input type="submit" value="Update" />
        </form>

    <?php 
        unset($_SESSION['user_valid']);
        } 
    ?>