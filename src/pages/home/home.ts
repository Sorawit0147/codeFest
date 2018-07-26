import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RoomDetailPage} from '../room-detail/room-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // roomDetail =[
  //   {roomType:'Delux Room',price:5000,detail:'เตียงคู่',img:'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  //   {roomType:'Superior Room',price:3000,detail:'เตียงคู่',img:'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  //   {roomType:'Standard Room',price:1500,detail:'เตียงเดี่ยว',img:'https://images.pexels.com/photos/271695/pexels-photo-271695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
  // ]
  roomDetail =[
    {roomType:'Delux Room',
    price:5000,
    detail:'1 เตียงคิงไซส์',
    view:'สระว่ายน้ำ',
    size:'72 ตร.ม./775 ตร.ฟ',
    bathroom:'ห้องอาบน้ำฝักบัวและอ่างอาบน้ำ',
    wifi:'ฟรี Wi-Fi',
    img1:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img2:'https://images.pexels.com/photos/280209/pexels-photo-280209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img3:'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    
    {roomType:'Superior Room',
    price:3500,
    detail:'1 เตียงใหญ่',
    view:'ทะเล',
    size:'38 ตร.ม./409 ตร.ฟ',
    bathroom:'ห้องอาบน้ำฝักบัวและอ่างอาบน้ำ',
    wifi:'ฟรี Wi-Fi',
    img1:'https://images.pexels.com/photos/237393/pexels-photo-237393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img2:'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    img3:'https://images.pexels.com/photos/105934/pexels-photo-105934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    
    {roomType:'Standard Room',
    price:3000,
    detail:'1 เตียงเดี่ยว',
    view:'สวน',
    size:'36 ตร.ม./388 ตร.ฟ.',
    bathroom:'ห้องอาบน้ำฝักบัว',
    wifi:'ฟรี Wi-Fi',
    img1:'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img2:'https://images.pexels.com/photos/271616/pexels-photo-271616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img3:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
  ]
  constructor(public navCtrl: NavController) {

  }
  sendDetail(roomData){
  this.navCtrl.push(RoomDetailPage,roomData);
}
}
