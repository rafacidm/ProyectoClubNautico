import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcoComponent } from './components/barco/barco.component';
import { PersonaComponent } from './components/persona/persona.component';
import { SalidaComponent } from './components/salida/salida.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'persona', component:PersonaComponent},
    {path:'salida', component:SalidaComponent},
    {path:'barco', component:BarcoComponent},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }