import { Component } from '@angular/core';
import{ Configuracion } from './models/configuracion'
import { Cambiar } from './models/cambiar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public descripcion: string;

 constructor(){
   this.title = Configuracion.descripcion;
   this.descripcion = Cambiar.nombre;
 }




}
