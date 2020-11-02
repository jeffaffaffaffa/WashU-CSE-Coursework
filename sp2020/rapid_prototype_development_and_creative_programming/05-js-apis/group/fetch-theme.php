<?php
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
        $stmt = $mysqli->prepare("SELECT (theme) FROM users WHERE id=?");
        if(!$stmt){
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
        $stmt->bind_param("s", $user_id);
        $stmt->execute();
        $stmt->bind_result($theme);
        $theme = htmlentities($theme);
        $stmt->fetch();
        $stmt->close();

        $response['status'] = "success";
        $response['user_id'] = $user_id;
        $response['theme'] = $theme;
    }
    echo json_encode($response);
?>