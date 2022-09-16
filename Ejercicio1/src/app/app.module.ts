import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './seccion/header/header.component';
import { TextoComponent } from './seccion1/texto/texto.component';
import { ContenidoComponent } from './seccion1/contenido/contenido.component';
import { HomeComponent } from './home/home.component';
import { NarbarComponent } from './seccion1/narbar/narbar.component';
import { Seccion2Component } from './seccion2/seccion2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextoComponent,
    ContenidoComponent,
    HomeComponent,
    NarbarComponent,
    Seccion2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
