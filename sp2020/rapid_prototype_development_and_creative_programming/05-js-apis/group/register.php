
<?php
require 'connect-to-database2.php';
header("Content-Type: application/json");

    $username = (String)htmlentities($_POST['username']);
    $password = (String)htmlentities($_POST['password1']);

    if ($username == '' || $password == '') {
        echo json_encode(array(
            "success" => false,
            "message" => "Username and Password must not be empty!"
            ));
        exit;
    }
    
    if (preg_match('[\s]', $password) || preg_match('[\s]', $username)) { //&& preg_match('[\s]', $passwordCheck)
        echo json_encode(array(
            "success" => false,
            "message" => "The username and password must not contain any whitespace."
            ));
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $mysqli->prepare("INSERT INTO users (username, hashed_password) VALUES (?, ?)");
    if(!$stmt){
        printf("Query Prep Failed: %s\n", $mysqli->error);
        exit;
    }
    // check for duplicate username
    $checkUser = $mysqli->prepare("SELECT username FROM users WHERE username=?");
    if(!$checkUser) {
        printf("Query Prep Failed: %s\n", $checkUser->error);
        exit;
    }
    
    $checkUser->bind_param('s', $username);
    $checkUser->execute();
    $checkUserResult=$checkUser->fetch();
    if ($checkUserResult != '') {
        echo json_encode(array(
        "success" => false,
        "message" => "Username already exists, please choose another one!"
        ));
        exit;
    } else {
        $stmt->bind_param('ss', $username, $hashed_password);
        $stmt->execute();
        $stmt->close();
        echo json_encode(array(
            "success" => true,
            "message" => "Registration successful!"
        ));
        exit;
}
?>