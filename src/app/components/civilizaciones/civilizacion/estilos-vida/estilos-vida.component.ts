import { Component, OnInit } from '@angular/core';
import { EstiloVidaService } from '../../../../services/estilo-vida.service';
import { ActivatedRoute } from '@angular/router';
import { EstiloVida } from '../../../../models/estiloVida.model';

@Component({
  selector: 'app-estilos-vida',
  templateUrl: './estilos-vida.component.html',
  styleUrls: ['./estilos-vida.component.css']
})
export class EstilosVidaComponent implements OnInit {

  estiloVida : EstiloVida;

  id: number;

  constructor(private ruta:ActivatedRoute, private estiloVidaService: EstiloVidaService){
    this.estiloVida = new EstiloVida();


    this.ruta.params.subscribe(params=>{

      console.log(params['id'])

      this.id = params['id'];
 
   });
   
  }

  ngOnInit(): void {

    this.estiloVidaService.getgetEstiloVidaById(this.id).subscribe(Response=>{

      this.estiloVida =  Response;
    });

  }

}
