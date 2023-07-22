<?php

include 'cors.php';
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$sbscriber = $data["subscriber"];

$sql = "INSERT INTO subscribers(subscriber) VALUES ('$sbscriber')";
$conn->query($sql);

echo "";
?>