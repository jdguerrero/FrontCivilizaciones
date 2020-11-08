import { Component, OnInit } from '@angular/core';
import {CivilizacionesService } from '../../../services/civilizaciones.service';
import { ActivatedRoute } from '@angular/router';
import { Civilizacion } from '../../../models/civilizacion.model';

@Component({
  selector: 'app-civilizacion',
  templateUrl: './civilizacion.component.html',
  styleUrls: ['./civilizacion.component.css']
})
export class CivilizacionComponent implements OnInit {

  civilizacion: Civilizacion;
  id : number;
  
  
  constructor(
    private ruta:ActivatedRoute,

    private civilizacionesService: CivilizacionesService
  ) {
  
    this.civilizacion = new Civilizacion();
    this.ruta.params.subscribe(params=>{
      console.log(params['id'])

      this.id = params['id'];

        
   })
  }


  ngOnInit(): void {

    this.civilizacionesService.getCivilizacionById(this.id).subscribe(Response=>{

      this.civilizacion =  Response;
    });
  }

 
}
