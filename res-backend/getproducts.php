<?php

include 'cors.php';
include 'db.php';
include 'filters.php';

$pagination_skip = (int) $_GET['skip'] ;

$filtersIndex=[];

if(isset($_GET['filters']) && $_GET['filters']!=='')
{
  $filtersIndex= explode(',',$_GET['filters']);
}


$filter_sql="
            WHERE 1
            ";
for ($i= 0; $i < count($filtersIndex); $i++) {
  $filterIndex = $filtersIndex[$i];
  $filter = $filters[$filterIndex];
  
  $filter_sql.= "AND
          id = ANY 
          (SELECT product_id FROM products_specifications
            INNER JOIN specifications_names ON products_specifications.name_id =specifications_names.id
            INNER JOIN products ON products.id =products_specifications.product_id
            $filter
          )
          ";
}

$result = $conn->query(
   "SELECT * FROM products
    $filter_sql
    ORDER BY short_description
    LIMIT $pagination_skip , 9;"
    );

$products = array();

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
}

$count=  $conn->query( "SELECT COUNT(*) AS 'count' FROM products" . $filter_sql )->fetch_assoc()['count'];

echo json_encode( array( "count"=>$count, "products"=> $products) );


?>