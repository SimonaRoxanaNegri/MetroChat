import { Component } from '@angular/core';

@Component({
  selector: 'ca-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent {
  link_menu1: string;
  link_menu2: string;
  link_menu3: string;
  titleApp: string = 'Metrochat';
  constructor() {
    this.link_menu1 = 'In arrivo';
    this.link_menu2 = 'Preferiti';
    this.link_menu3 = 'Login';
  }
}
