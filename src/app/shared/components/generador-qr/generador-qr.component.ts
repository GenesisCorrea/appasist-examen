import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrls: ['./generador-qr.component.scss'],
})
export class GeneradorQRComponent  implements OnInit {

  firebaseSvs = inject(FirebaseService);
  utilsSvs = inject(UtilsService)

  private qr: any;
  public qrImageUrl: string;

  constructor() {
    const contenido = 'Estás presente';
    this.qr = QRCode(0, 'M');
    this.qr.addData(contenido);
    this.qr.make();

    // Obtener la URL de la imagen del código QR y asignarla a qrImageUrl
    this.qrImageUrl = this.qr.createDataURL(10, 5);
   }

  generateQRCode() {
    const contenido = 'Estás presente';
    this.qr = QRCode(0, 'M');
    this.qr.addData(contenido);
    this.qr.make();

    // Obtener la URL de la imagen del código QR y asignarla a qrImageUrl
    this.qrImageUrl = this.qr.createDataURL(10, 5);
  }

  ngOnInit() {}

}
