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
import { CivilizacionPreviewComponent } from './components/civilizaciones/civilizacion-preview/civilizacion-preview.component';

/**
 * imports
 */

import { HttpClientModule } from '@angular/common/http';
import { EstilosVidaComponent } from './components/civilizaciones/civilizacion/estilos-vida/estilos-vida.component';
import { ArteComponent } from './components/civilizaciones/civilizacion/arte/arte.component';
import { UbicacionComponent } from './components/civilizaciones/civilizacion/ubicacion/ubicacion.component';
import { PintarComponent } from './components/actividades/pintar/pintar.component';
import { QuizComponent } from './components/evaluaciones/quiz/quiz.component';
import { RompecabezasComponent } from './components/actividades/rompecabezas/rompecabezas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    CivilizacionesComponent,
    ActividadesComponent,
    EvaluacionesComponent,  
    CivilizacionComponent,
    EstilosVidaComponent,
    CivilizacionPreviewComponent,
    ArteComponent,
    UbicacionComponent,
    PintarComponent,
    QuizComponent,
    RompecabezasComponent
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
