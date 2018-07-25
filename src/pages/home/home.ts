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
    detail:'ห้องพักแบบดีลักซ์นั้น ให้พื้นที่ภายในห้องที่กว้างใหญ่ เหมาะสำหรับการเข้าพักทั้งแบบเดี่ยวและคู่ อีกทั้งยังมีระเบียงไว้สำหรับนั่งพักผ่อนคลายอีกด้วย',
    bathroom:'ห้องน้ำในตัวแบบฝักบัว',
    refrig:'ตู้เย็น',
    safe:'ตู้นิรภัย',
    hairdryer:'ไดรเป่าผม',
    phone:'โทรศัพท์',
    tv:'ทีวีดาวเทียม พร้อมช่องสัญญาณไทย และต่างประเทศ',
    air:'เครื่องปรับอากาศ',
    hotpot:'กาน้ำร้อน',
    drink:'บริการ ชา กาแฟ ฟรีภายในห้อง',
    water:'บริการน้ำดื่ม ฟรีภายในห้อง',
    img:'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    
    {roomType:'Superior Room',
    price:3000,
    detail:'ห้องพักแบบซูพีเรีย เหมาะสำหรับการพักทั้งแบบเดี่ยว และแบบคู่ ที่ให้พื้นที่ภายในห้องที่มากกว่าในแบบมาตรฐาน',
    bathroom:'ห้องน้ำในตัวแบบฝักบัว',
    refrig:'ตู้เย็น',
    safe:'ตู้นิรภัย',
    hairdryer:'ไดรเป่าผม',
    phone:'โทรศัพท์',
    tv:'ทีวีดาวเทียม พร้อมช่องสัญญาณไทย และต่างประเทศ',
    air:'เครื่องปรับอากาศ',
    hotpot:'กาน้ำร้อน',
    drink:'บริการ ชา กาแฟ ฟรีภายในห้อง',
    water:'บริการน้ำดื่ม ฟรีภายในห้อง',
    img:'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    
    {roomType:'Standard Room',
    price:1500,
    detail:'ห้องพักแบบมาตรฐาน เป็นห้องพักขนาดเริ่มต้นของโรงแรม และมีสิ่งอำนวยความสะดวกภายในห้องพักดังนี้',
    bathroom:'ห้องน้ำในตัวแบบฝักบัว',
    refrig:'ตู้เย็น',
    safe:'ตู้นิรภัย',
    hairdryer:'ไดรเป่าผม',
    phone:'โทรศัพท์',
    tv:'ทีวีดาวเทียม พร้อมช่องสัญญาณไทย และต่างประเทศ',
    air:'เครื่องปรับอากาศ',
    hotpot:'กาน้ำร้อน',
    drink:'บริการ ชา กาแฟ ฟรีภายในห้อง',
    water:'บริการน้ำดื่ม ฟรีภายในห้อง',
    img:'https://images.pexels.com/photos/271695/pexels-photo-271695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
  ]
  constructor(public navCtrl: NavController) {

  }
test(roomData){
  this.navCtrl.push(RoomDetailPage,roomData);
}
}
