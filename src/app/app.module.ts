import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {ServicePage} from '../pages/service/service';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {RoomDetailPage} from '../pages/room-detail/room-detail';
import {UserPage} from '../pages/user/user';
import {FoodAnddrinkPage} from '../pages/food-anddrink/food-anddrink';
import {BookingPage} from '../pages/booking/booking';
import {QrCodePage} from '../pages/qr-code/qr-code'
import {CreateUserPage} from '../pages/create-user/create-user';
import {LoginPage} from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    ServicePage,
    MyApp,
    HomePage,
    TabsPage,
    UserPage,
    RoomDetailPage,
    FoodAnddrinkPage,
    BookingPage,
    QrCodePage,
    CreateUserPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ServicePage,
    MyApp,
    HomePage,
    TabsPage,
    UserPage,
    RoomDetailPage,
    FoodAnddrinkPage,
    BookingPage,
    QrCodePage,
    CreateUserPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
