import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import baseUrl from './helper';
import { Persona } from '../models/persona.model';
import { Barco } from '../models/barco.model';
import { Salida } from '../models/salida.model';
import { PersonaService } from './persona.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient, private usuarioService:UsuarioService) {
    
  }

  cargarPersonas(){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token };
    return this.httpClient.get(`${baseUrl}/v0/personas`, { headers });
  }

  encontrarPersona(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token };
    return this.httpClient.get(`${baseUrl}/v0/personas/`+id, { headers });
  }

  crearPersona(persona:Persona){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.post(`${baseUrl}/v0/personas`, persona, {headers}).subscribe(
      response => console.log("Se ha guardado la persona: "  + response)
    );
  }

  borrarPersona(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.delete(`${baseUrl}/v0/personas/`+id, { headers }).subscribe(
      response => console.log("Se ha eliminado: "  + response));
  }

  modificarPersona(persona:Persona){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.put(`${baseUrl}/v0/personas/`+persona.id, persona, { headers }).subscribe(
      response => console.log("Se ha modificado: "  + response));
  }

  getPersonasSinBarco(){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token };
    return this.httpClient.get(`${baseUrl}/v0/personas/sinBarco`, { headers });
  }

  getPatrones(){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token };
    return this.httpClient.get(`${baseUrl}/v0/personas/patrones`, { headers });
  }


  cargarBarcos(){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token };
    return this.httpClient.get(`${baseUrl}/v0/barcos`, { headers });
  }

  encontrarBarco(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token };
    return this.httpClient.get(`${baseUrl}/v0/barcos/`+id, { headers });
  }

  crearBarco(barco:Barco){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.post(`${baseUrl}/v0/barcos`, barco, {headers}).subscribe(
      response => console.log("Se ha guardado: "  + response),
      error => console.log("Error: " + error)
    );
  }

  borrarBarco(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.delete(`${baseUrl}/v0/barcos/`+id, { headers }).subscribe(
      response => console.log("Se ha eliminado: "  + response),
      error => console.log("Error: " + error)
    );
  }


  cargarSalidas(){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token };
    return this.httpClient.get(`${baseUrl}/v0/salidas`, { headers });
  }

  encontrarSalida(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token };
    return this.httpClient.get(`${baseUrl}/v0/salidas/`+id, { headers });
  }

  crearSalida(salida:Salida){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.post(`${baseUrl}/v0/salidas`, salida, {headers}).subscribe(
      response => console.log("Se ha guardado: "  + response),
      error => console.log("Error: " + error)
    );
  }

  borrarSalida(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.delete(`${baseUrl}/v0/salidas/`+id, { headers }).subscribe(
      response => console.log("Se ha eliminado: "  + response),
      error => console.log("Error: " + error)
    );
  }
}
