import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barco } from 'src/app/models/barco.model';
import { Persona } from 'src/app/models/persona.model';
import { BarcoService } from 'src/app/services/barco.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css']
})
export class BarcoComponent implements OnInit{
  
  formNombre!:string;
  formMatricula!:string;
  formAtraque!:number;
  formCuota!:number;
  formPropietario!:Persona;

  index!:number;

  personas:Persona[] = [];

  ngOnInit(): void {
    this.index=this.route.snapshot.params['id'];
    let barco:Barco = this.barcoService.getBarco(this.index);
    this.formAtraque=barco.atraque;
    this.formCuota=barco.cuota;
    this.formMatricula=barco.matricula;
    this.formNombre=barco.nombre;
    this.formPropietario=barco.persona;

    this.personaService.getAllPersonasSinBarco().subscribe(
      misPersonas => {
        this.personas=Object.values(misPersonas);
        this.personaService.setPersonas(this.personas);
      }
    )
  }

  constructor(private route:ActivatedRoute, private barcoService:BarcoService, private personaService:PersonaService){

  }

  @Input() barcoDeLista!:Barco;
  @Input() indice!:number;

}
