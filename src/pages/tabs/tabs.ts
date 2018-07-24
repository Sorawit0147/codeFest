import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ServicePage } from '../service/service';
import {UserPage} from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ServicePage;
  tab3Root = UserPage;

  constructor() {

  }
}
