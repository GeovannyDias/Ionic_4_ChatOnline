import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//conexion Firebase importo desde el fichero "environment.ts"
//en el directorio "environments" 
import { firebaseConfig } from "../environments/environment";
//importo los modulos de conexion
import { AngularFireModule } from "@angular/fire";
//Modulo de autenticacion
import { AngularFireAuthModule } from "@angular/fire/auth";
//Agregar al arreglo import: []

//Angularfirestore ** Ver datos en tiempo real
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ModalChatComponent } from './components/modal-chat/modal-chat.component';
import { FormsModule } from '@angular/forms';
//import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";


@NgModule({
  declarations: [
    AppComponent,
    ModalChatComponent
  ],
  entryComponents: [
    ModalChatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    //{ provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
