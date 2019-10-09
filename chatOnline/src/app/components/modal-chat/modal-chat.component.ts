import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { MessageI } from 'src/app/models/chat.interface';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-modal-chat',
  templateUrl: './modal-chat.component.html',
  styleUrls: ['./modal-chat.component.scss'],
})
export class ModalChatComponent implements OnInit {
  chat: any;
  //mensajes = [];
  //msg: MessageI;
  msg: string;
  room: any;

  constructor(
    private nav: NavParams,
    private modalCtrl: ModalController,
    private chatsService: ChatsService
  ) { }

  ngOnInit() {
    this.chat = this.nav.get('chat');
    this.chatsService.getChatRoom(this.chat.id).subscribe(res => {
      console.log(res);
      this.room = res;
    }); //Si nos retorna un observable podemos subscribirnos
  }

  closeChat(){
    this.modalCtrl.dismiss();
  }

  sendMessage(){
    //this.mensajes.push(this.msg); //Meter algo dentro de un recipiente
    //this.msg="";
    const sms: MessageI = {
      content: this.msg,
      type: 'text',
      date: new Date()
    }
    this.chatsService.sendMsgToFirebase(sms, this.chat.id);
    this.msg="";
  }




}
