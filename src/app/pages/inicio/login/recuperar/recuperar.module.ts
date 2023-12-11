import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarPageRoutingModule } from './recuperar-routing.module';

import { RecuperarPage } from './recuperar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPageRoutingModule,
    SharedModule
  ],
  declarations: [RecuperarPage]
})
export class RecuperarPageModule {}
