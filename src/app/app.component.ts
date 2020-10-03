import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //themsg$: Observable<msgtype>;
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  //themsg$=this.store.pipe(select(state=>state.msg)) 
  constructor(private router:Router){}
  signOut(){} 
}