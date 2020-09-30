<?php
    include "database.php";

    $query="Select * from compras";
    $result=mysqli_query($connection, $query);
    if(!$result){
        die("Query error".mysqli_error($connection));
    }
    $json=array();
    while ($row=mysqli_fetch_array($result)){
        $json[]=array(
            "name"=>$row["nombre_producto"],
            "descripcion"=>$row["descripcion"],
            "imagen"=>$row["imagen"],
            "categoria"=>$row["categoria"],
            "departamento"=>$row["departamento"]
        );
    }
    $jsonString=json_encode($json);
    echo $jsonString;
?>
