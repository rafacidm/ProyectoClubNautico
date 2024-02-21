import { Injectable } from '@angular/core';
import { Salida } from '../models/salida.model';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import baseUrl from './helper';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {

  salidas!:Salida[];

  constructor(private dataService:DataService) { }
  
  getAllSalidas(){
    return this.dataService.cargarSalidas();
  }

  setSalidas(misSalidas:Salida[]){
    this.salidas = misSalidas;
  }

  getSalida(index:number){
    let salida:Salida = this.salidas[index];
    return salida;
  }

  addSalida(salida:Salida){
    this.dataService.crearSalida(salida);
  }

  deleteSalida(id:number){
    this.dataService.borrarSalida(id);
  }
}
