import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Barco } from 'src/app/models/barco.model';
import { Persona } from 'src/app/models/persona.model';
import { Salida } from 'src/app/models/salida.model';
import { BarcoService } from 'src/app/services/barco.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SalidaService } from 'src/app/services/salida.service';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit {

  salidas:Salida[]=[];
  personas:Persona[]=[];
  barcos:Barco[]=[];

  formBarco!:Barco;
  formPatron!:Persona;
  formDestino!:string;
  formFecha!:Date;
  formHora!:Time;

  constructor(private salidaService:SalidaService, private personaService:PersonaService, private barcoService:BarcoService){
    this.salidas=this.salidaService.salidas;
  }

  ngOnInit():void{
    this.salidaService.getAllSalidas().subscribe(
      misSalidas => {
        this.salidas=Object.values(misSalidas);
        this.salidaService.setSalidas(this.salidas);
      }
    )

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

  addSalida(){
    let miSalida=new Salida(0, this.formFecha, this.formHora, this.formDestino, this.formPatron, this.formBarco);
    this.salidaService.addSalida(miSalida);
    window.location.reload();
  }

  deleteSalida(id:number){
    if(confirm("¿Desea eliminar la salida del registro?")){
      this.salidaService.deleteSalida(id);
      window.location.reload();
    };
  }
}
