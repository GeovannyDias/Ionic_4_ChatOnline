import { Injectable } from '@angular/core';
//crear metodos de autenticacion
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject, isRejected } from 'q';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataI } from '../models/chat.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //inyectar el constructor
  constructor(
    private AFauth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) { }

  //Iniciar Sesión
  login(mail: string, pass: string) {

    //retornar una promesa(resultados de algun evento //rechazado o resuelto)
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(mail, pass).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  //Cerrar Sesión
  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  // Registro
  signup(data: DataI) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(data.mail, data.pass).then(res => {

        console.log(res.user.uid);
        const uid = res.user.uid;

        this.db.collection('users').doc(uid).set({
          name: data.name,
          lastname: data.lastname,
          phone: data.phone,
          mail: data.mail,
          pass: data.pass,
          //cpass: data.cpass,
          uid: uid
        });

        resolve(res);
      }).catch(error => reject(error));
    });

  }


  /*
  // Registro
  signup(mail: string, pass: string, name: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(mail, pass).then(res => {

        console.log(res.user.uid);
        const uid = res.user.uid;

        this.db.collection('users').doc(uid).set({
          name: name,
          uid: uid
        });

        resolve(res);
      }).catch(error => reject(error));
    });
    
  }
  */









}


