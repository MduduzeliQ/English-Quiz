import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {DonePage} from '../done/done';
import { MathsPage } from '../maths/maths';

/**
 * Generated class for the EnglishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-english',
  templateUrl: 'english.html',
})
export class EnglishPage {
Q1:string;
Q2:string;
Q3:string;
Q4:string;
Q5:string;
score = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnglishPage');
  }
  NewMethod(){
  
    if (this.Q1 == "His"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q2 == "1994"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q3 == "Janusz Waluś"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q4 == "Maybe"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q5 == "Dr Robert Gallo"){
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
    this.navCtrl.push(DonePage)
    console.log(this.score);
  }
  else{
    const alert = this.alertCtrl.create({
      title: 'Failed!',
      message: 'Your score is less than 25pts', 
      buttons: ['Re-try']
    });
     alert.present();
     this.navCtrl.push(MathsPage)
    console.log(this.score)
  }
  }

}
