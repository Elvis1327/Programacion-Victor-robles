import { Injectable } from '@angular/core';

@Injectable()

export class BienvenidoService {
  public usuarios: any;

  constructor(){
    this.usuarios = [
    {
        nombre: "Elvis",
        apellidos: "Garcia Valdez",
        edad: 19
      }
    ]

  };

  getUsuarios(){
    console.log(this.usuarios);
    return this.usuarios;

  }
}
