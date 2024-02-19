import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  public addPersona(persona:any){
    return this.http.post(`${baseUrl}/v0/personas`, persona);
  }
}
