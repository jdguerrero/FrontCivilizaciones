import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  _urlApiCivilizaciones: string;

    constructor(private http: HttpClient) {

      this._urlApiCivilizaciones = "https://back--civilizaciones.herokuapp.com/api/ubicacion/";

    }

    getUbicaciones(): Observable <any> {

      let headers = new HttpHeaders().set(
        'Type-Content','aplication/json'
      )
      return this.http.get(this._urlApiCivilizaciones, {
        headers: headers
      });
    }

    getUbicacionById(id: number):Observable <any> {

      let headers = new HttpHeaders().set(
        'Type-Content','aplication/json'
      )
  
      let route = this._urlApiCivilizaciones+id;
  
      return this.http.get(route, {
        headers: headers
      });
  
    }
}