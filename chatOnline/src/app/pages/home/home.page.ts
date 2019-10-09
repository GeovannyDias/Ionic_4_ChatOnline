import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatsService } from 'src/app/services/chats.service';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalChatComponent } from 'src/app/components/modal-chat/modal-chat.component';
//import { ChatI } from 'src/app/models/chat.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRoms: any = [];

  constructor(
    public authService: AuthService,
    public chatService: ChatsService,
    private modalCtrl: ModalController,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    //debemos subscribirnos para ver los cambios en tiempo real.
    this.chatService.getChatRooms().subscribe(chats => {
      console.log('Chats: ',chats);
      chats.map(chat => {
        this.chatRoms = chats;
        //console.log('Chat: ',chat.payload.doc.data()); //la funsion "data" nos devuelve los datos que estan dentro del objeto
        //const data: ChatI = chat.payload.doc.data() as ChatI
        //data.id = chat.payload.doc.id;
        //console.log(data);
        //this.chatRoms.push(data); // insertarmos los objetos dentro de chatRoms // formateados
      });
    });
  }

  onLogout(){
    this.authService.logout();
  }

  openChat(chat){
    this.modalCtrl.create({
      component: ModalChatComponent,
      componentProps: {
        //name: chat.name
        chat: chat
      }
    }).then((modal) => {
      modal.present();
    });

  }


  //Acction Sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Logout',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.onLogout();
          console.log('Disconnected');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }











}
