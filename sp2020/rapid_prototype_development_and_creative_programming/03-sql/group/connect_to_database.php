<?php

// TODO: create enum type w/ unregistered, registered, register
function connectDatabase($connectionType='unregistered') {
    // These three users have different permissions with the database.
    $connectionPassword = 'everybodyuses';
    if ($connectionType == 'register') {
        $connectionPassword = 'makenewuser';
    } else if ($connectionType == 'registered') {
        $connectionPassword = 'registereduserfornow';
    }

    $mysqli = new mysqli('localhost', $connectionType, $connectionPassword, 'module3_group'); //think this is the same for both of us


    if($mysqli->connect_errno) {
        printf("Connection Failed: %s\n", $mysqli->connect_error);
        exit;
    }

    $stmt = $mysqli->prepare("SELECT CURRENT_USER();"); //TODO: change 25 to a variable
        if(!$stmt){
            printf("Query Prep Failed: %s\n", $mysqli->error);
            exit;
        }
        
        $stmt->execute();
        $stmt->bind_result($currentUser);
        $stmt->fetch();
        
        // echo "</br>connected to: ".htmlspecialchars($currentUser)."</br>";

    // echo "</br>connected to: " ;
    return $mysqli;
}

?>