import { LISTAMETRO } from './../dati/metroremoti';
import { Component, OnInit } from '@angular/core';
import { Metro } from '../model/metro.model';

@Component({
  selector: 'ca-treni',
  templateUrl: './treni.component.html',
  styleUrls: ['./treni.component.css']
})
export class TreniComponent implements OnInit {
  /*  listametro = [
     { idt: 'ASD', linea: 'Rossa', numchatting: 32, tempo: 125000 },
     { idt: 'AKE', linea: 'Verde', numchatting: 29, tempo: 145000 },
     { idt: 'BFD', linea: 'Gialla', numchatting: 47, tempo: 155000 }
   ]; */
  listametro: Metro[];
  constructor() {
    this.listametro = [];
  }
  ngOnInit() {
    this.listametro = LISTAMETRO;
  }
}

