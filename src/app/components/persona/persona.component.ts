import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{
  
  formNombre!:string;
  formApellido!:string;
  formDni!:string;
  formTelefono!:string;
  formSocio!:boolean
  formPatron!:boolean

  persona!:Persona;
  index!:number;

  ngOnInit(): void {
    this.index=this.route.snapshot.params['id'];
    this.getInfoOriginal();
  }

  constructor(private personaService:PersonaService, private route:ActivatedRoute, private router:Router, private messageService:MessageService){

  }

  modificarPersona(){
    let personaMod = new Persona(this.persona.id, this.formNombre, this.formApellido, this.formDni, this.formTelefono, this.formSocio, this.formPatron);
    this.personaService.putPersona(personaMod).subscribe(
      response => {
        console.log("Se ha modificado: "  + response),
        this.router.navigate(["/personas"])
      },
      error => {
        this.messageService.add({severity:'error', summary:'ERROR', detail: 'hola'});
      }
      );
  }

  volver(){
    this.router.navigate(["/personas"]);
  }

  descartar(){
    this.getInfoOriginal();
  }

  getInfoOriginal(){
    this.persona = this.personaService.getPersona(this.index);
    this.formNombre=this.persona.nombre;
    this.formApellido=this.persona.apellidos;
    this.formDni=this.persona.dni;
    this.formTelefono=this.persona.telefono;
    this.formSocio=this.persona.esSocio;
    this.formPatron=this.persona.esPatron;
  }

  formPersona = new FormGroup({
    'nombre' : new FormControl('', Validators.required),
    'apellidos' : new FormControl('', Validators.required),
    'dni' : new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]{1}')]),
    'telefono' : new FormControl('', [Validators.required, Validators.pattern('(6|7)([0-9]){8}')]),
    'esSocio' : new FormControl('', Validators.required),
    'esPatron' : new FormControl('', Validators.required)
  });

  get nombre(){
    return this.formPersona.get('nombre') as FormControl;
  }
  get apellidos(){
    return this.formPersona.get('apellidos') as FormControl;
  }
  get dni(){
    return this.formPersona.get('dni') as FormControl;
  }
  get telefono(){
    return this.formPersona.get('telefono') as FormControl;
  }
  get esSocio(){
    return this.formPersona.get('esSocio') as FormControl;
  }
  get esPatron(){
    return this.formPersona.get('esPatron') as FormControl;
  }
}
