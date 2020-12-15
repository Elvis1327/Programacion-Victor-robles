window.addEventListener('load',function(){
    console.log("el load se esta ejecutando");

    //arrays avanzado para cojer uno
    var nombre = "Elvis Garcia"
    var nombres = ["Victor robles","elvis garcia","manolo garcia","keny albeto"]

    var lenguajes = ["JS","PHP","C#","HTML","JAVA"]
     
    var elemento = parseInt(prompt("que elementos deseas cojer",0))
    if(elemento >= nombres.length){
        alert("introduce un numero menor que "+nombres.length)
    }else{
        //cuando pongo el nombre[elemento] ese elementos significa los que estan en la var nombres
        alert("el usuario seleccionado es el usuario "+nombres[elemento])
    }
    //para hacer una lista desde el js
    document.write("<h1>lenguajes de programacion del 2020</h1>")

  /*  document.write("<ul>")
    for(var i = 0; i <= lenguajes.length; i++){
        document.write("<li>"+lenguajes[i]+"<li/>");
    } 
  
    document.write("</ul>");
    */
    
    document.write("<h1>estos son todos los lenguajes</h1>");
     
    //para hacerlo de otra manera

  

    /*document.write("<ul>")
    for(var hola in lenguajes){
        document.write("<li>"+lenguajes[hola]+"</li>")
    }
    document.write("</ul>");
    */

    lenguajes.forEach((elemento)=>{
        document.write("<li>"+elemento+"</li>");
    })

    
    });
    