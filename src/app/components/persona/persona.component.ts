import { Component, Input, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{
  
  ngOnInit(): void {
    
  }

  constructor(){

  }

  @Input() personaDeLista!:Persona;
  @Input() indice!:number;
}
