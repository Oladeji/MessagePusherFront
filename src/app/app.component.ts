import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { MessagingService } from './services/messaging.service';
import { AppState } from './store/appstate';
import { msgtype } from './msgtype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  //themsg$: Observable<msgtype>;
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  initialState :AppState={
    msg:[  {
             body:'Waiting......',
             icon: '',
             title :'Waiting title'
           }
        ],
  
  token:'token',
  loggedIn:false,
  id:'gg',
  passcode:'bb'
  }
  t= <msgtype>{};
  
  constructor(private router:Router  ,  private messagingService : MessagingService){
    
    this.t.body= "ayload.notification.body";
    this.t.icon="payload.notification.icon";
    this.t.title= "payload.notification.title";
console.log(this.initialState)
console.log(this.initialState.msg)
console.log(...this.initialState.msg)
console.log(this.initialState.msg.concat(this.t))  
}

  signOut(){} 

  ngOnInit() {
   // this.messagingService.requestPermission()
   

 }
}