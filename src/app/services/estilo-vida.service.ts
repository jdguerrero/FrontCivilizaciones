import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstiloVidaService {

  _urlApiEstilosVida: string;

  constructor(private http: HttpClient) {

    this._urlApiEstilosVida = "https://back--civilizaciones.herokuapp.com/api/estilovida/";

  }


  getgetEstiloVidaById(id: number):Observable <any> {

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )
    

    let route = this._urlApiEstilosVida+id;

    return this.http.get(route, {
      headers: headers
    });
  }

}
