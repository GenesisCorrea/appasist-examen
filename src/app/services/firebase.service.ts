import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc,collectionData,query,collection, updateDoc} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL } from "firebase/storage";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvs = inject(UtilsService);
  storage = inject(AngularFireStorage);

  //aunteticasion
  getAuth(){
    return getAuth();
  }

   //acceder//
   signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //crear usuario//
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //actualizar usuarios//
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName } )
    }
  
  //cerrar Sesion
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvs.routerLink('inicio/login');

  }

  //base de datos//

  //obtener documentos de una coleccion
  getCollectionData(path: string,collectionQuery?: any){
    const ref = collection(getFirestore(),path);
    return collectionData(query(ref,collectionQuery), {idField: 'id'});

  }

  //setear un documento//
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //obtener un documento//
  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(), path))).data();
  }

   // Enviar email para restablecer contraseña 
   sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  //actualizar documento
  updateDocument(paht: string, data: any){
    return updateDoc(doc(getFirestore(),paht),data);
  }

  //subir img

  async upLoadImage(path: string, data_url: string){
    return uploadString(ref(getStorage(),path),data_url,'data_url').then(() => {
      return getDownloadURL(ref(getStorage(),path))
    })
  }

}
