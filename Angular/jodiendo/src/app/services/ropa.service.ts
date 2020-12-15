import { Injectable } from '@angular/core';
import { Ropa } from '../models/ropa';

@Injectable()

export class RopaService {
  public marca: Array<Ropa>;

  constructor(){
    this.marca = [
      new Ropa ("Nike"),
      new Ropa ("Polo"),
      new Ropa ("Adidas"),
      new Ropa ("Jordan"),
      new Ropa ("LaCoste"),
      new Ropa ("Lacross"),
      new Ropa ("Nke OffWhite"),
      new Ropa ("Logitech"),
    ];
  };

  getMarcas(){
    return this.marca;
  }
}
