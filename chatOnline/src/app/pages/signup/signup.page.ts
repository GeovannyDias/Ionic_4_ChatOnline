import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DataI } from 'src/app/models/chat.interface';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  data: DataI = {
    //id: '',
    name: '',
    lastname: '',
    phone: '',
    mail: '',
    pass: '',
    cpass: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    
  }

  async onSubmitSignup() {
    const loading = await this.loadingCtrl.create({
      message: 'Saving...'
    });
    await loading.present();
    if (this.data.pass === this.data.cpass) {
      this.authService.signup(this.data).then(auth => {
        loading.dismiss();
        //console.log('Promesa SignUp: ', auth);
        this.router.navigate(['/home']);
      }).catch(error => {
        console.log(error);
      });
    } else {
      loading.dismiss();
      alert('Confirme correctamente su contraseña');
    }
  }
  





/*
async / await: Las funciones Async/await, nos ayudan a escribir código 
                completamente síncrono mientras realizamos tareas asíncronas 
                en segundo plano.

Consultar:
API Fetch.

*/



}

