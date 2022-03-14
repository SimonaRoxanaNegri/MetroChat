//import { Time } from '@angular/common';
import { Metro } from '../model/metro.model';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'ca-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {
  //proprietà dataIn come d'ingresso
  @Input() datiIn: Metro;
  @Input() ora: number;
  @Output() inPartenza = new EventEmitter<string>();

  orapartenza: number;
  attesa: number;

  constructor() { }

  ngOnInit() {
    //in millesecondi da Unix time
    this.orapartenza = this.datiIn.tempo;
    this.attesa = this.orapartenza - this.ora;

    let interval = setInterval(() => {
      this.attesa -= 1000;
      if (this.attesa <= 0) {
        clearInterval(interval);
        this.attesa = 0;
      }
    }, 1000);
  }
}
