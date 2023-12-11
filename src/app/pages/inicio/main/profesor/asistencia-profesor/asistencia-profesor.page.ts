import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

import { GeneradorQRComponent } from 'src/app/shared/components/generador-qr/generador-qr.component';

import { ModalController } from '@ionic/angular';

import * as QRCode from 'qrcode-generator';
import { Asistencia } from 'src/app/models/asistencia.model';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-asistencia-profesor',
  templateUrl: './asistencia-profesor.page.html',
  styleUrls: ['./asistencia-profesor.page.scss'],
})
export class AsistenciaProfesorPage {

  firebaseSvs = inject(FirebaseService);
  utilsSvs = inject(UtilsService)

  private qr: any;
  public qrImageUrl: string;

  constructor(private modalController: ModalController) { }

  ionViewWillEnter(){
    this.getAsistencia();
    this.getAlumno();
  }  

  asistenciaa: Asistencia[] = [];
  alumno: User[] = [];


  //obtener asignaturas
  getAsistencia() {
    let path = 'asistencia';  // Ajusta la ruta según tu estructura de Firestore
  
    let sub = this.firebaseSvs.getCollectionData(path).subscribe({
      next: (res: any) => {
        console.log(res);
        this.asistenciaa = res;
        sub.unsubscribe();
      }
    });
  }

  getAlumno() {
    let userToViewId = 'GMqb6inRZOXvPv5NVcLTtdQ1syH2';
    let path = `users/${userToViewId}`;
  
    this.firebaseSvs.getDocument(path).then((res: any) => {
      console.log(res);
      this.alumno = res;
    }).catch((error) => {
      console.error(error);
    });
  }

  generateQRCode() {
    const contenido = 'Estás presente';
    this.qr = QRCode(0, 'M');
    this.qr.addData(contenido);
    this.qr.make();

    // Obtener la URL de la imagen del código QR y asignarla a qrImageUrl
    this.qrImageUrl = this.qr.createDataURL(10, 5);
  }

  ngOnInit() {
  }

   // generar QR//
   GenerarQR() {

    this.utilsSvs.presentModal({
      component: GeneradorQRComponent
    })
  }

  

}
