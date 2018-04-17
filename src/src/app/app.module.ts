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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ReactiveFormsModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}