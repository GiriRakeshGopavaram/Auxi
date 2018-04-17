import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddCourseworkPage } from '../add-coursework/add-coursework';

@Component({
  selector: 'page-verify-university-email',
  templateUrl: 'verify-university-email.html'
})
export class VerifyUniversityEmailPage {

  constructor(public navCtrl: NavController) {
  }
  nav_goToAddCoursework(params){
    //if (!params) params = {};
    this.navCtrl.push(AddCourseworkPage);
  }
}
