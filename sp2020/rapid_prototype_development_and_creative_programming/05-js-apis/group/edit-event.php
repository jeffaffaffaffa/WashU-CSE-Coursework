<?php
    include_once("connect-to-database.php");
    ini_set("session.cookie_httponly", 1);
    session_start();

    $userExists = isset($_SESSION['user_id']);

    if ($userExists) {
        $username = $_SESSION['username'];
        $user_id = $_SESSION['user_id'];
    } else {
        $username = NULL;
        $user_id = NULL;
    }

    if ($userExists) {
        $json_str = file_get_contents('php://input');
        $json_obj = json_decode($json_str, true);
    
        $event_id = htmlentities($json_obj['event_id']);
        // $user_id = htmlentities($json_obj['user_id']);
        $title = htmlentities($json_obj['title']);
        $content = htmlentities($json_obj['content']);
        $event_datetime = htmlentities($json_obj['event_datetime']);
        $token = htmlentities($json_obj['token']);

        if(!hash_equals($_SESSION['token'], $token)){
            die("Request forgery detected");
        }
    
        // FIXME: PROTECT AGAINST SQL INJECTION ATTACKS WITH ID (CHECK THE USER IS GOOD)
        $stmt = $mysqli->prepare("UPDATE events SET title=?, content=?, event_datetime=? WHERE id=? AND user_id=?");
        if(!$stmt){
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
    
        $stmt->bind_param('sssss', $title, $content, $event_datetime, $event_id, $user_id);
        $stmt->execute();
        $stmt->close();
    
        $response["status"] = "success"; // The database has been successfully connected to and event edited
    }
    
    echo json_encode($response); 
?>