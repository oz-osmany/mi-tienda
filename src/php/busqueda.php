<?php
include "database.php";

if(isset($_POST["depart"]))
{
    $depart=$_POST["depart"];

    $query="SELECT distinct nombre_producto FROM `compras` WHERE  `nombre_producto` like '%$depart%' group by nombre_producto";//|| like '$depart%'
    $result=mysqli_query($connection, $query);
    if(!$result){
        die("Query error".mysqli_error($connection));
    }
    $html="";
    //$json=array();
    $i=0;
    while ($row=mysqli_fetch_array($result)){
      /*  $json[]=array(
            "id"=>$row["id"],
            "name"=>$row["nombre_producto"],
            //"descripcion"=>$row["descripcion"],
            //"imagen"=>$row["imagen"],
            "categoria"=>$row["categoria"],
            "departamento"=>$row["departamento"]
            //"muestra"=>$row["muestra"],
            //"subcategoria"=>$row["subcategoria"]
        );*/
        $data=$row["nombre_producto"];
        $html.="<li id='item$i' class='$data'>".$row["nombre_producto"]."</li>";
        $i++;
    }
    //$jsonString=json_encode($json);
    echo $html;
}
else{ echo "Boberia";}

?>