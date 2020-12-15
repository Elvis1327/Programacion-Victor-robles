import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']

})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor(private router: Router){
    this.titulo = "Componente de video juegos"
    this.listado = "Listado de los juegos mas populares"
    console.log("Se ha cargado el componente video juego")
  }

  ngOnInit(){
    //console.log("OnInit Ejecutado")
  }

  ngDoCheck(){
    //console.log("Docheck ejecutado")
  }
  ngOnDestroy(){
    //console.log("OnDestroy Ejecutado")
  }

  setTitulo(){
    //this.titulo = "Nuevo titulo del componente";
  }

}


