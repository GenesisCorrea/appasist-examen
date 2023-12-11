import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
    
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/inicio/main/home/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/inicio/main/home/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'profesor',
    loadChildren: () => import('./pages/inicio/main/profesor/profesor.module').then( m => m.ProfesorPageModule)
  },
  {
    path: 'profile-profesor',
    loadChildren: () => import('./pages/inicio/main/profesor/profile-profesor/profile-profesor.module').then( m => m.ProfileProfesorPageModule)
  },
  {
    path: 'asistencia-profesor',
    loadChildren: () => import('./pages/inicio/main/profesor/asistencia-profesor/asistencia-profesor.module').then( m => m.AsistenciaProfesorPageModule)
  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

