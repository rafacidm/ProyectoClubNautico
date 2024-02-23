import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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

  barco!:Barco;
  personas:Persona[] = [];

  error!:HttpErrorResponse;
  mensaje!:string;

  ngOnInit(): void {
    this.index=this.route.snapshot.params['id'];
    this.getInfoOriginal();

    this.personaService.getAllPersonasSinBarco().subscribe(
      misPersonas => {
        this.personas=Object.values(misPersonas);
        this.personaService.setPersonas(this.personas);
      }
    )
  }

  constructor(private route:ActivatedRoute, private barcoService:BarcoService, private personaService:PersonaService, private router:Router, private messageService:MessageService){

  }

  modificarBarco(){
    let barcoMod = new Barco(this.barco.id, this.formNombre, this.formMatricula, this.formAtraque, this.formCuota, this.formPropietario);
    this.barcoService.putBarco(barcoMod).subscribe(
      response => {
        console.log("Se ha modificado: "  + response),
        this.router.navigate(["/barcos"]);
      },
      e  => {
        this.error=e,
        this.mostrarMensajeError(e.error.mensaje)
      });
  }

  volver(){
    this.router.navigate(["/barcos"]);
  }

  descartar(){
    this.getInfoOriginal();
  }

  getInfoOriginal(){
    this.barco = this.barcoService.getBarco(this.index);
    this.formAtraque=this.barco.atraque;
    this.formCuota=this.barco.cuota;
    this.formMatricula=this.barco.matricula;
    this.formNombre=this.barco.nombre;
    this.formPropietario=this.barco.persona;
  }
  
  mostrarMensajeError(msj:String){
    this.mensaje = msj.split('[')[1].split('for key')[0];
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensaje, life:2000});
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
