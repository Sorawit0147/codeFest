import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {
  createdCode = null;
  qrIdRoom = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
    this.qrIdRoom = 'userid0012'+this.navParams.data;
    this.genQr()
  }

  genQr(){
    this.createdCode = this.qrIdRoom;
  }

}
