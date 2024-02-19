import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public usuario = {
    username : '',
    password : '',
    nombre : '',
    apellidos : '',
    email : ''
  }

  constructor (private usuarioService : UsuarioService){

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
      (data) => {
        console.log(data);
        alert("Usuario registrado con éxito")
      }, (error) => {
        console.log(error);
        alert("Ha ocurrido un error en el registro")
      }
    )
  }
}
