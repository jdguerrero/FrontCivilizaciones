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





const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "civilizaciones", component: CivilizacionesComponent},
  {path: "actividades", component: ActividadesComponent},
  {path: "evaluaciones", component: EvaluacionesComponent},

  {path: "civilizacion/:id", component: CivilizacionComponent},
  {path: "estilos-vida", component: EstilosVidaComponent},
  {path: "religiones", component: ReligionesComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
