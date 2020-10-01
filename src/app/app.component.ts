import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { Observable } from 'rxjs';
import{Store, select}  from '@ngrx/store'
import {AppState}  from '../app/store/appstate'
import { msgtype } from './msgtype';
import { addmsg } from './store/msg.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngFirePush1';
  message:Observable<any>;
  body:msgtype;
  show:msgtype;
  notificationType = 'info'; // success, info, warning
  notificationMessage = '';
  flashnotification = false;
  //themsg$: Observable<msgtype>;
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  constructor(private store : Store<AppState>,private messagingService: MessagingService) { 
    this.store.select<any>('msgtype')
    .subscribe((x:msgtype)=>{
      this.show= x
      console.log("Sxxxxxxxxxxxxxxxxxxxxxxeding from store")
      console.log(x)
      this.notify( x);
      console.log(x.body)
  });

} //--injection


ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()


 
   // console.log(this.body.body)
    //console.log(x)
    //console.log(this.body.data)
  //});
 // this.message = this.messagingService.currentMessage;
  //this.message.subscribe((x)=>this.body=x);
 
 }

 getMessage()
 {
   
 }
 
 notify(body: msgtype ){

    console.log(body)
    this.notificationType = 'warning'; // success, info, 
    this.notificationMessage = body.title;
    this.flashnotification = true;

  }
 
}