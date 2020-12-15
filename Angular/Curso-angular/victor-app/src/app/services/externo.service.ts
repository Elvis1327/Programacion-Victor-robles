import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})

export class HomeService {
  public lista: any;
  public hola: any;
  public url: string;
  constructor(private _http: HttpClient){
    this.hola = console.log("hola desde un servicio");
    this.url = 'https://reqres.in/'
    this.lista = [
      {
        nombre: 'Elvis',
        apellido: 'Garcia Valdez',
        trabajo: 'Desarrollo De Software'
      },
    ]
  }
  holaD(){
    return this.hola;
  };

  getJson(url: string, UserId){
    return this._http.get(url, UserId);
  };

  getLista(){
    return this.lista;
  };

  addUser(user){
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.post(this.url+'api/users', params, {headers: headers});
  }
};
