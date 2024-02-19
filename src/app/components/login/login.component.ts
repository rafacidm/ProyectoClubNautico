import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioLogin } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario:UsuarioLogin={
    username: '',
    password: ''
  };

  constructor (private usuarioService : UsuarioService, private router:Router, private cookies:CookieService){

  }
  ngOnInit(): void {

  }

  formLogIn(){
    console.log(this.usuario);
    if(this.usuario.username == '' || this.usuario.username == null){
      alert('Se requiere un nombre de usuario');
      return;
    }

    this.usuarioService.loginUsuario(this.usuario).subscribe(
      (data:any) => {
        console.log(data);
        this.cookies.set("token", data.token);
      }, (error) => {
        console.log(error);
        alert(error.toString());
      }
    )
  }
}
