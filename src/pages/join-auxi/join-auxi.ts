import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcademicInformationPage } from '../academic-information/academic-information';
import { VerifyUniversityEmailPage } from '../verify-university-email/verify-university-email';
import { AddCourseworkPage } from '../add-coursework/add-coursework';
import {TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';
import {PrivacyPolicyPage} from '../privacy-policy/privacy-policy';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'page-join-auxi',
  templateUrl: 'join-auxi.html'
})
export class JoinAuxiPage {

  //Properties
  public joinForm:FormGroup;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public mobile: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public confirmPassword: AbstractControl;

  ///Initializer
  constructor(public navCtrl: NavController, _form:FormBuilder) {
    this.joinForm = _form.group({
      firstName : ['',Validators.compose([Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$")])],
      lastName: ['',Validators.compose([Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$")])],
      email:['',Validators.compose([Validators.maxLength(40), Validators.pattern(".+\@.+\..+")])],
      mobile:['',Validators.compose([Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")])],
      password: ['', Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")],
      confirmPassword: ['', Validators.required]
    },
    {validator: this.matchingPasswords('password', 'confirmPassword')});

    this.firstName = this.joinForm.controls['firstName']
    this.lastName = this.joinForm.controls['lastName']
    this.email = this.joinForm.controls['email']
    this.mobile = this.joinForm.controls['mobile']
    this.password = this.joinForm.controls['password']
    this.confirmPassword = this.joinForm.controls['confirmPassword']

  }

  //Function to check if passwords match
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
          
    return (joinForm: FormGroup): {[key: string]: any} => {
      let password = joinForm.controls[passwordKey];
      let confirmPassword = joinForm.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        console.log("Not matching")
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  //Navigation
  nav_goToAcademicInformation(params){
    if(!params){
    }
    this.navCtrl.push(AcademicInformationPage, params); 
  }

  nav_goToTerms(){
    this.navCtrl.push(TermsAndConditionsPage); 
  }
  
  nav_goToPrivacyPolicy(){
    this.navCtrl.push(PrivacyPolicyPage); 
  }
}
