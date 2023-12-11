import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomImputComponent } from './components/custom-imput/custom-imput.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneradorQRComponent } from './components/generador-qr/generador-qr.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CustomImputComponent,
    LogoComponent,
    GeneradorQRComponent
    
  ],
  exports: [
    HeaderComponent,
    CustomImputComponent,
    ReactiveFormsModule,
    LogoComponent,
    GeneradorQRComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
