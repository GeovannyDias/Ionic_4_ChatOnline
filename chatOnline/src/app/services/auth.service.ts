import { Injectable } from '@angular/core';
//crear metodos de autenticacion
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject, isRejected } from 'q';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //inyectar el constructor
  constructor(
    private AFauth: AngularFireAuth,
    private router: Router
  ) { }

  //metodo
  login(mail: string, pass: string) {

    //retornar una promesa(resultados de algun evento //rechazado o resuelto)
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(mail, pass).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }


  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }









}


