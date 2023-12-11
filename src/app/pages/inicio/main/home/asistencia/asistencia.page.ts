import { Component, OnInit, ViewChild, NgZone, inject } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { AlertController } from '@ionic/angular';

import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

import { User } from 'src/app/models/user.model';
import { Asignaturas } from 'src/app/models/asignaturas.model';
import { Asistencia } from 'src/app/models/asistencia.model';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage implements OnInit {
  @ViewChild('scanner', { static: true }) scanner: ZXingScannerComponent;
  isScannerActive: boolean = false;
  presentMessage: string = '';

  private qrCodeRead: boolean = false;

  constructor(
    private ngZone: NgZone,
    private alertController: AlertController, ) {}

  firebaseSvs = inject(FirebaseService);
  utilsSvs = inject(UtilsService)


  ngOnInit() {
  }

  asistenciaa: Asistencia[] = [];

  ionViewWillEnter(){
    this.getAsistencia();
  }  
  
  asistencia():Asistencia {
    return this.utilsSvs.getFromLocalStorage('asistencia')
  }

  getAsistencia() {
    let path = 'asistencia';
  
    let sub = this.firebaseSvs.getCollectionData(path).subscribe({
      next: (res: any) => {
        console.log(res);
        this.asistenciaa = res;
        sub.unsubscribe();
      }
    });
  }

  startScanner() {
    this.ngZone.run(() => {
      this.isScannerActive = true;
    });
  }

  async updateAsistencia(): Promise<void> {
    const asistenciaId = 'xySFRkOshQHDNnbIbyy0';
    const path = `asistencia/${asistenciaId}`;
  
    const now = new Date();
    const formattedDate = this.getFormattedDate();
  
    await this.firebaseSvs.updateDocument(path, {
      fecha: formattedDate,
      asistencia: 'presente'
    });
  }

  async handleBarcodeResult(event: any): Promise<void> {
    if (this.qrCodeRead) {
      const alert = await this.alertController.create({
        header: 'Ya estás presente',
        message: 'Has registrado tu asistencia previamente.',
        buttons: ['OK']
      });
  
      await alert.present();
  
      this.isScannerActive = false;
      return;
    }
    console.log('Código escaneado:', event.text);

    const now = new Date(); {

      this.presentMessage = `Presente el ${this.getFormattedDate()}`;
    
      const alert = await this.alertController.create({
        header: 'Código QR leído',
        message: 'Estas presente',
        buttons: ['OK']
      });
    
      await alert.present();
    
      this.isScannerActive = false;
    
      this.qrCodeRead = true;

      this.updateAsistencia().then(() => {
        console.log('Asistencia actualizada en Firebase');
      });
    }
  }

  resetQRCodeStatus() {
    this.qrCodeRead = false;
  }
  
  getFormattedDate(): string {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0'); // Obtener el día y ajustar el formato
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes y ajustar el formato
    const year = now.getFullYear().toString().slice(-2); // Obtener los últimos dos dígitos del año
  
    return `${day}-${month}-${year}`;
  }

}