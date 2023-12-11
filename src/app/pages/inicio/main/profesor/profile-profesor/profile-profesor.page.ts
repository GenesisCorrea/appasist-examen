import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile-profesor',
  templateUrl: './profile-profesor.page.html',
  styleUrls: ['./profile-profesor.page.scss'],
})
export class ProfileProfesorPage implements OnInit {

  firebaseSvs = inject(FirebaseService);
  utilsSvs = inject(UtilsService)

  user(): User {
    return this.utilsSvs.getFromLocalStorage('user');
  }

  //tomar seleccionar img
  async takeImg(){

    let user = this.user();
    let path = `users/${user.uid}`;

    const loading = await this.utilsSvs.loading();
    await loading.present();

    const dataUrl = (await this.utilsSvs.takePicture('imagen de perfil')).dataUrl;

    let imagePath = `${user.uid}/profile`;
    user.img = await this.firebaseSvs.upLoadImage(imagePath, dataUrl);

    this.firebaseSvs.updateDocument(path, {img: user.img}).then(async res => {

      this.utilsSvs.saveInLocalStorage('user', user);

      this.utilsSvs.presentToast({
        message: "imagen actualizada exitosamente",
        duration: 1500,
        color: 'primary',
        position: 'middle',
        icon: 'checkmark-circle-outline'
      })

    }).catch(error => {
      console.log(error);

      this.utilsSvs.presentToast({
        message: error.message,
        duration: 2500,
        color: 'primary',
        position: 'middle',
        icon: 'checkmark-circle-outline'
      })

    }).finally(() => {
      loading.dismiss();
    })
  }

   //cerrar Sesion

   signDut(){
    this.firebaseSvs.signOut();
  }

  constructor() { }

  ngOnInit() {
  }

}
