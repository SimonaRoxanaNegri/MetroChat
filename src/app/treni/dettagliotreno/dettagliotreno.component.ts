import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Metro } from 'src/app/model/metro.model';

@Component({
  selector: 'ca-dettagliotreno',
  templateUrl: './dettagliotreno.component.html',
  styleUrls: ['./dettagliotreno.component.css']
})
export class DettagliotrenoComponent implements OnInit {
  @Input() treno?: Metro;
  @ViewChild('idDettaglio') idDettaglio!: ElementRef;
  trenogiallo: string = "Treno Giallo";
  trenorosso: string = "Treno Rosso";

  constructor() {
  }
  ngOnInit(): void {
  }

  chiudiDettaglio(): boolean {
    let dettaglio = this.idDettaglio;
    if (dettaglio)
      dettaglio.nativeElement.hidden = true;
    return dettaglio.nativeElement.hidden = true;
  }
}
