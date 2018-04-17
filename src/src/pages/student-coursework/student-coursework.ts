import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddCourseworkPage } from '../add-coursework/add-coursework';
import { UploadPicture } from '../upload-picture/upload-picture';

@Component({
  selector: 'page-student-coursework',
  templateUrl: 'student-coursework.html'
})
export class StudentCoursework {

  constructor(public navCtrl: NavController) {
  }

  nav_goToAddCoursework(params){
    if (!params) params = {};
    this.navCtrl.push(AddCourseworkPage);
  }

  nav_goToUploadPicture(params){
    if (!params) params = {};
    this.navCtrl.push(UploadPicture);
  }
  
}
