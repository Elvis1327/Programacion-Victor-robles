import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Project } from '../models/project';
import { Global } from './global'

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  public url: string;
  constructor( private _http: HttpClient){
    this.url = Global.url;
  }

  testService(){
    return 'Probando el servicio de angular';
  }

  saveProject(project: Project){
    const autData = {
      name: project._name,
      description: project._description,
      category: project._category,
      year: project._year,
      langs: project._langs,
      imagen: project._image,
    }

    return this._http.post(`${this.url}save-project`, autData);
  }
}
