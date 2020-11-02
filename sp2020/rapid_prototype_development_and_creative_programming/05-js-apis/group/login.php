
<?php
    require 'connect-to-database2.php';
    header("Content-Type: application/json");
  
    $stmt = $mysqli->prepare("SELECT COUNT(*), id, hashed_password, username FROM users WHERE username=?");
    if(!$stmt){
  	  printf("Query Prep Failed: %s\n", $mysqli->error);
  	  exit;
    }
    $user = (String)htmlentities($_POST['username']);
    $stmt->bind_param('s', $user);
    $stmt->execute();
    $stmt->bind_result($cnt, $user_id, $pwd_hash, $username);
    $stmt->fetch();

    $pwd_guess = (String)htmlentities($_POST['password']);
    // Make sure that the passwords match and there is only one user that matches
    // the given username
    if($cnt == 1 && password_verify($pwd_guess, $pwd_hash)){
      // Login succeeded!
      ini_set("session.cookie_httponly", 1);
      session_start();
      $_SESSION['username'] = $username;

      // make the token
      $_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(32));
      
      $_SESSION['user_id'] = $user_id;

      echo json_encode(array(
        "success" => true,
        "message" => "Login success!",
        "token" => $_SESSION['token'],
        "id" => $user_id
      ));
      exit;
    }
    else{
      echo json_encode(array(
        "success" => false,
        "message" => "Incorrect username or password, please try again!"
      ));
      exit;
    }
?>