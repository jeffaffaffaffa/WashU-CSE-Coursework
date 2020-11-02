<?php
    // require 'connect-to-database2.php';
    require 'connect-to-database.php';
    ini_set("session.cookie_httponly", 1);
    session_start();
    $userExists = isset($_SESSION['user_id']);

    if ($userExists) {
        $username = $_SESSION['username']; // FIXME: htmlentities or not? i forget
        $user_id = $_SESSION['user_id'];
    } else {
        $username = NULL;
        $user_id = NULL;
    }

    if ($userExists) {
        // header("Content-Type: application/json");
        $json_str = file_get_contents('php://input');
        $json_obj = json_decode($json_str, true);

        $theme = htmlentities($json_obj['theme']);

        // $theme = (String)htmlentities($_POST['theme']);

        $stmt = $mysqli->prepare("UPDATE users SET theme=? WHERE id=?");
        if(!$stmt){
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
        $stmt->bind_param("ss", $theme, $user_id);
        $stmt->execute();
        $stmt->close();

        $response['status'] = "success";
    }
    
    echo json_encode($response);
?>