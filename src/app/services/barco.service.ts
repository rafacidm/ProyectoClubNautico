import { Injectable } from '@angular/core';
import { Barco } from '../models/barco.model';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import baseUrl from './helper';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  barcos!:Barco[];

  constructor(private dataService:DataService) { }

  getAllBarcos(){
    return this.dataService.cargarBarcos();
  }

  setBarcos(misBarcos:Barco[]){
    this.barcos = misBarcos;
  }

  getBarco(index:number){
    console.log(this.barcos);
    let barco:Barco = this.barcos[index];
    return barco;
  }

  addBarco(barco:Barco){
    return this.dataService.crearBarco(barco);
  }

  deleteBarco(id:number){
    return this.dataService.borrarBarco(id);
  }

  putBarco(barco:Barco){
    return this.dataService.modificarBarco(barco);
  }
}
