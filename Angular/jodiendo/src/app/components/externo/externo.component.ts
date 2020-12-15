import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExternoService } from '../../services/externo.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})

export class ExternoComponent {
  public user: any;


  constructor(private _servicio: ExternoService){
    this._servicio.getJson('https://reqres.in/api/users/2').subscribe((response: any)=>{
    console.log(response);
    this.user = response.data;
    });
  }
}
