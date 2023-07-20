<?php

include 'cors.php';
include 'db.php';

$pagination_skip = (int) $_GET['skip'] ;

$filters = [];
$values = [];

if(isset($_GET['filters']))
{
  $filters= explode(',',$_GET['filters']);
}

if(isset($_GET['values']))
{
  $values= explode(',',$_GET['values']);
}


$sql = "SELECT products.* FROM products
        WHERE 1
       ";
for ($i= 0; $i < count($filters); $i++) {
  $filter = $filters[$i];
  $value = $values[$i];
  
  $sql.= "AND
          id = ANY 
          (SELECT product_id FROM products_specifications
            INNER JOIN specifications_names ON products_specifications.name_id =specifications_names.id
            WHERE name = '$filter' AND value = '$value'
          )
          ";
}
       
$sql.="LIMIT $pagination_skip , 9;";

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