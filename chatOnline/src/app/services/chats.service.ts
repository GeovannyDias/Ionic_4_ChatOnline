import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatI, MessageI } from '../models/chat.interface';
import { map } from "rxjs/operators";
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(
    private db: AngularFirestore
  ) { }

  getChatRooms(){
    //retornamos una coleccion de datos en tiempo real
    //snapshotChanges() retorna una coleccion de los chatsRomos
    return this.db.collection('chatsRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(c => {
        const data = c.payload.doc.data() as ChatI;
        data.id = c.payload.doc.id;
        return data;
      });
    }));
  }

  //consegir el observable de un solo documento
  getChatRoom( chatId: string){
    return this.db.collection('chatsRooms').doc(chatId).valueChanges(); //retorne el observable // solo hacemos el valueChange() para retornar un solo observable
  }

  sendMsgToFirebase(message: MessageI, chatId: string){
    this.db.collection('chatsRooms').doc(chatId).update({
      messages: firestore.FieldValue.arrayUnion(message),
    });
  }





}
