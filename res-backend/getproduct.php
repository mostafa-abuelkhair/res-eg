<?php

include 'cors.php';
include 'db.php';

$id = $_GET['id'];

$sql = "SELECT * FROM products
        INNER JOIN categories ON products.category_id =categories.category_id
        WHERE id='$id'
      ";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
    $product = $result->fetch_assoc();

    $sql = 
        "SELECT title,name,value FROM products_specifications
        INNER JOIN specifications_titles ON products_specifications.title_id =specifications_titles.id
        INNER JOIN specifications_names ON products_specifications.name_id =specifications_names.id
        WHERE product_id='$id';
        ";

    $result2 = $conn->query($sql);

    $specs = array();

    while($row = $result2->fetch_assoc()) {
      $specs[] = $row;
    }

    $product['specs']=$specs;
    echo json_encode($product);

} else {
  echo "";
}



?>