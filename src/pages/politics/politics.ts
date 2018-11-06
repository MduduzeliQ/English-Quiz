import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MathsPage } from '../maths/maths';
import { FifaPage } from '../fifa/fifa';
/**
 * Generated class for the PoliticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politics',
  templateUrl: 'politics.html',
})
export class PoliticsPage {
Q1:string;
Q2:string;
Q3:string;
Q4:string;
Q5:string;
score = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticsPage');
  }

NewMethod(){
  if (this.Q1 == "Thabo Mbeki"){
  this.score = this.score + 5
  console.log(this.score);
  }
  if (this.Q2 == "Barack Obama"){
  this.score = this.score + 5
  console.log(this.score);
  }
  if (this.Q3 == "Fuad Masum"){
  this.score = this.score + 5
  console.log(this.score);
  }
  if (this.Q4 == "32"){
  this.score = this.score + 5
  console.log(this.score);
  }
  if (this.Q5 == "Musa Maimane"){
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
  this.navCtrl.push(MathsPage)
  console.log(this.score);
}
else{
  const alert = this.alertCtrl.create({
    title: 'Failed!',
    message: 'Your score is less than 25pts', 
    buttons: ['Re-try']
  });
   alert.present();
  this.navCtrl.push(FifaPage)
  console.log(this.score)
}
}
}
