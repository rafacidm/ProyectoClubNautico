import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private usuarioService:UsuarioService){

  }

  ngOnInit(): void {

  }

  title = 'ProyectoClubNautico';

  logout(){
    this.usuarioService.logout();
  }

  logueado(){
    return this.usuarioService.estaLogueado();
  }
}
