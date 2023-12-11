import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileProfesorPageRoutingModule } from './profile-profesor-routing.module';

import { ProfileProfesorPage } from './profile-profesor.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileProfesorPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfileProfesorPage]
})
export class ProfileProfesorPageModule {}
