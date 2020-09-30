import $ from "jquery"
$(document).ready(function (){
    //$("#search").keyup(function (e){
       // let search=$("#search").val();
        $.ajax({
            url: "https://tienda.test/Tienda/mi-tienda/src/php/tareas.php",
            type: "GET",
            success: function (resp){
               let tasks=JSON.parse(resp);
                let template=" ";
                tasks.forEach(task=>{
                    template +=` <div class="column__3">
                                    <img src="./src/images/${task.imagen}">
                                    <div class="tittle__img-footer-ver"><h3>${task.departamento}</h3></div>
                                    </div>`

                });
                $("#cuerpo").html(template);

            }
        });
    //})

})