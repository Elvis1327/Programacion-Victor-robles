import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  public tenis1

  constructor(private _service: InicioService){

   };

   ngOnInit(){
    this.tenis1 = this._service.getTenis1()
   }
}
