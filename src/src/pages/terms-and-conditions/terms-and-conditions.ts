import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Icon } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html',
})
export class TermsAndConditionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  sendTerms(){
    //Alert config
    let alert = this.alertCtrl.create({
      title: 'Email',
      subTitle: "Enter an email where you would like to recieve Auxi's terms and conditions",
      inputs:[{
        name: 'Email',
        placeholder:'steve.rogers@email.com',
      
      }],
      buttons: [{
        text:'Cancel',
        cssClass: 'cancel'
      },{
        text:'Submit',
        handler:email=>{
          console.log(email)
        }
      }]
    });

    //Present Alert
    alert.present();
  }

}
