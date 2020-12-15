import { Component } from '@angular/core';
import { Inicio } from '../../models//inicio';

@Component({
  selector:  'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class  InicioComponent  {
  public title: string;
  public formulario: Inicio

  constructor(){
    this.formulario = new Inicio ("", "",  "", "");
    this.title = 'Bienvenido a mi pagina web';
  };

  getSubmit(){
    console.log(this.formulario);
  }
};
