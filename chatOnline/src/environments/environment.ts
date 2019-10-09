// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

//Conexion con Firebase (antes instalar el componente de conexion
//usar la linea de comando: 
// npm install firebase @angular/fire --save )
//Código obtenido del proyecto creado en Firebase (Configuracion del Proyecto)
export const firebaseConfig = {
  apiKey: "AIzaSyAHbZ6bfqbJNZt11c5fIe3iJf7F7g8iH4I",
  authDomain: "chatonline-c9e69.firebaseapp.com",
  databaseURL: "https://chatonline-c9e69.firebaseio.com",
  projectId: "chatonline-c9e69",
  storageBucket: "",
  messagingSenderId: "325214880794",
  appId: "1:325214880794:web:e07a806ba67bdae6"
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
