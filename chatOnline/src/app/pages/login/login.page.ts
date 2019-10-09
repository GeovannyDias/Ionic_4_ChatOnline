import { Component, OnInit } from '@angular/core';
//importar el servicio de autenticacion.
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router"; //navegacion (entre paginas)

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mail: string;
  pass: string;

  //Con esta clase ya tenemes a todos los metodos(login)
  constructor(private authServ : AuthService, public router : Router) { }

  ngOnInit() {
  }

  //Funsion del login
  onSubmitLogin(){
    //acceder a login
    this.authServ.login(this.mail, this.pass).then( res => {
      this.router.navigate(['/home']);
    }).catch(err => alert('Datos Incorrectos o no existen...'))
  }



}
