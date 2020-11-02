<?php
    header("Content-Type: application/json");

    // JSON that will contain output of connection
    $response = array(
        "status" => "failure"
    );

    $mysqli = new mysqli('localhost', 'module5_user', 'ModifyTheCalendarBeSafe', 'module5_group'); //think this is the same for both of us

    if($mysqli->connect_errno) {
        // TODO: check that all of these would work!!!
        $response["failure_response"] = array(
            "type" => "Connection Failed",
            "message" => $mysqli->connect_error
        );
        echo json_encode($response); 
        exit;
    }

    $stmt = $mysqli->prepare("SELECT CURRENT_USER();");
    if(!$stmt){
        $response["failure_response"] = array(
            "type" => "Query Prep Failed",
            "message" => $mysqli->connect_error
        );
        echo json_encode($response); 
        exit;
    }
    
    $stmt->execute();
    $stmt->bind_result($currentUser);
    $stmt->fetch();
    $stmt->close();
?>