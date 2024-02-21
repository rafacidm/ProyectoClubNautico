import { Component, OnInit } from '@angular/core';
import { Barco } from 'src/app/models/barco.model';
import { Persona } from 'src/app/models/persona.model';
import { BarcoService } from 'src/app/services/barco.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BarcosComponent implements OnInit{
  
  barcos:Barco[]=[];
  personas:Persona[]=[];

  formNombre!:string;
  formMatricula!:string;
  formAtraque!:number;
  formCuota!:number;
  formPropietario!:Persona;

  constructor(private barcoService:BarcoService, private personaService:PersonaService){
    this.barcos = this.barcoService.barcos;
  }

  ngOnInit(): void {
    this.barcoService.getAllBarcos().subscribe(
      misBarcos => {
        this.barcos=Object.values(misBarcos);
        this.barcoService.setBarcos(this.barcos);
      }
    )

    this.personaService.getAllPersonasSinBarco().subscribe(
      misPersonas => {
        this.personas=Object.values(misPersonas);
        this.personaService.setPersonas(this.personas);
      }
    )
  }

  addBarco(){
    let miBarco = new Barco(0, this.formNombre, this.formMatricula, this.formAtraque, this.formCuota, this.formPropietario);
    this.barcoService.addBarco(miBarco);
    window.location.reload();
  }

  deleteBarco(barco:Barco){
    if(confirm("¿Desea eliminar la embarcación "+ barco.nombre + " del registro?")){
      this.barcoService.deleteBarco(barco.id);
      window.location.reload();
    };
  }


}
