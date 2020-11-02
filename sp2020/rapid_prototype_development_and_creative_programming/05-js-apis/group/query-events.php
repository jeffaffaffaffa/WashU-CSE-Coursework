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
    
    // Get events for user if user is signed in
    // TODO: get only event for days shown
    // TODO: add event listener to update
    if ($userExists) {
        $stmt = $mysqli->prepare("SELECT id, title, content, event_datetime FROM events WHERE user_id=? ORDER BY event_datetime ASC");
        if(!$stmt) {
            // printf("Query Prep Failed: %s\n", $mysqli->error);
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
        $stmt->bind_param('s', $user_id);
        $stmt->execute();
        $stmt->bind_result($event_id, $title, $content, $event_datetime);
        
        $event_id = htmlentities($event_id);
        $title = htmlentities($title);
        $content = htmlentities($content);
        $event_datetime = htmlentities($event_datetime);
        $counter = 0;
        while ($stmt->fetch()) {
            $response["data"][$counter] = array( //FIXME: is this okay??
                "event_id" => $event_id,
                "title" => $title,
                "content" => $content,
                "event_datetime" => $event_datetime,
                "own_event" => TRUE
            );
            $counter++;
        }
        $stmt->close();

        // Retrieve shared events
        $stmt = $mysqli->prepare("SELECT event_id, title, content, event_datetime FROM sharedEvents JOIN events ON (sharedEvents.event_id = events.id) WHERE recipient_id=? ORDER BY event_datetime ASC");
        if(!$stmt) {
            $response["failure_response"] = array(
                "type" => "Query Prep Failed",
                "message" => $mysqli->connect_error
            );
            echo json_encode($response); 
            exit;
        }
        $stmt->bind_param('s', $user_id);
        $stmt->execute();
        $stmt->bind_result($event_id, $title, $content, $event_datetime);
        
        $event_id = htmlentities($event_id);
        $title = htmlentities($title);
        $content = htmlentities($content);
        $event_datetime = htmlentities($event_datetime);
        while ($stmt->fetch()) {
            $response["data"][$counter] = array( //FIXME: is this okay??
                "event_id" => $event_id,
                "title" => $title,
                "content" => $content,
                "event_datetime" => $event_datetime,
                "own_event" => FALSE
            );
            $counter++;
        }
        $stmt->close();
        $response["status"] = "success"; // The database has been successfully connected to and events queried
    }
    $response["username"] = $username;
    $response["user_id"] = $user_id;

    echo json_encode($response); 
?>