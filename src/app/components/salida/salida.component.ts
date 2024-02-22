import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Barco } from 'src/app/models/barco.model';
import { Persona } from 'src/app/models/persona.model';
import { Salida } from 'src/app/models/salida.model';
import { BarcoService } from 'src/app/services/barco.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SalidaService } from 'src/app/services/salida.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit{
  
  formBarco!:Barco;
  formPatron!:Persona;
  formDestino!:string;
  formFecha!:Date;
  formHora!:Time;

  index!:number;

  salida!:Salida;
  personas:Persona[]=[];
  barcos:Barco[]=[];
  
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.getInfoOriginal();

    this.personaService.getAllPatrones().subscribe(
      misPersonas => {
        this.personas=Object.values(misPersonas);
        this.personaService.setPersonas(this.personas);
      }
    )

    this.barcoService.getAllBarcos().subscribe(
      misBarcos => {
        this.barcos=Object.values(misBarcos);
        this.barcoService.setBarcos(this.barcos);
      }
    )
  }

  constructor(private salidaService:SalidaService, private route:ActivatedRoute, private router:Router, private personaService:PersonaService, private barcoService:BarcoService){

  }

  volver(){
    this.router.navigate(["/salidas"]);
  }
  descartar(){
    this.getInfoOriginal();
  }

  getInfoOriginal(){
    this.salida = this.salidaService.getSalida(this.index);
    this.formBarco = this.salida.barco;
    this.formDestino = this.salida.destino;
    this.formFecha = this.salida.fecha;
    this.formHora = this.salida.hora;
    this.formPatron = this.salida.patron;
  }

  formSalida = new FormGroup({
    'barco' : new FormControl('', Validators.required),
    'patron' : new FormControl('', Validators.required),
    'destino' : new FormControl('', Validators.required),
    'fecha' : new FormControl('', [Validators.required, Validators.pattern('[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])')]),
    'hora' : new FormControl('', [Validators.required, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$')])
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

  modificarSalida(){
    let salidaMod = new Salida(this.salida.id, this.formFecha, this.formHora, this.formDestino, this.formPatron, this.formBarco);
    this.salidaService.putSalida(salidaMod);
  }
}
