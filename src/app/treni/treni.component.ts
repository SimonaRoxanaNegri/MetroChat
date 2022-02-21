import { Component } from '@angular/core';

@Component({
  selector: 'ca-treni',
  templateUrl: './treni.component.html',
  styleUrls: ['./treni.component.css']
})
export class TreniComponent {
  listametro = [
    { idt: 'ASD', linea: 'Rossa', numchatting: 32, tempo: 125000 },
    { idt: 'AKE', linea: 'Verde', numchatting: 29, tempo: 145000 },
    { idt: 'BFD', linea: 'Gialla', numchatting: 47, tempo: 155000 }
  ];
}

