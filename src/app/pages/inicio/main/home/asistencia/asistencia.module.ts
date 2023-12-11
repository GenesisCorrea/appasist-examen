import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaPageRoutingModule } from './asistencia-routing.module';

import { AsistenciaPage } from './asistencia.page';
import { SharedModule } from 'src/app/shared/shared.module';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  imports: [
    ZXingScannerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaPageRoutingModule,
    SharedModule
  ],
  declarations: [AsistenciaPage]
})
export class AsistenciaPageModule {}
