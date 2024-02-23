import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { UsuarioLogin, UsuarioSignUp } from 'src/app/models/usuario.model';
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

  login:UsuarioLogin={
    username : '',
    password :''
  }

  error!:HttpErrorResponse;
  mensaje!:string;
  
  constructor (private usuarioService : UsuarioService, private router:Router, private cookies:CookieService, private messageService:MessageService){

  }
  ngOnInit(): void {

  }

  formSubmit(){
    this.usuarioService.addUsuario(this.usuario).subscribe(
      (data:any) => {
        console.log(this.usuario);
        console.log(data);
        alert("Usuario registrado con éxito")
        this.login.username=this.usuario.username;
        this.login.password=this.usuario.password;
        console.log(this.login);
        this.iniciarSesion();
      }, (e) => {
        this.error=e,
        this.mostrarMensajeError(e.error.mensaje)
      }
    )
  }

  formSignUp = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    apellidos : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    username : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })

  get nombre(){
    return this.formSignUp.get('nombre') as FormControl;
  }
  get apellidos(){
    return this.formSignUp.get('apellidos') as FormControl;
  }
  get username(){
    return this.formSignUp.get('username') as FormControl;
  }
  get email(){
    return this.formSignUp.get('email') as FormControl;
  }
  get password(){
    return this.formSignUp.get('password') as FormControl;
  }

  iniciarSesion(){
    this.usuarioService.loginUsuario(this.login).subscribe(
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

  mostrarMensajeError(msj:String){
    this.mensaje = msj.split('[')[1].split('for key')[0];
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensaje, life:2000});
  }
}
