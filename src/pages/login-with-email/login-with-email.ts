import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import {TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';
import {PrivacyPolicyPage} from '../privacy-policy/privacy-policy';
import { AccountEmailPage } from '../account-email/account-email';

@Component({
  selector: 'page-login-with-email',
  templateUrl: 'login-with-email.html'
})
export class LoginWithEmailPage {

  //Properties
  public loginForm:FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;

  constructor(public navCtrl: NavController, _form:FormBuilder) {
    this.loginForm = _form.group({
      email:['',Validators.compose([Validators.maxLength(40), Validators.pattern(".+\@.+\..+")])],
      password: ['', Validators.required]
    })

    this.email = this.loginForm.controls['email']
    this.password = this.loginForm.controls['password']
  }
  

  nav_goToTerms(){
    this.navCtrl.push(TermsAndConditionsPage); 
  }
  
  nav_goToPrivacyPolicy(){
    this.navCtrl.push(PrivacyPolicyPage); 
  }

  nav_goToAccountEmail(){
    this.navCtrl.push(AccountEmailPage); 
  }
}
