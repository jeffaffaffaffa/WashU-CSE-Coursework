<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Your Files</title>
    <link rel="stylesheet" href= "style.css" >
</head>
<body>
    <?php
        include 'check-user-logged-in.php';
    ?>
    <div>
        <a class="top" href="log-out.php">log out</a>
        <a class="top" href="delete-user.php">Delete Account</a>
    </div>
    <?php
        $user = htmlentities($_SESSION["user"]);
        printf("<p>Hello, %s. Here are you files!</p>\n", $user);
    ?>
    
    <!-- Display files the user has uploaded -->
    <div id="all-files">
    <div class="file-list" id="user-files">
        <p>Your Files: </p>
        <form action="deleteAllYours.php">
            <input type="submit" value="Delete all of your files" />
        </form>

        <ul id="list-of-files">
            <?php
                include "list-files.php";
                createList("user");
            ?>
        </ul>
        <form enctype="multipart/form-data" action="upload.php" method="POST">
            <p>
                <input type="hidden" name="MAX_FILE_SIZE" value="30000000"/>
                <label for="uploadfile_input">Choose a file to upload:</label> <input name="uploadedfile" type="file" id="uploadfile_input">
            </p>
            <p>
                <input type="submit" value="Upload File"/>
         </p>
        </form>
    </div>

    <!-- Display files that have been shared with the user -->
    <div class="file-list" id="files-shared-from">
        <p>Files Shared with You:</p>
        <form action="deleteAllShared.php">
            <input type="submit" value="Delete all shared files" />
        </form>

        <ul id="list-of-shared-files">
            <?php
                createList("shared");
            ?>
        </ul>
    </div>
    </div>
</body>
</html>