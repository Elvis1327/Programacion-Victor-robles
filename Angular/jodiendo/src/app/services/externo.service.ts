import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ()

export class ExternoService {

  constructor(private _http: HttpClient){

  };
  getJson(url: string){
    return this._http.get(url)
  };
};
