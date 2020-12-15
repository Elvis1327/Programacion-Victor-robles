import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/externo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public identificado: boolean;
  public hola: any;
  public user: any;
  public userId: any;
  public fecha: any;
  public lista: any;
  public new_user: any;
  public usuario_guardado;

  constructor(private _servicio: HomeService) {
    this.identificado = false;
    this.userId = 1;
    this.fecha = new Date(2019,5,20);
   this.new_user = {
          "name": "",
          "job": ""
   }
  }


  ngOnInit() {
    this.hola = this._servicio.holaD();
    this.cargaUsuario();
    this.lista = this._servicio.getLista();
  };

  setIdentificado(){
    this.identificado = false
  };
  unsetIdentificado(){
    this.identificado = true
  };

  cargaUsuario(){
    this._servicio.getJson('https://reqres.in/api/users/2', this.userId ).subscribe((res: any)=>{
      console.log(res);
      this.user = res.data;
    });
  };

  onSubmit(form){
 this._servicio.addUser(this.new_user).subscribe(
   response => {
    this.usuario_guardado = response;
    console.log(response)

    form.reset();
   },
   error => {
     console.log(<any>error);
   }
 )
  };
};
