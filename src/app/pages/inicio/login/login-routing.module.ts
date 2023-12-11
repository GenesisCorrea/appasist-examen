import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'registrarse',
    loadChildren: () => import('../login/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('../login/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
