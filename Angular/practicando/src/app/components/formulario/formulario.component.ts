import { Component } from '@angular/core';
import { FormularioService } from '../../services/formulario.service';


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
    public usuario: any;

  constructor(private _service: FormularioService){
    this.usuario = this._service.getUsuario()
  };

  getFormulario(){
    console.log(this.usuario)
  }

};
