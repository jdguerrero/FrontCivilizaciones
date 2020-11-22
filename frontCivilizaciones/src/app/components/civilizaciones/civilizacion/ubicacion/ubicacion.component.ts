import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UbicacionesService } from '../../../../services/ubicaciones.service';
import { Ubicacion } from '../../../../models/ubicacion.model';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  ubicacion : Ubicacion;

  id: number;

  constructor(private ruta:ActivatedRoute, private ubicacionService: UbicacionesService){
    this.ubicacion = new Ubicacion();


    this.ruta.params.subscribe(params=>{

      console.log(params['id'])

      this.id = params['id'];
 
   });
   
  }

  ngOnInit(): void {

    this.ubicacionService.getUbicacionById(this.id).subscribe(Response=>{

      this.ubicacion =  Response;
    });

  }


}
