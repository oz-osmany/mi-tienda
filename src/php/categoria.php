<?php
include "database.php";
if (isset($_POST["cat"])){
    $depart=$_POST["depart"];
    $cat=$_POST["cat"];
    //die($depart1);
    $query="Select * from compras where categoria like '$cat%' and departamento like '$depart%' ";// and departamento like '$depart%'
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
            "departamento"=>$row["departamento"],
            "muestra"=>$row["muestra"],
            "subcategoria"=>$row["subcategoria"]
        );
    }
    $jsonString=json_encode($json);
    echo $jsonString;
}
?>
