import { Component, OnInit } from '@angular/core';
import { Store } from '../../Modules/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends Store {
  constructor() {
    super();
  }
  Store = new Store();
}
