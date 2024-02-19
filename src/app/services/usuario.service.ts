import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public addUsuario(usuario:any){
    return this.http.post(`${baseUrl}/v0/auth/register`, usuario);
  }
}
