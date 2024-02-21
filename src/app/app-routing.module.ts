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

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'personas', component:PersonasComponent},
    {path:'salidas', component:SalidasComponent},
    {path:'barcos', component:BarcosComponent},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path: 'editarPersona/:id', component:PersonaComponent},
    {path: 'editarBarco/:id', component:BarcoComponent},
    {path: 'editarSalida/:id', component:SalidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }