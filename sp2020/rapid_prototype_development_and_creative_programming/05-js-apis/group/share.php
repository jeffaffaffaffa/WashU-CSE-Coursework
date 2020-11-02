<?php
    include_once("connect-to-database.php");
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
        $json_str = file_get_contents('php://input');
        $json_obj = json_decode($json_str, true);

        $event_id = htmlentities($json_obj["event_id"]);
        $recipient_username = htmlentities($json_obj["recipient_username"]);
        $token = htmlentities($json_obj['token']);

        if(!hash_equals($_SESSION['token'], $token)){
            die("Request forgery detected");
        }

        // Get the username's id
        $stmt = $mysqli->prepare("SELECT id FROM users WHERE username=?");
        if(!$stmt){
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
        $stmt->bind_param('s', $recipient_username);
        $stmt->execute();
        $stmt->bind_result($recipient_id);
        $stmt->fetch();
        $stmt->close();

        // Get the number of events with the same recipient_id and event_id. We do not want to allow duplicates. Even though database does not allow this
        // attempting to insert increments the id, so I don't want to do that.
        $stmt = $mysqli->prepare("SELECT COUNT(*) FROM sharedEvents WHERE recipient_id=? AND event_id=?");
        if(!$stmt){
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
        $stmt->bind_param('ss', $recipient_id, $event_id);
        $stmt->execute();
        $stmt->bind_result($checkIfAlreadyShared);
        $stmt->fetch();
        $stmt->close();

        if ($checkIfAlreadyShared > 0) { // check if already been shared with the user
            $response["failure_response"]["message"] = "Already shared with this user";
        } else {
            if ($recipient_id == NULL) {
                $response["failure_response"]["message"] = "User does not exist";
            } else if ($user_id != $recipient_id) {
                $stmt = $mysqli->prepare("INSERT INTO sharedEvents (recipient_id, event_id) VALUES (?,?)");
                if(!$stmt){
                    $response["failure_response"] = array(
                        "type" => "Query Prep Failed",
                        "message" => $mysqli->connect_error
                    );
                    echo json_encode($response); 
                    exit;
                }
                $stmt->bind_param('ss', $recipient_id, $event_id);
                $stmt->execute();
                $stmt->close();
        
                $response["status"] = "success";
            } else {
                $response["failure_response"]["message"] = "Cannot share with yourself";
            }
        }
    }

    echo json_encode($response); 
?>