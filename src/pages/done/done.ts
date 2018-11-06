import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the DonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-done',
  templateUrl: 'done.html',
})
export class DonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonePage');
  }
NewMethod(){
  const alert = this.alertCtrl.create({
    title: 'Congradulations!!!',
    subTitle: 'we are looking forward to see you in next level next year.',
    buttons: ['OK']
  });
  alert.present();
this.navCtrl.push(HomePage)
}
}
