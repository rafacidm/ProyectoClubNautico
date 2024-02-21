import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import baseUrl from './helper';
import { UsuarioService } from './usuario.service';
import { Persona } from '../models/persona.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas!:Persona[];
  
  constructor(private dataService:DataService) { }
  
    getAllPersonas(){
      return this.dataService.cargarPersonas();
    }

    getAllPersonasSinBarco(){
      return this.dataService.getPersonasSinBarco();
    }

    getAllPatrones(){
      return this.dataService.getPatrones();
    }

    setPersonas(misPersonas:Persona[]){
      this.personas = misPersonas;
    }

    getPersona(index:number){
      let persona:Persona = this.personas[index];
      return persona;
    }

    addPersona(persona:Persona){
      this.dataService.crearPersona(persona);
    }
    
    deletePersona(id:number){
      return this.dataService.borrarPersona(id);
    }

    putPersona(persona:Persona){
      return this.dataService.modificarPersona(persona);
    }
}
