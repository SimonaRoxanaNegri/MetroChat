import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Metro } from '../../../model/metro.model';
import { TreniService } from '../../../../service/treni.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
  idtreno!: string;
  treno!: Metro;
  errormsg;

  constructor(private route: ActivatedRoute, private treniservice: TreniService) {
  }
  ngOnInit() {
    this.idtreno = this.route.snapshot.paramMap.get('id')!;
    //this.getDettaglioMetro(this.idtreno);
    this.getDettaglioMetroObservable(this.idtreno);
  }
  getDettaglioMetroObservable(idt: string) {
    this.treniservice.getDettaglioMetroObservable(idt)
      .subscribe(
        p => this.treno = p[0],
        error => this.errormsg = error);
  }

  getDettaglioMetro(idtr: string) {
    //this.treno = this.treniservice.getDettaglioMetro(idtr);
  }

}
