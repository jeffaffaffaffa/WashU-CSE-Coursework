<?php
// This file is required on all files on the website provides access to the database
$mysqli = new mysqli('localhost', 'module5_user', 'ModifyTheCalendarBeSafe', 'module5_group');

if($mysqli->connect_errno) {
	printf("Connection Failed: %s\n", $mysqli->connect_error);
	exit;
}
?>