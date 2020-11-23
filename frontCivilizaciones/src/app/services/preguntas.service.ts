import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  _urlApiPregunta: string;

    constructor(private http: HttpClient) {

      this._urlApiPregunta = "https://back--civilizaciones.herokuapp.com/api/preguntaquiz/";

    }

    getPreguntas(): Observable <any> {

      let headers = new HttpHeaders().set(
        'Type-Content','aplication/json'
      )
      return this.http.get(this._urlApiPregunta, {
        headers: headers
      });
    }

    getPreguntasId(id: number):Observable <any> {

      let headers = new HttpHeaders().set(
        'Type-Content','aplication/json'
      )
  
      let route = this._urlApiPregunta+id;
  
      return this.http.get(route, {
        headers: headers
      });
  
    }
}
