import { Injectable } from '@angular/core';

@Injectable()

export class FormularioService {
  public usuario: any;
  constructor(){
    this.usuario = [
      {
        nombre: "",
        apellido: "",
        email: ""
      }
    ];
  };
  getUsuario(){
    console.log('funcionando')
    return this.usuario;
  }
}
