import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CivilizacionesService {

  _urlApiCivilizaciones: string;

  constructor(private http: HttpClient) {

    this._urlApiCivilizaciones = "/api/civilizaciones/";

  }

  getCivilizaciones(): Observable <any> {

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )
    return this.http.get(this._urlApiCivilizaciones, {
      headers: headers
    });
  }



}
