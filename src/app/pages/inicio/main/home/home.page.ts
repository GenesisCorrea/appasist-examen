import { Component, OnInit, inject } from '@angular/core';
import { Asignaturas } from 'src/app/models/asignaturas.model';
import { User } from 'src/app/models/user.model';

import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvs = inject(FirebaseService);
  utilsSvs = inject(UtilsService)

  asignaturas: Asignaturas[] = [];

  ngOnInit() {
    
  }

  user(): User{
    return this.utilsSvs.getFromLocalStorage('user');
  }

  ionViewWillEnter(){
    this.getAsignaturas();
  }  

  //obtener asignaturas
  getAsignaturas(){
    let path = `users/${this.user().uid}/asignaturas`;

    let sub = this.firebaseSvs.getCollectionData(path).subscribe({
      next: (res: any) => {
        console.log(res);
        this.asignaturas = res;
        sub.unsubscribe();
      }
    })
  }

  getAsignatura(){
  }
 

}
