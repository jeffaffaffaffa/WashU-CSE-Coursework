<?php
    include_once("connect-to-database.php");
    ini_set("session.cookie_httponly", 1);
    session_start();
    $userExists = isset($_SESSION['user_id']);

    if ($userExists) {
        $username = htmlentities($_SESSION['username']); // FIXME: htmlentities or not? i forget
        $user_id = htmlentities($_SESSION['user_id']);
    } else {
        $username = NULL;
        $user_id = NULL;
    }

    if ($userExists) {
        $json_str = file_get_contents('php://input');
        $json_obj = json_decode($json_str, true);
        $event_id = htmlentities($json_obj['event_id']);
        $token = htmlentities($json_obj['token']);

        if(!hash_equals($_SESSION['token'], $token)){
            die("Request forgery detected");
        }
    
        // Delete the shared events
        $stmt = $mysqli->prepare("DELETE sharedEvents FROM sharedEvents JOIN events ON (sharedEvents.event_id = events.id) WHERE event_id=? AND events.user_id=?");
        if(!$stmt){
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
    
        $stmt->bind_param('ss', $event_id, $user_id);
        $stmt->execute();
        $stmt->close();

        $stmt = $mysqli->prepare("DELETE FROM events WHERE id=? AND user_id=?");
        if(!$stmt){
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
    
        $stmt->bind_param('ss', $event_id, $user_id);
        $stmt->execute();
        $stmt->close();
    
        $response["status"] = "success"; // The database has been successfully connected to and event deleted
    }
    
    echo json_encode($response); 
?>