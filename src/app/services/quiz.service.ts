import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  urlQuiz: string;

    constructor(private http: HttpClient) {

      this.urlQuiz = "https://back--civilizaciones.herokuapp.com/api/quiz/";

    }

    getQuiz(): Observable <any> {

      let headers = new HttpHeaders().set(
        'Type-Content','aplication/json'
      )
      return this.http.get(this.urlQuiz, {
        headers: headers
      });
    }

    getQuizId(id: number):Observable <any> {

      let headers = new HttpHeaders().set(
        'Type-Content','aplication/json'
      )
  
      let route = this.urlQuiz+id;
  
      return this.http.get(route, {
        headers: headers
      });
  
    }
}
