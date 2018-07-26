import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodAnddrinkPage } from './food-anddrink';

@NgModule({
  declarations: [
    FoodAnddrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodAnddrinkPage),
  ],
})
export class FoodAnddrinkPageModule {}
