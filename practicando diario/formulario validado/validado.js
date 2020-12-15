window.addEventListener('load',function(){
    console.log("esta funcionando");

    var formulario = document.querySelector("#formulario");
    var miCaja = document.querySelector(".dashed");

    miCaja.style.display = "none";

    formulario.addEventListener('submit', function(){

        var nombre = document.querySelector("#name").value;
        var apellido = document.querySelector("#lastname").value;
        var edad = document.querySelector("#age").value;

        if(nombre.trim() == null|| nombre.trim().length == 0){
            alert("el nombre no es valido")
        }

        if(apellido.trim() == null|| apellido.trim().length == 0){
            alert("el nombre no es valido")
        }

        if(edad == null|| edad <= 0  || isNaN(edad)){
            alert("la edad no es valida")
        }
        

        miCaja.style.display = "block"

        var p_nombre = document.querySelector("#p_name span");
        var p_apellido = document.querySelector("#p_lastname span");
        var p_edad = document.querySelector("#p_age span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
    });

    
   

    




});