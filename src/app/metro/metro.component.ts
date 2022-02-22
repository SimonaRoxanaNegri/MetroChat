import { Component, Input, OnInit } from '@angular/core';
import { Metro } from '../model/metro.model';

@Component({
  selector: 'ca-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {
  //proprietà dataIn come d'ingresso
  @Input() datiIn!: Metro;
  constructor() {

  }
  ngOnInit() {

  }

}
