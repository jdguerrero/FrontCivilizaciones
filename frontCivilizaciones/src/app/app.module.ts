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
import { CivilizacionPreviewComponent } from './components/civilizaciones/civilizacion-preview/civilizacion-preview.component';
import { CivilizacionComponent } from './components/civilizaciones/civilizacion/civilizacion.component';

/**
 * imports
 */

import { HttpClientModule } from '@angular/common/http';
<<<<<<< Updated upstream
import { EstilosVidaComponent } from './components/civilizaciones/civilizacion/estilos-vida/estilos-vida.component';
=======
import { ReligionesComponent } from './components/civilizaciones/civilizaciones/religiones/religiones.component';
import { EstiloViadComponent } from './components/civilizaciones/civilizacion/estilo-viad/estilo-viad.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    CivilizacionesComponent,
    ActividadesComponent,
    EvaluacionesComponent,
    CivilizacionPreviewComponent,
    CivilizacionComponent,
<<<<<<< Updated upstream
    EstilosVidaComponent
=======
    ReligionesComponent,
    EstiloViadComponent
>>>>>>> Stashed changes
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
