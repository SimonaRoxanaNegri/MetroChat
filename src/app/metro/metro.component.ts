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
  @Input() datiIn!: Metro;
  @Input() ora!: number;
  @Output() inPartenza = new EventEmitter<string>();

  //stato!: Object;
  orapartenza!: number;
  attesa!: number;

  constructor() {
  }
  ngOnInit() {
    //in millesecondi da Unix time
    this.orapartenza = this.datiIn.tempo;
    //tempo mancante alla partenza
    this.attesa = this.orapartenza - this.ora;
    let x = setInterval(() => {
      this.attesa -= 1000;
      if (this.attesa <= 0) {
        //blocco il timer e mando l'evento in uscita
        clearInterval(x);
        //notifico il cambio di dato passando l'id del treno
        this.inPartenza.emit(this.datiIn.idt);
        //modifico lo stato di visualizzazione del componente
        //this.stato = { 'display': 'none' };
      }
    }, 1000);
  }

}
