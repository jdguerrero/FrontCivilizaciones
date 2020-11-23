import { Component, OnInit } from '@angular/core';



import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {

  bancosPreguntas: Array<any>;

  constructor(private bancoService: BancoService) {
    this.bancosPreguntas = new Array<any>();
  }

  ngOnInit(): void {
    this.bancoService.getBanco().subscribe(response => {
      let list = response;
      this.bancosPreguntas = list['data'];
      console.log(this.bancosPreguntas);
    });
  }

}
