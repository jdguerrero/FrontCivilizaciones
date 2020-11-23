import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  _urlApiBanco: string;

    constructor(private http: HttpClient) {

      this._urlApiBanco = "https://back--civilizaciones.herokuapp.com/api/banco/";

    }

    getBanco(): Observable <any> {

      let headers = new HttpHeaders().set(
        'Type-Content','aplication/json'
      )
      return this.http.get(this._urlApiBanco, {
        headers: headers
      });
    }

    getBancoById(id: number):Observable <any> {

      let headers = new HttpHeaders().set(
        'Type-Content','aplication/json'
      )
  
      let route = this._urlApiBanco+id;
  
      return this.http.get(route, {
        headers: headers
      });
  
    }
}
