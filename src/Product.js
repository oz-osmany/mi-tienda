import $ from "jquery"
$(document).ready(function (){
    let depart;
    let cat;
   // muestraTodo();
    //$("#search").keyup(function (e){
       // let search=$("#search").val();
   //function muestraTodo(){
    $("#cuerpo").hide();
       $.ajax({
           url: "https://tienda.test/Tienda/mi-tienda/src/php/tareas.php",
           type: "POST",
           success: function (resp){
               let tasks=JSON.parse(resp);
               let template=" ";
               tasks.forEach(task=>{
                   template +=`<div class="column__3">
                                <img src="./src/images/${task.imagen}">
                                <div class="tittle__img-footer-ver"><h3><a href="#" aId="${task.departamento}" id="aa" ">${task.departamento}</a></h3></div>
                                </div>`

               });
               $("#t1").text("Tienda por categorias");
               $("#cuerpo").html(template);
               $("#cuerpo").show();

           }
       });

   //}
    $(".submenu").on("click",function (){//Para los departamentos que estan a la izquierda
        $("#cuerpo").hide();
        let gg=$(this)[0];
        depart=$(gg).attr("aId");
        Depart();
    })
        $(document).on("click","#aa",function (){//Para los departamentos que estan en el cuerpo
          $("#cuerpo").hide();
          let gg=$(this)[0];
          depart=$(gg).attr("aId");
          Depart();
        })

            function Depart(){
        //console.log(depart);
               $.ajax({
                    url: "https://tienda.test/Tienda/mi-tienda/src/php/tareas.php",
                    type: "POST",
                    data: {depart},
                    success: function (resp){
                        //console.log(resp);
                        let tasks=JSON.parse(resp);
                        let template=" ";
                        tasks.forEach(task=>{
                            template +=` <div class="column__3">
                                    <img src="./src/images/${task.imagen}">
                                    <div class="tittle__img-footer-ver">
                                    <h3><a href="#" aId1="${task.categoria}" id="ee" ">${task.categoria}</a>
                                    </h3></div>

                                    </div>`

                        });
                        $("#cuerpo").html(template);
                        $("#cuerpo").show();

                    }
                });

            }

    $(document).on("click","#ee",function (){//Para las categorias que estan en el cuerpo
        $("#cuerpo").hide();
        let gg=$(this)[0];
        cat=$(gg).attr("aId1");
        Categ();
    })

       // console.log("Hola");
        function Categ(){
            $.ajax({
                url: "https://tienda.test/Tienda/mi-tienda/src/php/categoria.php",
                type: "POST",
                data: {cat,depart},
                success: function (resp){
                    //console.log(resp);
                    let tasks=JSON.parse(resp);
                    let template=" ";
                    tasks.forEach(task=>{
                        template +=` <div class="column__3">
                                    <img src="./src/images/${task.imagen}">
                                    <div class="tittle__img-footer-ver">
                                    <h3><a href="#" aId1="${task.categoria}" id="ee" ">${task.categoria}</a>
                                    </h3></div>

                                    </div>`

                    });
                    $("#cuerpo").html(template);
                    $("#cuerpo").show();

                }
            });

        }


    $('.categoria').click (function (){
        $("#cuerpo").hide();
        let padre=$(this)[0].parentElement.parentElement.parentElement;
        depart=padre.getAttribute("id");
        cat=$(this).attr("id");//let id1=$(this)[0].parentElement;
        Categ();
    })

})