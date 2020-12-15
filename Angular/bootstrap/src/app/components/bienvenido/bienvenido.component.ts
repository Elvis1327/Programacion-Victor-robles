import { Component } from '@angular/core';
import { BienvenidoService } from '../../services/bienvenido.service';

@Component({
  selector: 'bievenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})

export class BienvenidoComponent {
  public title: string;
  public usuarios: any;


  constructor(private _service: BienvenidoService){
    this.title = "Bienvenido a mi aplicacion web";
    this.usuarios = this._service.getUsuarios()
  }
}
