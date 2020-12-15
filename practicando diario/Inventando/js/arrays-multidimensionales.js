const categorias = ["Terror", "Accion", "Comedia"];
const peliculas = ["La verdad duele", "la vida es bella"];

const cine = [categorias, peliculas];
/*console.log(cine[0][1]);
console.log(cine[1][0]); */

/* var elemento = prompt("Introduce tu pelicula",0);
while(elemento != "ACABAR"){
    var elemento = prompt("Introduce tu pelicula",0);
        peliculas.push(elemento);
} */
peliculas.push("Batman","Superman","Chucky");


const indice = peliculas.indexOf("La verdad duele");
if(indice > -1){
    peliculas.splice(indice, 1);
}

//para convertir arays en string de texto
const peliculas_string = peliculas.join()
console.log(peliculas_string);





