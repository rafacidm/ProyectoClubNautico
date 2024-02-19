import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcoComponent } from './barco/barco.component';
import { PersonaComponent } from './persona/persona.component';
import { SalidaComponent } from './salida/salida.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

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