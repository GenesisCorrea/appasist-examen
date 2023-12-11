import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaProfesorPageRoutingModule } from './asistencia-profesor-routing.module';

import { AsistenciaProfesorPage } from './asistencia-profesor.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaProfesorPageRoutingModule,
    SharedModule
  ],
  declarations: [AsistenciaProfesorPage]
})
export class AsistenciaProfesorPageModule {}
