import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';


@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {
  
  firebaseSvs = inject(FirebaseService);
  utilsSvs = inject(UtilsService)

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve) => {

      this.firebaseSvs.getAuth().onAuthStateChanged((auth) => {

        if (!auth) {
          resolve(true);
        } else {
          const userEmail = auth.email;
          if (userEmail && userEmail.includes('@profesor.cl')) {
            this.utilsSvs.routerLink('profesor');
          } else {
            this.utilsSvs.routerLink('inicio/main/home');
          }
          resolve(false);
        }
      })
    });
  }
  
}
