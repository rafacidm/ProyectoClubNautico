import { Persona } from "./persona.model";

export class Barco{
    id!:number;
    nombre!:string;
    matricula!:string;
    atraque!:number;
    cuota!:number;
    persona!:Persona;

    constructor(id:number, nombre:string, matricula:string, atraque:number, cuota:number, persona:Persona){
        this.id=id;
        this.nombre=nombre;
        this.matricula=matricula;
        this.atraque=atraque;
        this.cuota=cuota;
        this.persona=persona;
    }
}