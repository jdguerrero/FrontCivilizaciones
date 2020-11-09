import { Component, OnInit } from '@angular/core';

import {CivilizacionesService } from '../../services/civilizaciones.service';

@Component({
  selector: 'app-civilizaciones',
  templateUrl: './civilizaciones.component.html',
  styleUrls: ['./civilizaciones.component.css']
})
export class CivilizacionesComponent implements OnInit {

  
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
