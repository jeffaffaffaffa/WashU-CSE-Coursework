<?php
    header("Content-Type: application/json");

    // JSON that will contain output of connection
    $response = array(
        "status" => "failure",
        "userExists" => false
    );

    ini_set("session.cookie_httponly", 1);
    session_start();
    $userExists = isset($_SESSION['user_id']);

    if ($userExists) {
        $response["status"] = "success";
        $response["userExists"] = true;
        $response['token'] = $_SESSION['token'];
    } 

    echo json_encode($response); 
?>