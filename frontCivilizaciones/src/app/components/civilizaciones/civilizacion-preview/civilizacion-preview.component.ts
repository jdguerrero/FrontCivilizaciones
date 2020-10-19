import { Component, OnInit } from '@angular/core';

import {CivilizacionesService } from '../../../services/civilizaciones.service'



@Component({
  selector: 'app-civilizacion-preview',
  templateUrl: './civilizacion-preview.component.html',
  styleUrls: ['./civilizacion-preview.component.css']
})
export class CivilizacionPreviewComponent implements OnInit {

  listCivilizaciones: Array<any>;

  constructor(private civilizacionesService: CivilizacionesService) {
    
    this.listCivilizaciones = new Array<any>();

   }

  ngOnInit(): void {

    this.civilizacionesService.getCivilizaciones().subscribe(Response=>{

    const listJson = Response;

    this.listCivilizaciones = listJson["data"];

    console.log(this.listCivilizaciones);

    });
  }

}
