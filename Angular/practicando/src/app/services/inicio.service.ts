import { Injectable } from '@angular/core';

@Injectable()

export class InicioService {
  public tenis1: any
  public tenis2: any

  constructor(){
    this.tenis1 =
      { marca: "Nike",
      precio: 3500,
      stock: true
    }

    this.tenis2 = {
      nombre: 'Jordan',
      precio: 5000,
      stock: false
    };
  };
  getTenis1(){
    return this.tenis1;
  }
  getTenis2(){
    return this.tenis2;
  }
};
