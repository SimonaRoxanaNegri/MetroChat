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
  constructor() {
  }
  ngOnInit(): void {
  }
  chiudiDettaglio() {
    this.idDettaglio.nativeElement.hidden = true;
  }
}
