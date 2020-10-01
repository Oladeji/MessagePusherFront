import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store'
import {msgReducers} from '../app/store/msg.reducers'
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MessagingService } from './services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FlashNotificationComponent } from './flash-notification/flash-notification.component';
import {StoreDevtoolsModule}  from '@ngrx/store-devtools'

@NgModule({
  declarations: [
    AppComponent ,FlashNotificationComponent
  ],
  imports: [
    BrowserModule,CommonModule,StoreModule.forRoot({msgtype:msgReducers}),
    StoreDevtoolsModule.instrument({maxAge:25,
      logOnly:environment.production
    }),
    AppRoutingModule,AngularFireMessagingModule,
    BrowserModule,AngularFireModule.initializeApp(environment.firebase),
    
  
     //AngularFireAuthModule,
      AngularFireMessagingModule,
      AngularFirestoreModule,
  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
