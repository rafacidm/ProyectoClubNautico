import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
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

  constructor(private barcoService:BarcoService, private personaService:PersonaService, private messageService:MessageService){
    this.barcos = this.barcoService.barcos;
  }

  ngOnInit(): void {
    this.getAllBarcos();
    this.getPersonasSinBarco();
  }

  getPersonasSinBarco(){
    this.personaService.getAllPersonasSinBarco().subscribe(
      misPersonas => {
        this.personas=Object.values(misPersonas);
        this.personaService.setPersonas(this.personas);
      }
    )
  }

  getAllBarcos(){
    this.barcoService.getAllBarcos().subscribe(
      misBarcos => {
        this.barcos=Object.values(misBarcos);
        this.barcoService.setBarcos(this.barcos);
      }
    )
  }

  addBarco(){
    console.log(this.formPropietario);
    let miBarco = new Barco(0, this.formNombre, this.formMatricula, this.formAtraque, this.formCuota, this.formPropietario);
    console.log(miBarco);
    this.barcoService.addBarco(miBarco).subscribe(
      response => {
        console.log("Se ha guardado: "  + response),
        this.getAllBarcos();
        this.getPersonasSinBarco();
        this.formBarco.reset();
      },
      error => {
        console.log("Error: " + error),
        this.messageService.add({severity:'error', summary:'ERROR', detail: 'hola'});
      }
    );
  }

  deleteBarco(barco:Barco){
    if(confirm("¿Desea eliminar la embarcación "+ barco.nombre + " del registro?")){
      this.barcoService.deleteBarco(barco.id).subscribe(
        response => {
          console.log("Se ha eliminado: "  + response),
          this.getAllBarcos(),
          this.getPersonasSinBarco()
        },
        error => console.log("Error: " + error)
      )
    };
  }

  formBarco = new FormGroup({
    'matricula' : new FormControl('', [Validators.required, Validators.pattern('[A-Z]{2}[0-9]{6}')]),
    'nombre' : new FormControl('', Validators.required),
    'atraque' : new FormControl('', Validators.required),
    'cuota' : new FormControl('', Validators.required),
    'propietario' : new FormControl('', Validators.required)
  })

  get matricula(){
    return this.formBarco.get('matricula') as FormControl;
  }
  get nombre(){
    return this.formBarco.get('nombre') as FormControl;
  }
  get atraque(){
    return this.formBarco.get('atraque') as FormControl;
  }
  get cuota(){
    return this.formBarco.get('cuota') as FormControl;
  }
  get propietario(){
    return this.formBarco.get('propietario') as FormControl;
  }
}
