import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorPage } from './profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorPage
  },
  {
    path: 'profile-profesor',
    loadChildren: () => import('./profile-profesor/profile-profesor.module').then( m => m.ProfileProfesorPageModule)
  },
  {
    path: 'asistencia-profesor',
    loadChildren: () => import('./asistencia-profesor/asistencia-profesor.module').then( m => m.AsistenciaProfesorPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorPageRoutingModule {}
