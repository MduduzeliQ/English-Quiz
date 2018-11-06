import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PoliticsPage } from '../politics/politics';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the FifaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifa',
  templateUrl: 'fifa.html',
})
export class FifaPage {
Q1:string;
Q2:string;
Q3:string;
Q4:string;
Q5:string;
score = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifaPage');
  }
  NewMethod(){

    if (this.Q1 == "Leo Messi"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q2 == "Spain"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q3 == "Pele"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q4 == "Pele"){
    this.score = this.score + 5
    console.log(this.score);
    }
    if (this.Q5 == "Messi"){
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
    this.navCtrl.push(PoliticsPage)
    console.log(this.score);
  }
  else{
    const alert = this.alertCtrl.create({
      title: 'Failed!',
      message: 'Your score is less than 25pts',
      buttons: ['Re-try']
    });
    alert.present();
    this.navCtrl.push(WelcomePage)
    console.log(this.score)
  }
  
  }
}
