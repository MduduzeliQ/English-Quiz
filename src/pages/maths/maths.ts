import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {EnglishPage} from '../english/english';

import { PoliticsPage } from '../politics/politics';
/**
 * Generated class for the MathsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maths',
  templateUrl: 'maths.html',
})
export class MathsPage {
Q1:string;
Q2:string;
Q3:string;
Q4:string;
Q5:string;
score = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathsPage');
  }
  NewMethod(){
  
    if (this.Q1 == "2"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q2 == "X^2"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q3 == "4"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q4 == "6x + 4x"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q5 == "2x^2 + 8x + 10"){
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
      this.navCtrl.push(EnglishPage)
      console.log(this.score);
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Failed!',
        message: 'Your score is less than 25pts', 
        buttons: ['Re-try']
      });
       alert.present();
      this.navCtrl.push(PoliticsPage)
      console.log(this.score)
    }
    }

}
