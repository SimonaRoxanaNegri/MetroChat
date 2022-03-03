import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  mostramsg = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostraMsg() {
    this.mostramsg = true;
  }
  nascondiMsg() {
    this.mostramsg = false;
  }

}
