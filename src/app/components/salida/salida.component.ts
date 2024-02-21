import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barco } from 'src/app/models/barco.model';
import { Persona } from 'src/app/models/persona.model';
import { Salida } from 'src/app/models/salida.model';
import { BarcoService } from 'src/app/services/barco.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SalidaService } from 'src/app/services/salida.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit{
  
  formBarco!:Barco;
  formPatron!:Persona;
  formDestino!:string;
  formFecha!:Date;
  formHora!:Time;

  index!:number;

  personas:Persona[]=[];
  barcos:Barco[]=[];
  
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    let salida:Salida = this.salidaService.getSalida(this.index);

    this.formBarco = salida.barco;
    this.formDestino = salida.destino;
    this.formFecha = salida.fecha;
    this.formHora = salida.hora;
    this.formPatron = salida.patron;

    this.personaService.getAllPatrones().subscribe(
      misPersonas => {
        this.personas=Object.values(misPersonas);
        this.personaService.setPersonas(this.personas);
      }
    )

    this.barcoService.getAllBarcos().subscribe(
      misBarcos => {
        this.barcos=Object.values(misBarcos);
        this.barcoService.setBarcos(this.barcos);
      }
    )
  }

  constructor(private salidaService:SalidaService, private route:ActivatedRoute, private personaService:PersonaService, private barcoService:BarcoService){

  }

}
