import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtesService } from '../../../../services/artes.service';
import { TiposArteService } from '../../../../services/tipoarte.service';
import { PiezasArteService } from '../../../../services/piezasarte.service';
import { Arte } from '../../../../models/arte.model';
import { PiezaArte } from '../../../../models/piezaArte.model';
import { TipoArte } from '../../../../models/tipoArte.model';



@Component({
  selector: 'app-arte',
  templateUrl: './arte.component.html',
  styleUrls: ['./arte.component.css']
})
export class ArteComponent implements OnInit {

  arte : Arte;

  piezaArte: PiezaArte;

  tipoArte: TipoArte;

  id: number;

  idTipoArte: number;

  idPiezaArte: number;

  constructor(private ruta:ActivatedRoute, private arteService: ArtesService, private tiposArteService: TiposArteService, private piezasArteService: PiezasArteService){

    this.arte = new Arte();

    this.ruta.params.subscribe(params=>{

      console.log(params['id'])

      this.id = params['id'];
 
   });
   
  }

  ngOnInit(): void {

    this.arteService.getArteById(this.id).subscribe(Response=>{

      this.arte =  Response;

      this.idPiezaArte = this.arte.idPiezaArte;

     this.idTipoArte = this.arte.idTipoArte;

      this.tiposArteService.getTipoArteById(this.idTipoArte).subscribe(Response=>{

        this.tipoArte =  Response;
      });

      this.piezasArteService.getPiezaArteById(this.idPiezaArte).subscribe(Response=>{

        this.piezaArte =  Response;
      });

    });

    

  }
}
