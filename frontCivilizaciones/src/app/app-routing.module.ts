import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * import componentes
 */
 import { HomeComponent } from './components/home/home.component';
 import { CivilizacionesComponent } from './components/civilizaciones/civilizaciones.component';
 import { ActividadesComponent } from './components/actividades/actividades.component';
 import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';




const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "civilizaciones", component: CivilizacionesComponent},{path: "actividades", component: ActividadesComponent},
  {path: "evaluaciones", component: EvaluacionesComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
