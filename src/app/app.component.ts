import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngFirePush1';
  message:Observable<any>;
  body:msgtype;
  notificationType = 'info'; // success, info, warning
  notificationMessage = '';
  flashnotification = false;

  constructor(private messagingService: MessagingService) { 


} //--injection


ngOnInit() {
  this.messagingService.requestPermission()
  this.messagingService.receiveMessage()
  
  //this.messagingService.currentMessage.subscribe((x:msgtype)=>{this.body=x
  this.notify(this.messagingService.currentMessage)

   // console.log(this.body.body)
    //console.log(x)
    //console.log(this.body.data)
  //});
 // this.message = this.messagingService.currentMessage;
  //this.message.subscribe((x)=>this.body=x);
 
 }
  notify(body: Observable<msgtype> ){
    console.log("Calling to notify")
    body.subscribe((x:msgtype)=>this.body=x)
    console.log(this.body)
    this.notificationType = 'warning'; // success, info, 
    this.notificationMessage = this.body.title;
    this.flashnotification = true;

  }
 
}