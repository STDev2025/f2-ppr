import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
];
