export class Persona{
    nombre!:string;
    apellidos!:string;
    dni!:string;
    telefono!:string;
    esSocio!:boolean;
    esPatron!: boolean;

    constructor(nombre:string, apellidos:string, dni:string, telefono:string, esSocio:boolean, esPatron:boolean){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.telefono=telefono;
        this.esSocio=esSocio;
        this.esPatron=esPatron;
    }
}