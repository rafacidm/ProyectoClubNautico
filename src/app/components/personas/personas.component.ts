import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{
  
  personas:Persona[]=[];

  formNombre!:string;
  formApellido!:string;
  formDni!:string;
  formTelefono!:string;
  formSocio!:boolean
  formPatron!:boolean
  
  constructor(private personaService:PersonaService,
    private messageService:MessageService,
    private usuarioService:UsuarioService){
    this.personas=this.personaService.personas;
  }
  
    ngOnInit(): void {
      this.getAllPersonas();
    }

    addPersona(){
      let miPersona = new Persona(0, this.formNombre, this.formApellido, this.formDni, this.formTelefono, this.formSocio, this.formPatron);
      this.personaService.addPersona(miPersona).subscribe(
        resp => {
          console.log("Se ha guardado la persona: "  + resp),
          this.getAllPersonas();
          this.formPersona.reset();
        },
        error => {
          console.log(Object.values(error).flatMap.toString()),
          this.messageService.add({ severity: 'error', summary: 'Error', detail: Object.values(error).toString(), life:2000});
        });
        }

    getAllPersonas(){
      this.personaService.getAllPersonas().subscribe(
        misPersonas => {
          this.personas=Object.values(misPersonas);
          this.personaService.setPersonas(this.personas);
        }
       ) 
    }

    deletePersona(persona:Persona){
      if(confirm("¿Desea eliminar a "+ persona.nombre + " " + persona.apellidos +" del registro?")){
        this.personaService.deletePersona(persona.id).subscribe(
          response => {
            console.log("Se ha eliminado: "  + response),
            this.getAllPersonas();
          });
      };
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

    logueado(){
      return this.usuarioService.estaLogueado();
    }
}
