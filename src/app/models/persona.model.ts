export class Persona{
    id!:number;
    nombre!:string;
    apellidos!:string;
    dni!:string;
    telefono!:string;
    esSocio!:boolean;
    esPatron!: boolean;

    constructor(id:number, nombre:string, apellidos:string, dni:string, telefono:string, esSocio:boolean, esPatron:boolean){
        this.id=id;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.telefono=telefono;
        this.esSocio=esSocio;
        this.esPatron=esPatron;
    }
}