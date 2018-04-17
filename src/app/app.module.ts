import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginOrJoinPage } from '../pages/login-or-join/login-or-join';
import { LoginWithEmailPage } from '../pages/login-with-email/login-with-email';
import { JoinAuxiPage } from '../pages/join-auxi/join-auxi';
import { AcademicInformationPage } from '../pages/academic-information/academic-information';
import { VerifyUniversityEmailPage } from '../pages/verify-university-email/verify-university-email';
import { AddCourseworkPage } from '../pages/add-coursework/add-coursework';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { CoursesPage } from '../pages/courses/courses';
import { AccountEmailPage } from '../pages/account-email/account-email';
import { NewPasswordPage } from '../pages/new-password/new-password';
import { VerifyEmailPage } from '../pages/verify-email/verify-email';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';

import { ReactiveFormsModule} from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
    apiKey: "AIzaSyBE3CfwNDIXOag4H_GHd4AJKVrmUEUwyFg",
    authDomain: "io-nxed-auxi.firebaseapp.com",
    databaseURL: "https://io-nxed-auxi.firebaseio.com",
    projectId: "io-nxed-auxi",
    storageBucket: "io-nxed-auxi.appspot.com",
    messagingSenderId: "884061610986"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    LoginOrJoinPage,
    LoginWithEmailPage,
    JoinAuxiPage,
    AcademicInformationPage,
    VerifyUniversityEmailPage,
    AddCourseworkPage,
    TermsAndConditionsPage,
    PrivacyPolicyPage,
    CoursesPage,
    AccountEmailPage,
    NewPasswordPage,
    VerifyEmailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginOrJoinPage,
    LoginWithEmailPage,
    JoinAuxiPage,
    AcademicInformationPage,
    VerifyUniversityEmailPage,
    AddCourseworkPage,
    TermsAndConditionsPage,
    PrivacyPolicyPage,
    CoursesPage,
    AccountEmailPage,
    NewPasswordPage,
    VerifyEmailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}