import { Metro } from '../model/metro.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreniService } from './../../service/treni.service';


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
  trenipartiti: string;
  now: number;
  errormsg;
  //trenoselezionato?: Metro;
  constructor(private router: Router, private treniservice: TreniService) {
    this.trenipartiti = '';
    this.listametro = [];
    this.now = new Date().getTime();
  }
  ngOnInit() {
    this.getListaMetroObservable();
    //this.listametro = this.treniservice.getListaMetro();
  }

  getListaMetroObservable() {
    this.treniservice.getListaMetroObservable()
      .subscribe(
        p => this.listametro = p,
        error => this.errormsg = error
      );
  }

  setMetro(id: string) {
    this.router.navigate(['inarrivo/dettaglio', id]);
  }
  partiti(id: string) {
    this.trenipartiti += '|' + id;
  }

}

