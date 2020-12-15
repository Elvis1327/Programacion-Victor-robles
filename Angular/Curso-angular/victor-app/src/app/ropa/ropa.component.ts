import { Component, OnInit } from '@angular/core'
import { Ropa } from '../models/ropa';
import { RopaService } from '../services/ropa.service';

@Component ({
  selector: 'ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css'],
  providers: [RopaService]
})

export class RopaComponent implements OnInit{
  public nombre: string;
  public apellido: string;
  public ropa: Array<Ropa>;
  public pantalones: string[];
  public color: string;
  public mimarca: any;


  constructor(
    private _ropaService: RopaService
  ){
    this.mimarca = "Fila";
    this.color = 'yellow';
    this.nombre = "Todos mis poloches";
    this.pantalones = new Array();

  };

  ngOnInit(){
   this.ropa = this._ropaService.getRopa();
   alert(this._ropaService.getTexto())

  }

  getPantalones(){
    this.ropa.forEach((ropa, index)=>{
      if(this.pantalones.indexOf(ropa.pantalones) < 0){
        this.pantalones.push(ropa.pantalones);
      }
    });
    console.log(this.pantalones)
  }

  getMarca(){
    alert(this.mimarca);
  }

  addMarca(){
    this.pantalones.push(this.mimarca);
  }

  deleteMarca(index){
    //delete this.pantalones[indice];
    this.pantalones.splice(index, 1)
  }

 mostrarPalabra(){
   alert(this.mimarca);
 };

 conseguirMarca(){
   this.ropa.push(this.mimarca)
 }


  }

