import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
@NgModule({
  declarations: [
    AppComponent ,FlashNotificationComponent
  ],
  imports: [
    BrowserModule,CommonModule,
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
