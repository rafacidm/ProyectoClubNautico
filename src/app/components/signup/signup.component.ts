import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioSignUp } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  usuario:UsuarioSignUp= {
    username : '',
    password : '',
    nombre : '',
    apellidos : '',
    email : ''
  }

  constructor (private usuarioService : UsuarioService, private router:Router, private cookies:CookieService){

  }
  ngOnInit(): void {

  }

  formSubmit(){
    console.log(this.usuario);
    if(this.usuario.username == '' || this.usuario.username == null){
      alert('Se requiere un nombre de usuario');
      return;
    }

    this.usuarioService.addUsuario(this.usuario).subscribe(
      (data:any) => {
        console.log(data);
        this.cookies.set("token", data.token);
        alert("Usuario registrado con éxito")
      }, (error) => {
        console.log(error);
        alert("Ha ocurrido un error en el registro")
      }
    )
  }
}
