# Ionic_4_ChatOnline
Chat Online

Aplicación de mensajeria

**Conexión a Firebase:**
```
npm install firebase @angular/fire --save
```
# Guards

```
ionic g guard guards/auth --spec=false
ionic g guard guards/nologin --spec=false
```
**Importar en cada fichero guard**
```
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';
import { map } from "rxjs/operators";
```
* **auth.guard.ts**

```
export class AuthGuard implements CanActivate {

  constructor(
    private AFauth: AngularFireAuth,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.AFauth.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
        this.router.navigate(['/login']);
        console.log('user No autenticated');
        console.log(auth);
        return false;
      } else {
        console.log('user autenticated');
        //console.log(auth);
        return true;
      }
    }));
  }

```
* **nologin.guard.ts**
```
export class NologinGuard implements CanActivate {

  constructor(
    private AFauth: AngularFireAuth,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.AFauth.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
        console.log('user No autenticated');
        return true;
      } else {
        this.router.navigate(['/home']);
        console.log('user autenticated');
        //console.log(auth);
        return false;
      }
    }));
  }
}

```
* **app-routing.module.ts**
```
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from './guards/nologin.guard';

{ path: 'home', loadChildren: './componentes/home/home.module#HomePageModule', canActivate: [AuthGuard] },
{ path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate: [NologinGuard] },

```

**Ionic 4 en español: (ChatOnline)**
* **https://www.youtube.com/watch?v=xgkwOBpU3ek&list=PL0az06iNsMl4OSbuxkstjR8e2lQDj1DVk**

**Pipes en Ionic**

* **https://www.nigmacode.com/ionic/Pipes-en-Ionic**

