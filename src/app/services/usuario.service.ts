import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import baseUrl from './helper';
import { UsuarioLogin, UsuarioSignUp } from '../models/usuario.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private cookies:CookieService) { }

  public addUsuario(usuario:UsuarioSignUp){
    return this.http.post(`${baseUrl}/v0/auth/register`, usuario);
  }

  public loginUsuario(usuario:UsuarioLogin){
    return this.http.post(`${baseUrl}/v0/auth/login`, usuario)
  }

  getToken(){
    return this.cookies.get("token");
  }

  estaLogueado(){
    return this.cookies.get("token") != "" ? true : false;
  }

  public logout(){
    this.cookies.set("token", "");
    window.location.reload();
  }
}
