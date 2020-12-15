import { Component } from '@angular/core';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  public contacto: Contacto

  constructor(){
    this.contacto = new Contacto ("","","","")
   };

   onSubmit(){
     console.log("Evento Submit Lanzado");
     console.log(this.contacto)
   }
};
