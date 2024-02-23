import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
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

  constructor (private usuarioService : UsuarioService, private router:Router, private cookies:CookieService, private messageService:MessageService){

  }
  ngOnInit(): void {

  }

  iniciarSesion(){
    this.usuarioService.loginUsuario(this.usuario).subscribe(
      (data:any) => {
        console.log(data);
        this.cookies.set("token", data.token);
        this.cookies.set("username", this.usuario.username);
        this.router.navigate([''])
      }, (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Usuario o contraseña incorrectos', life:2000});
      }
    )
  }

  formLogin = new FormGroup({
    'username' : new FormControl('', Validators.required),
    'password' : new FormControl('', Validators.required)
  })

  get username(){
    return this.formLogin.get('username') as FormControl;
  }
  get password(){
    return this.formLogin.get('password') as FormControl;
  }
}
