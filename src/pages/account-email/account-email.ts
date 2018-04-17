import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VerifyUniversityEmailPage } from '../verify-university-email/verify-university-email'
import { VerifyEmailPage } from '../verify-email/verify-email';

@Component({
  selector: 'page-account-email',
  templateUrl: 'account-email.html'
})
export class AccountEmailPage {

  constructor(public navCtrl: NavController) {
  }
  
  nav_goToVerifyEmail(){
    this.navCtrl.push(VerifyEmailPage); 
  }
}
