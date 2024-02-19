import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import baseUrl from './helper';
import { UsuarioService } from './usuario.service';
import { Persona } from '../components/persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas!:Persona[];
  
  constructor(private http: HttpClient, private auth:UsuarioService) { }

  public addPersona(persona:any){
    return this.http.post(`${baseUrl}/v0/personas`, persona);
  }

  public getAllPersonas(){
    const token = this.auth.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.http.get(`${baseUrl}/v0/personas`, { headers });
  }
}
