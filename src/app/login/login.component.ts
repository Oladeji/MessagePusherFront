import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  startspinner = false;
  notificationType = 'success'; // success, info, warning
  notificationMessage = 'login was successful';
  flashnotification = false;
  frm_login: any;
  error: any;
  theform: any;

   constructor(
     // private store: Store<AllStates.AppState>,
    //  private svc: GeneralsvcService,
      // private usr : UserEmmiterService,
      private router: Router, private fb: FormBuilder) {
      }


  ngOnInit() {
       this.frm_login = this.fb.group({

        UserKey: ['', [Validators.required as any]],
        Password: ['', [Validators.required as any]]
    });
 
    //   this.store.select('LoggedInStu').subscribe((x) => {

    // if (!x.LoggedIn){
    //   if (x.LoggedInError!=null){ 
    //    this.startspinner = false;
    //     this.notificationType = 'warning'; // success, info, warning
    //    this.notificationMessage = x.LoggedInError;
    //     this.flashnotification = true;
    //     }
    // }else{
    //    this.startspinner = false;
    //    this.notificationType = 'warning'; // success, info, warning
    //    this.notificationMessage = x.LoggedInError;
    //    this.flashnotification = false;
    // }
    // }
    //   );

  }

SignIn()
{
 // this.startspinner = true;
 // this.store.dispatch(new AllActions.LogInForm_PreAction({url: this.env.baseUrl  + Defaultvalues.loginurl, usernamepass: this.frm_login.value}) );
 this.router.navigate(['Display']);
}
 
}