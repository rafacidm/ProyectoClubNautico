import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  username!:string;

  constructor(private usuarioService:UsuarioService){

  }

  ngOnInit(): void {
    if(this.logueado()){
      this.username = this.getUsername();
    }
  }

  logueado(){
    return this.usuarioService.estaLogueado();
  }

  getUsername(){
    return this.usuarioService.getUsername();
  }
  
}
