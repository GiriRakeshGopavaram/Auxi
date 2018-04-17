import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html',
})
export class PrivacyPolicyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController) {
  }

  

  sendPrivacyPolicies(){
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
        handler:data=>{
          console.log(data)
        }
      }]
    });
    alert.present();
  }
}
