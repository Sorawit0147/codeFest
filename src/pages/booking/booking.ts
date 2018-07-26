import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{UserPage} from '../user/user';
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  dateCheckin ='1998-11-04T11:06Z';
  qtyDay:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }
logS(){
  console.log(this.qtyDay)
}
bookingFinish(){
  var status = true
    this.navCtrl.push(UserPage,status);
}


}
