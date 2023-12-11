import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';
import { NoLoginGuard } from 'src/app/guards/no-login.guard';
import { LoginGuard } from 'src/app/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate: [NoLoginGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule),canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
