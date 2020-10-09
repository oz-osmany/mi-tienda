import $ from "jquery"
$(document).ready(function (){
    console.log("Hola");
    $("#control").keyup(function (e){//buscador del menu
        let depart=$("#control").val();
        var minimo=1;
        if(depart.length >minimo){
            $.ajax({
                url: "https://tienda.test/Tienda/mi-tienda/src/php/busqueda.php",
                type: "POST",
                data: {depart},
                success: function (resp){
                    $(".salida").html(resp);
                }
    })
}
    })
})