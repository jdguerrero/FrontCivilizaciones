import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * import componentes
 */
 import { HomeComponent } from './components/home/home.component'
 import { CivilizacionesComponent } from './components/civilizaciones/civilizaciones.component'




const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "civilizaciones", component: CivilizacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
