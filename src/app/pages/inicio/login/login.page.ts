import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Agregado: Importar Router
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  // Quitado: inject no es necesario en Angular
  // firebaseSvs = inject(FirebaseService);
  // utilsSvs = inject(UtilsService);

  // Añadido: Inyectar el servicio Router
  constructor(
    private router: Router,
    private firebaseSvs: FirebaseService,
    private utilsSvs: UtilsService
  ) {}

  ngOnInit() {}

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvs.loading();
      await loading.present();

      this.firebaseSvs.signIn(this.form.value as User).then(res => {
        this.getUserInfo(res.user.uid);
      }).catch(error => {
        console.log(error);

        this.utilsSvs.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })

      }).finally(() => {
        loading.dismiss();
      })
    }
  }

  async getUserInfo(uid: string) {
    if (this.form.valid) {

      const loading = await this.utilsSvs.loading();
      await loading.present();

      let path = `users/${uid}`;

      this.firebaseSvs.getDocument(path).then((user: User) => {

        this.utilsSvs.saveInLocalStorage('user', user);

        // Lógica de redirección
        const correo = this.form.value.email; 
        this.utilsSvs.routerLink('inicio/main/home');
        this.form.reset();
        // Añadido: Obtener el correo electrónico
        if (correo.includes('@profesor.cl')) {
          this.router.navigate(['/profesor']);
        } else {
          // Manejar otro caso o mostrar un mensaje de error
          console.error('Rol de usuario no reconocido');
        }

        this.form.reset();

        this.utilsSvs.presentToast({
          message: `Te damos la bienvenida ${user.name}`,
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon: 'person-circle-outline'
        });

      }).catch(error => {
        console.log(error);

        this.utilsSvs.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'aletr-circle-outline'
        });

      }).finally(() => {
        loading.dismiss();
      });
    }
  }
}
