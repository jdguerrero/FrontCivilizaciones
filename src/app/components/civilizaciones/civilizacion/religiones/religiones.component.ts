import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReligionesService } from '../../../../services/religiones.service';
import { Religion } from '../../../../models/religion.model';

@Component({
  selector: 'app-religiones',
  templateUrl: './religiones.component.html',
  styleUrls: ['./religiones.component.css']
})
export class ReligionesComponent implements OnInit {

  religion : Religion;

  id: number;

  constructor(private ruta:ActivatedRoute, private religionesService: ReligionesService){
    this.religion = new Religion();


    this.ruta.params.subscribe(params=>{

      console.log(params['id'])

      this.id = params['id'];
 
   });
   
  }

  ngOnInit(): void {

    this.religionesService.getReligionById(this.id).subscribe(Response=>{

      this.religion =  Response;
    });

  }
}
