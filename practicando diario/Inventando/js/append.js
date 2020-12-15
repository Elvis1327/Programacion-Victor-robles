window.addEventListener('load',function(){
    console.log("ejecutandose")
    
    var ul = document.querySelector("#hola");

    var lista = ["hola","como estas","todo bien?"];
    var li = document.createElement("li")
    for(var index in lista){
        li.append(lista[index]);
        ul.append(li)
    }


        
     var h1 = document.querySelector("#mih1");
     var h4 = document.createElement("h4");
     h4.append("bienvenido a mi pagina web ingresa abajo");
     h1.append(h4)
        
})
