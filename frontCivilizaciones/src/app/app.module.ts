import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HomeComponent } from './components/home/home.component';
import { CivilizacionesComponent } from './components/civilizaciones/civilizaciones.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    CivilizacionesComponent,
    ActividadesComponent,
    EvaluacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
