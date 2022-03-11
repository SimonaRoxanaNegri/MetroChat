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

