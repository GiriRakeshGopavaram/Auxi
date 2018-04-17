import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VerifyUniversityEmailPage } from '../verify-university-email/verify-university-email';
import { AddCourseworkPage } from '../add-coursework/add-coursework';


@Component({
  selector: 'page-academic-information',
  templateUrl: 'academic-information.html'
})
export class AcademicInformationPage {

  constructor(public navCtrl: NavController, public navParams:NavParams) {

  }
  ionViewDidLoad(){
    console.log(this.navParams)
  }
  nav_goToVerifyUniversityEmail(params){
    if (!params) params = {};
    this.navCtrl.push(VerifyUniversityEmailPage);
  }
  
  nav_goToAddCoursework(params){
    if (!params) params = {};
    this.navCtrl.push(AddCourseworkPage);
  }
}
