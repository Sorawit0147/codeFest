import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FoodAnddrinkPage}from '../food-anddrink/food-anddrink';


@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }
  showFood(){
    this.navCtrl.push(FoodAnddrinkPage);
  }
  

}
