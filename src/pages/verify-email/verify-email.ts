import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddCourseworkPage } from '../add-coursework/add-coursework';
import { NewPasswordPage } from '../new-password/new-password';

@Component({
  selector: 'page-verify-email',
  templateUrl: 'verify-email.html'
})
export class VerifyEmailPage {

  constructor(public navCtrl: NavController) {
  }
  nav_goToNewPassword(){
    this.navCtrl.push(NewPasswordPage);
  }
}