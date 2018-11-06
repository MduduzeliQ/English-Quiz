import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Name:string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  
 Welcome(){
if (this.Name == undefined){
const alert = this.alertCtrl.create({
  title: 'Empty Space!',
  subTitle: 'Please enter your name!',
  buttons: ['Enter Name']
});
alert.present();
}
  else{
    const alert = this.alertCtrl.create({
      title: 'Logged In!',
      subTitle: 'Successfully logged in!',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.push(WelcomePage)
    console.log(this.Name)
 }
 }
}
