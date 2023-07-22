<?php

include 'cors.php';
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$email= $data["email"];
$phone = $data["phone"];
$company = $data["company"];
$message = $data["message"];

$sql = "INSERT INTO `messages`(`name`, `email`, `phone`, `company`, `message`)
 VALUES ('$name','$email','$phone','$company','$message')";
$conn->query($sql);

echo "";
?>