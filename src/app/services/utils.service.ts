import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  modalCtrl = inject(ModalController);
  router = inject(Router);

async takePicture(promptLabelHeader: string) {
  return await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt,
    promptLabelHeader,
    promptLabelPhoto: 'seleccione una imagen',
    promptLabelPicture: 'toma una foto'
  });

};

   // Loading
   loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' });
  }

  // Toast
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  // Navegación a rutas
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  // Guardar en el almacenamiento local
  saveInLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Obtener desde el almacenamiento local
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  //modal
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();

    const{data} = await modal.onWillDismiss();
    if(data) return data;
  }

  disnissNodal(data?: any){
    return this.modalCtrl.dismiss(data);
  }




}
