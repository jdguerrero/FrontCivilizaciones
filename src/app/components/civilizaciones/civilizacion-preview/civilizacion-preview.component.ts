import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Civilizacion } from '../../../models/civilizacion.model';


@Component({
  selector: 'app-civilizacion-preview',
  templateUrl: './civilizacion-preview.component.html',
  styleUrls: ['./civilizacion-preview.component.css']
})

export class CivilizacionPreviewComponent implements OnInit {

  @Input ()
  civilizacion: Civilizacion;


  constructor() {
    

   }

  ngOnInit():void{

    
  }

}

