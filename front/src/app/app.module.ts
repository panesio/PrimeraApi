import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importar módulo FormsModule
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';

// Importar el servicio de tareas
import { TareasService } from './services/tareas.service';

// Importar el módulo que contiene y provee los métodos y configuraciones de http
import { HttpClientModule } from '@angular/common/http';

// Declaration ira las vistas con su lógica
// Imports iran librerias, paquetes, modulos, etc
// Providers son servicios para que podamos trabajar con ellos, ya sean APIS de terceros o propias
//Todo toca importarlos en app.module para que sean funcionales

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
