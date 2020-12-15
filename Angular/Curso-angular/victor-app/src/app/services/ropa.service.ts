import { Injectable } from '@angular/core';
import { Ropa } from '../models/ropa'

@Injectable()

export class RopaService {
  public ropa: Array<Ropa>
  constructor(){
    this.ropa = [
      new Ropa("Nike, Adidas, Jordan", "Adidas", "Nike", "Vermudas de cuadros", true, 100),
      new Ropa("Nike, Adidas, Jordan", "Hounder Aymond", "Nike", "Joggers", false, 200),
      new Ropa("Nike, Adidas, Jordan", "Rebook", "Nike", "Vermudas Jeans", true, 50),
      new Ropa("Nike, Jordan", "Rebook", "Nike", "Jeans", true, 50)
    ];
  };

  getTexto(){
    return "Hola mundo desde un servicio";
  }

  getRopa(): Array<Ropa>{
    return this.ropa;
  }
}
