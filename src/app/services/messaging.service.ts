
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import{Store}  from '@ngrx/store'
import { AppState } from '../store/appstate';
import { addmsg, AddMessageOnly } from '../store/msg.actions';
import { msgtype } from '../msgtype';
@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  t:msgtype;
  constructor( private store : Store<AppState>,private angularFireMessaging: AngularFireMessaging)
  {
    //  console.log(' Messaging service constructor called');
    //  this.angularFireMessaging.messaging.subscribe(
    //   (_messaging: AngularFireMessaging ) => {
    //     _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    //     _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    //   }
    // );


    this.angularFireMessaging.messages.subscribe(
      (_messaging:AngularFireMessaging) => {
          _messaging.onMessage = _messaging.onMessage.bind(_messaging);
          _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
  );




  }

requestPermission() {
  this.angularFireMessaging.requestToken.subscribe(
  (token) => {
    console.log(token);
    
    console.log('Permission granted!');
  },
  (err) => {
  console.error('Unable to get permission to notify.', err);
  alert('Unable to get permission to notify')
  }
  );
}
receiveMessage() {
    console.log('receiveMessage called first');
    this.angularFireMessaging.messages.subscribe(
   (payload:any) => {
    console.log('new message received. ', payload.notification);
    var msg=<msgtype>{};
    msg.body= payload.notification.body;
    msg.icon=payload.notification.icon;
    msg.title= payload.notification.title;
    console.log('new message received. ', payload);
    console.log('new message received. ==>', msg);
    //this.Addtostore(payload.notification)
    
   // this.store.dispatch(addmsg(payload.notification))
    this.store.dispatch(AddMessageOnly({msg:msg}))
    
   // this.currentMessage.next(payload);
  
   this.currentMessage.next(payload.notification);
  
});
}


}