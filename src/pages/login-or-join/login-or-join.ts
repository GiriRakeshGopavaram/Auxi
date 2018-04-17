import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginWithEmailPage } from '../login-with-email/login-with-email';
import { JoinAuxiPage } from '../join-auxi/join-auxi';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';

@Component({
  selector: 'page-login-or-join',
  templateUrl: 'login-or-join.html'
})
export class LoginOrJoinPage {

  //Properties
  userProfile: any = null;
  twitterProvider = new firebase.auth.TwitterAuthProvider();
  googleProvider = new firebase.auth.GoogleAuthProvider();
  fbProvider = new firebase.auth.FacebookAuthProvider();

  //Constructor
  constructor(public navCtrl: NavController, private googleplus:GooglePlus) {
    
  }
  
  //Navigation
  nav_goToJoinAuxi(params){
    if (!params) params = {};
    this.navCtrl.push(JoinAuxiPage);
  }
  
  nav_goToLoginWithEmail(params){
    if (!params) params = {};
    this.navCtrl.push(LoginWithEmailPage);
  }

  //FB login
  loginWithFb(){
    this.loginWithPopUp(this.fbProvider);
    console.log(this.fbProvider)
    this.getRedirectResult();
  }

  //Google Plus login
  loginWithGoogle()
  {
    this.loginWithPopUp(this.googleProvider);
    this.getRedirectResult();
  }

  //Twitter login
  loginInWithTwitter(){
    this.loginWithPopUp(this.twitterProvider);
    this.getRedirectResult();
  }

  //Sign In with pop-up
  loginWithPopUp(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("ghjuk")
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    // firebase.auth().signInWithRedirect(provider);
  }
  //Redirect Result
   getRedirectResult(){
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log(token);
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  }
}
