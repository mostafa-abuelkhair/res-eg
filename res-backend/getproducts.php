<?php

include 'cors.php';
include 'db.php';

$pagination_skip = (int) $_GET['skip'] ;

$filters = [];
$values = [];

if(isset($_GET['filters']) && $_GET['filters']!=='')
{
  $filters= explode(',',$_GET['filters']);
}

if(isset($_GET['values']) && $_GET['values']!=='')
{
  $values= explode(',',$_GET['values']);
}

$filter_sql="
            WHERE 1
            ";
for ($i= 0; $i < count($filters); $i++) {
  $filter = $filters[$i];
  $value = $values[$i];
  
  $filter_sql.= "AND
          id = ANY 
          (SELECT product_id FROM products_specifications
            INNER JOIN specifications_names ON products_specifications.name_id =specifications_names.id
            WHERE name = '$filter' AND value = '$value'
          )
          ";
}

$result = $conn->query( "SELECT * FROM products" . $filter_sql . "LIMIT $pagination_skip , 9;" );

$products = array();

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
}

$count=  $conn->query( "SELECT COUNT(*) AS 'count' FROM products" . $filter_sql )->fetch_assoc()['count'];

echo json_encode( array( "count"=>$count, "products"=> $products) );


?>