import { Component, OnInit } from '@angular/core';
import {CivilizacionesService } from '../../../services/civilizaciones.service';
import {RegistrosTemporalesService } from '../../../services/registrostemporales.service';
import { ActivatedRoute } from '@angular/router';
import { Civilizacion } from '../../../models/civilizacion.model';
import { Registro } from '../../../models/registro.model';

@Component({
  selector: 'app-civilizacion',
  templateUrl: './civilizacion.component.html',
  styleUrls: ['./civilizacion.component.css']
})
export class CivilizacionComponent implements OnInit {

  civilizacion: Civilizacion;

  registro: Registro;

  id : number;

  idRegistro: number;
  
  
  constructor(
    private ruta:ActivatedRoute,
    private civilizacionesService: CivilizacionesService,
    private registrosTemporalesService: RegistrosTemporalesService
    ) {
  
    this.civilizacion = new Civilizacion();

    this.registro = new Registro();
    this.ruta.params.subscribe(params=>{
      console.log(params['id'])

      this.id = params['id'];

        
   })
  }


  ngOnInit(): void {

    this.civilizacionesService.getCivilizacionById(this.id).subscribe(Response=>{

      this.civilizacion =  Response;

      this.idRegistro = Response.idRegistroTemporal;

      this.registrosTemporalesService.getRegistroTemporalById(this.idRegistro).subscribe(Response=>{

        this.registro.idRegistroTemporal = Response.idRegistroTemporal;
        this.registro.anioAparicion = Response.añoAparicion;
        this.registro.anioUltimoRegistro = Response.añoUltimoRegistro;
        this.registro.descripcion = Response.descripcion;

        console.log(this.registro);
      });

    });
  }

 
}
