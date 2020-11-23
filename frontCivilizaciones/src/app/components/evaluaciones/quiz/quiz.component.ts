import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BancoService } from '../../../services/banco.service';
import { PreguntasService } from '../../../services/preguntas.service';
import { Banco } from '../../../models/banco.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  bancoPreguntas : Banco;

  id: number;

  preguntas: Array<any>;


  constructor(private ruta:ActivatedRoute, private bancoService: BancoService, private preguntasService: PreguntasService) {

    this.bancoPreguntas = new Banco();

    this.preguntas = new Array<any>();

    this.ruta.params.subscribe(params=>{

      console.log(params['id'])

      this.id = params['id'];
 
   });

  }

  ngOnInit(): void {

    this.preguntasService.getPreguntasByBanco(this.id).subscribe(Response=>{

      this.preguntas = Response;

      console.log(this.preguntas);

    this.bancoService.getBancoById(this.id).subscribe(Response=>{
      this.bancoPreguntas = Response;
    });

    });
    

  }

}
