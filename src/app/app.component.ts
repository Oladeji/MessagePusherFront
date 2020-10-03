import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { Observable } from 'rxjs';
import{Store, select}  from '@ngrx/store'
import {AppState}  from '../app/store/appstate'
import { msgtype } from './msgtype';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngFirePush1';
  message:Observable<any>;
  body:msgtype[];
  show:msgtype[];

  //themsg$: Observable<msgtype>;
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  constructor(private toastr: ToastrService,private store : Store<AppState>,private messagingService: MessagingService  ) {
	
    this.store.select<any>('msgtype')
    .subscribe((x:msgtype[])=>{
      this.show= x
      console.log("Sxxxxxxxxxxxxxxxxxxxxxxeding from store")
      console.log(x)
      //this.notify( x);
      
      //this.toastr.success(x.title, x.body);
      //console.log(x.body)
  });

} //--injection


ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()

 }

 
//  notify(body: msgtype ){

//     console.log(body)
//     this.notificationType = 'warning'; // success, info, 
//     this.notificationMessage = body.title;
//     this.flashnotification = true;

//   }
 
}