import { Time } from "@angular/common";
import { Persona } from "./persona.model";
import { Barco } from "./barco.model";

export class Salida{
    id!:number;
    fecha!:Date;
    hora!:Time;
    destino!:string;
    patron!:Persona;
    barco!:Barco;

    constructor(id:number, fecha:Date, hora:Time, destino:string, patron:Persona, barco:Barco){
        this.id=id;
        this.fecha=fecha;
        this.hora=hora;
        this.destino=destino;
        this.patron=patron;
        this.barco=barco;
    }
}