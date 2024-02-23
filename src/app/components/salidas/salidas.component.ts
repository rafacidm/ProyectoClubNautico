import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Barco } from 'src/app/models/barco.model';
import { Persona } from 'src/app/models/persona.model';
import { Salida } from 'src/app/models/salida.model';
import { BarcoService } from 'src/app/services/barco.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SalidaService } from 'src/app/services/salida.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit {

  salidas:Salida[]=[];
  personas:Persona[]=[];
  barcos:Barco[]=[];

  formBarco!:Barco;
  formPatron!:Persona;
  formDestino!:string;
  formFecha!:Date;
  formHora!:Time;

  constructor(private salidaService:SalidaService, private personaService:PersonaService, private barcoService:BarcoService, private usuarioService:UsuarioService){
    this.salidas=this.salidaService.salidas;
  }

  ngOnInit():void{
    this.getSalidas();
    this.getPatrones();
    this.getBarcos();
  }

  getSalidas(){
    this.salidaService.getAllSalidas().subscribe(
      misSalidas => {
        this.salidas=Object.values(misSalidas);
        this.salidaService.setSalidas(this.salidas);
      }
    )
  }

  getPatrones(){
    this.personaService.getAllPatrones().subscribe(
      misPersonas => {
        this.personas=Object.values(misPersonas);
        this.personaService.setPersonas(this.personas);
      }
    )
  }

  getBarcos(){
    this.barcoService.getAllBarcos().subscribe(
      misBarcos => {
        this.barcos=Object.values(misBarcos);
        this.barcoService.setBarcos(this.barcos);
      }
      )
    }

    addSalida(){
      let miSalida=new Salida(0, this.formFecha, this.formHora, this.formDestino, this.formPatron, this.formBarco);
      this.salidaService.addSalida(miSalida).subscribe(
      response => {
        console.log("Se ha guardado: "  + response),
        this.getBarcos();
        this.getPatrones();
        this.getSalidas();
        this.formSalida.reset();
      },
      error => console.log("Error: " + error)
    );;
    }
  
    deleteSalida(id:number){
      if(confirm("¿Desea eliminar la salida del registro?")){
        this.salidaService.deleteSalida(id).subscribe(
          response => {
            console.log("Se ha eliminado: "  + response),
            this.getBarcos(),
            this.getPatrones(),
            this.getSalidas()
          },
          error => console.log("Error: " + error)
        );
      };
    }
    
  formSalida = new FormGroup({
    'barco' : new FormControl('', Validators.required),
    'patron' : new FormControl('', Validators.required),
    'destino' : new FormControl('', Validators.required),
    'fecha' : new FormControl('', [Validators.required, Validators.pattern('[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])')]),
    'hora' : new FormControl('', [Validators.required, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')])
  })

  get barco(){
    return this.formSalida.get('barco') as FormControl;
  }
  get patron(){
    return this.formSalida.get('patron') as FormControl;
  }
  get destino(){
    return this.formSalida.get('destino') as FormControl;
  }
  get fecha(){
    return this.formSalida.get('fecha') as FormControl;
  }
  get hora(){
    return this.formSalida.get('hora') as FormControl;
  }

  logueado(){
    return this.usuarioService.estaLogueado();
  }
}
