import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CoursesPage} from '../courses/courses'
@Component({
  selector: 'page-add-coursework',
  templateUrl: 'add-coursework.html'
})
export class AddCourseworkPage {

  constructor(public navCtrl: NavController) {
  }
  
  nav_goToCourses(){
    this.navCtrl.push(CoursesPage)
  }
}
