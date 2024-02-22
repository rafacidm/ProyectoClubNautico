import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import baseUrl from './helper';
import { Persona } from '../models/persona.model';
import { Barco } from '../models/barco.model';
import { Salida } from '../models/salida.model';

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
    return this.httpClient.post(`${baseUrl}/v0/personas`, persona, {headers});
  }

  borrarPersona(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    console.log(id);
    return this.httpClient.delete(`${baseUrl}/v0/personas/`+id, { headers });
  }

  modificarPersona(persona:Persona){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.put(`${baseUrl}/v0/personas/`+persona.id, persona, { headers })
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
    return this.httpClient.post(`${baseUrl}/v0/barcos`, barco, {headers})
  }

  borrarBarco(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.delete(`${baseUrl}/v0/barcos/`+id, { headers })
  }

  modificarBarco(barco: Barco){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.put(`${baseUrl}/v0/barcos/`+barco.id, barco, { headers });
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
    return this.httpClient.post(`${baseUrl}/v0/salidas`, salida, {headers})
  }

  borrarSalida(id:number){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.delete(`${baseUrl}/v0/salidas/`+id, { headers })
  }

  modificarSalida(salida:Salida){
    const token = this.usuarioService.getToken();
    const headers = { 'Authorization': 'Bearer '+ token }
    return this.httpClient.put(`${baseUrl}/v0/salidas/`+salida.id, salida, { headers }).subscribe(
      response => console.log("Se ha modificado: "  + response));
  }
}
