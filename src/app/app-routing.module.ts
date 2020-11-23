import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * import componentes
 */
import { HomeComponent } from './components/home/home.component';
import { CivilizacionesComponent } from './components/civilizaciones/civilizaciones.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';
import { ReligionesComponent } from './components/civilizaciones/civilizacion/religiones/religiones.component'

// Civilizaciones sub components
import { CivilizacionComponent } from './components/civilizaciones/civilizacion/civilizacion.component';
import { EstilosVidaComponent } from './components/civilizaciones/civilizacion/estilos-vida/estilos-vida.component';
import { ArteComponent } from './components/civilizaciones/civilizacion/arte/arte.component';
import { UbicacionComponent } from './components/civilizaciones/civilizacion/ubicacion/ubicacion.component';

// Evaluaciones sub components
import { QuizComponent} from './components/evaluaciones/quiz/quiz.component';

import { RompecabezasComponent } from './components/actividades/rompecabezas/rompecabezas.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "civilizaciones", component: CivilizacionesComponent },
  { path: "civilizacion/:id", component: CivilizacionComponent },
  { path: "estiloVida/:id", component: EstilosVidaComponent },
  { path: "arte/:id", component: ArteComponent },
  { path: "ubicacion/:id", component: UbicacionComponent },
  { path: "religion/:id", component: ReligionesComponent },
  // Actividades
  { path: "actividades", component: ActividadesComponent },
  // Evaluaciones
  { path: "evaluaciones", component: EvaluacionesComponent },
  { path: "evaluaciones/quiz/:id", component: QuizComponent },
  { path: "rompecabezas", component: RompecabezasComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
