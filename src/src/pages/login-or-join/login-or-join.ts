import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginWithEmailPage } from '../login-with-email/login-with-email';
import { JoinAuxiPage } from '../join-auxi/join-auxi';
import { AcademicInformationPage } from '../academic-information/academic-information';
import { VerifyUniversityEmailPage } from '../verify-university-email/verify-university-email';
import { AddCourseworkPage } from '../add-coursework/add-coursework';

@Component({
  selector: 'page-login-or-join',
  templateUrl: 'login-or-join.html'
})
export class LoginOrJoinPage {

  constructor(public navCtrl: NavController) {
  }

  nav_goToJoinAuxi(params){
    if (!params) params = {};
    this.navCtrl.push(JoinAuxiPage);
  }
  
  nav_goToLoginWithEmail(params){
    if (!params) params = {};
    this.navCtrl.push(LoginWithEmailPage);
  }
}
