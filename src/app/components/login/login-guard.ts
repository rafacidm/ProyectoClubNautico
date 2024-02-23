import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsuarioService } from "src/app/services/usuario.service";

@Injectable()
export class guardianLogin implements CanActivate{

    constructor(private usuarioService: UsuarioService, private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.usuarioService.estaLogueado()){
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
     
}