import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import { BarcoComponent } from './components/barco/barco.component';
import { SalidaComponent } from './components/salida/salida.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CookieService} from 'ngx-cookie-service';
import { BarcosComponent } from './components/barcos/barcos.component';
import { SalidasComponent } from './components/salidas/salidas.component';
import { PersonasComponent } from './components/personas/personas.component';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaService } from './services/persona.service';
import { BarcoService } from './services/barco.service';
import { UsuarioService } from './services/usuario.service';
import { SalidaService } from './services/salida.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    BarcoComponent,
    SalidaComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PersonasComponent,
    BarcosComponent,
    SalidasComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    BrowserAnimationsModule
  ],
  providers: [
    CookieService,
    MessageService,
    PersonaService,
    BarcoService,
    UsuarioService,
    SalidaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
