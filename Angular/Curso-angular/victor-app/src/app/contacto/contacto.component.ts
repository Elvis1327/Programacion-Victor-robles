import { Component, OnInit} from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent{
  public usuario: ContactoUsuario;

  constructor(){
    this.usuario = new ContactoUsuario ("", "", "", "")
  };

  onSubmit(){
    console.log("Evento Submit Lanzado");
    console.log(this.usuario);
  }
}
