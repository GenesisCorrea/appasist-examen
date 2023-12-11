import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileProfesorPage } from './profile-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileProfesorPageRoutingModule {}
