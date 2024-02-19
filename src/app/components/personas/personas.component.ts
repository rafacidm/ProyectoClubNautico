import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{
  
  personas:Persona[]=[];
  
  constructor(private personaService:PersonaService){
    this.personas=this.personaService.personas;
  }
  
    ngOnInit(): void {
     this.personaService.getAllPersonas().subscribe(
      misPersonas => {
        console.log(misPersonas);
        this.personas=Object.values(misPersonas);
      }
     ) 
    }
}
