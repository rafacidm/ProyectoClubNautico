import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BarcosComponent } from './components/barcos/barcos.component';
import { PersonasComponent } from './components/personas/personas.component';
import { SalidasComponent } from './components/salidas/salidas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { BarcoComponent } from './components/barco/barco.component';
import { SalidaComponent } from './components/salida/salida.component';
import { guardianLogin } from './components/login/login-guard';
import { RutaNoEncontradaComponent } from './components/ruta-no-encontrada/ruta-no-encontrada.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'personas', component:PersonasComponent, canActivate:[guardianLogin]},
    {path:'salidas', component:SalidasComponent, canActivate:[guardianLogin]},
    {path:'barcos', component:BarcosComponent, canActivate:[guardianLogin]},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path: 'editarPersona/:id', component:PersonaComponent, canActivate:[guardianLogin]},
    {path: 'editarBarco/:id', component:BarcoComponent, canActivate:[guardianLogin]},
    {path: 'editarSalida/:id', component:SalidaComponent, canActivate:[guardianLogin]},
      //El path de la ruta de error debe ser SIEMPRE la última!!!!!
    {path: '**', component:RutaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }