import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QrCodePage} from '../qr-code/qr-code';
import {LoginPage} from '../login/login';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  hindTab = true;
  hindLogin = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    if(this.navParams.data==true){
      this.swapTag2()
    }
     
  }

  swapTag1(){
    this.hindTab = true;
    this.hindLogin = false;
  }
  swapTag2(){
    this.hindTab = false;
    this.hindLogin = true;
  }
  sendQrPage(roomNumber){
    this.navCtrl.push(QrCodePage,roomNumber);
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
}
