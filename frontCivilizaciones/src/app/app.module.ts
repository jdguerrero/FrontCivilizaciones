import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HomeComponent } from './components/home/home.component';
import { CivilizacionesComponent } from './components/civilizaciones/civilizaciones.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';

import { CivilizacionComponent } from './components/civilizaciones/civilizacion/civilizacion.component';

/**
 * imports
 */

import { HttpClientModule } from '@angular/common/http';
import { EstilosVidaComponent } from './components/civilizaciones/civilizacion/estilos-vida/estilos-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    CivilizacionesComponent,
    ActividadesComponent,
    EvaluacionesComponent,  
    CivilizacionComponent,
    EstilosVidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
