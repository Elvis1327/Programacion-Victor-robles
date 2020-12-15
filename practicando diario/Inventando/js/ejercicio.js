window.addEventListener("load",()=>{




const numeros = new Array(6)

for(let i = 0; i < 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero"))
}

document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index)=>{
    document.write("<strong>"+numero+"</strong>")
});

});