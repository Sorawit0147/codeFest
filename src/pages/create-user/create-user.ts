import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
/**
 * Generated class for the CreateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {
  id:any;
  password:any;
  fname:any;
  lname:any;
  numphone:any;
  User=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserPage');
  }
createUser(){
   var data={id:this.id,
  password:this.password,fname:this.fname,lname:this.lname,numphone:this.numphone};
    this.User.push(data);
    // console.log(this.User);
    this.navCtrl.push(LoginPage);
  }
  check(checkUser){
    for(var i=0;i<this.User.length;i++){
      if(this.User[i].id.equal(checkUser.id)&&this.User[i].password==(checkUser.password)){
        console.log("login complete")
        console.log(this.User[i].id+" "+checkUser.id);
        
        
      }else{
        console.log("login fail")
      }
    }

  }
  log(){
    return '5555'
  }

}
