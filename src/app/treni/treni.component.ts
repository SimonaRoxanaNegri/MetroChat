import { Router } from '@angular/router';
import { Metro } from '../model/metro.model';
import { Component, OnInit } from '@angular/core';
import { LISTAMETRO } from './../dati/metroremoti';


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
  trenipartiti: string;
  listametro: Metro[];
  now;
  //trenoselezionato?: Metro;
  constructor(private router: Router) {
    this.trenipartiti = '';
    this.listametro = [];
    this.now = new Date().getTime();
  }
  ngOnInit() {
    this.listametro = LISTAMETRO;
  }
  setMetro(id: string) {
    this.router.navigate(['inarrivo/dettaglio', id]);
  }
  partiti(id: string) {
    this.trenipartiti += "|" + id;
  }

}

