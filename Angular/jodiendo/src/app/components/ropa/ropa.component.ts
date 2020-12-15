import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../services/ropa.service';

@Component ({
  selector: 'ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})

export class RopaComponent implements OnInit {
  public marcas: any;

  constructor(private _service: RopaService){

  };

  ngOnInit(){
    this.marcas = this._service.getMarcas();
  }
}
