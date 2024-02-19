import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BarcosComponent } from './components/barcos/barcos.component';
import { PersonasComponent } from './components/personas/personas.component';
import { SalidasComponent } from './components/salidas/salidas.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'personas', component:PersonasComponent},
    {path:'salidas', component:SalidasComponent},
    {path:'barcos', component:BarcosComponent},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }