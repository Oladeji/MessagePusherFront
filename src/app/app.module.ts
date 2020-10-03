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
import {StoreDevtoolsModule}  from '@ngrx/store-devtools'
import {MatChipsModule} from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,CommonModule,StoreModule.forRoot({msgtype:msgReducers}),
    StoreDevtoolsModule.instrument({maxAge:25,
      logOnly:environment.production
    }),   BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,AngularFireMessagingModule,
    BrowserModule,AngularFireModule.initializeApp(environment.firebase),
    MatChipsModule,MatIconModule,MatCardModule,
   // MatDialogModule,
    //MatSliderModule,
     //AngularFireAuthModule,
      AngularFireMessagingModule,
      AngularFirestoreModule,
  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
