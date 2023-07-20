<?php

include 'cors.php';
include 'db.php';

$pagination_skip = (int) $_GET['skip'];



$sql = "SELECT * FROM `products` 
        INNER JOIN categories ON products.category_id =categories.category_id
        LIMIT $pagination_skip , 9
        ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  $rows = array();

  while($row = $result->fetch_assoc()) {
    $rows[] = $row;
  }
  echo json_encode($rows);
} else {
  echo "";
}

?>