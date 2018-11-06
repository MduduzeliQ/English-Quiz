import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FifaPage} from '../fifa/fifa';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  Q1:string;
  Q2:string;
  Q3:string;
  Q4:string;
  Q5:string;
  Name: string;

  score = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
NewMethod(){

  if (this.Q1 == "Steve Jobs"){
  this.score = this.score + 5
  console.log(this.score);
  }
  if (this.Q2 == "Alexandre Bells"){
  this.score = this.score + 5
  console.log(this.score);
  }
  if (this.Q3 == "Bjarne Stroustrup"){
  this.score = this.score + 5
  console.log(this.score);
  }
  if (this.Q4 == "Jan Koum"){
  this.score = this.score + 5
  console.log(this.score);
  }
  if (this.Q5 == "Kevin Systrom"){
  this.score = this.score + 5
  console.log(this.score);
}  
if(this.score == 25){
  const alert = this.alertCtrl.create({
    title: 'Progress!',
    subTitle: 'Congradulation you scored 25pts, Please Proceed!',
    buttons: ['OK']
  });
  alert.present();
  this.navCtrl.push(FifaPage);
  console.log(this.score);
}
else{
 const alert = this.alertCtrl.create({
   title: 'Failed!',
   message: 'Your score is less than 25pts',
   buttons: ['Re-try']
 });
  alert.present();
  this.navCtrl.push(HomePage)
}
}



}
