import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{CreateUserPage}from '../create-user/create-user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  id:any;
  password:any;
  checkUser=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private user:CreateUserPage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    var data={id:this.id,password:this.password}
    this.checkUser.push(data);
    
    this.user.check(this.checkUser);
  }
  
  createUser(){
    this.navCtrl.push(CreateUserPage);
  }
}
