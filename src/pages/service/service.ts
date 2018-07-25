import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
  
  testRadioOpen = false;
  testRadioResult: any;

    foods=[
      {name:"ผัดไทย",price:"50",img:"https://images.pexels.com/photos/46247/thai-food-noodle-fried-noodles-meal-46247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",foodSt:false},
      {name:"ส้มตำ",price:"45",img:"https://images.pexels.com/photos/162993/food-thai-spicy-asian-162993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",foodSt:false},
      {name:"ข้าวผัด",price:"55",img:"https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",foodSt:false},
      
    ];
    beverages=[                    
      {name:"เลม่อน",price:"50",img:"https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",foodSt:false},
      {name:"คาปูชิโน่",price:"40",img:"https://images.pexels.com/photos/414720/pexels-photo-414720.jpeg?auto=compress&cs=tinysrgb&h=650&w=9400",foodSt:false},
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
   
  }

  logData(){
    // console.log(this.food1,this.food2,this.food3)
    console.log(this.foods,this.beverages)
  }
  getService(typeService){
    if(typeService=='drink'){
      return this.beverages;
    }else{
      return this.foods;
    }
  }

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Please choose room');

    alert.addInput({
      type: 'radio',
      label: 'Room 39',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Room 3.50',
      value: 'green'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

}
