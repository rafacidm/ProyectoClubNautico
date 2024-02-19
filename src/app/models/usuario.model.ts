export class UsuarioSignUp{
    nombre!:string;
    apellidos!:string;
    username!:string;
    email!:string;
    password!:string;

    constructor(nombre:string, apellidos:string, username:string, email:string, password:string){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.username=username;
        this.email=email;
        this.password=password;
    }
}
export class UsuarioLogin{
    username!:string;
    password!:string;

    constructor(username:string, password:string){
        this.username=username;
        this.password=password;
    }
}

