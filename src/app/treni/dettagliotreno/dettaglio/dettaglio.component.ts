import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Metro } from '../../../model/metro.model';
import { TreniService } from '../../../../service/treni.service';
import { Messaggio } from 'src/app/model/messaggio.model';
import { ChatService } from 'src/service/chat.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
  idtreno!: string;
  treno!: Metro;
  errormsg;
  listachat: Messaggio[];

  constructor(private route: ActivatedRoute, private treniservice: TreniService, private chatservice: ChatService) {
  }
  ngOnInit() {
    this.idtreno = this.route.snapshot.paramMap.get('id');
    this.getDettaglioMetroObservable(this.idtreno);
    this.getListChatObservable(this.idtreno);
  }

  getListChatObservable(idt: string) {
    this.chatservice.getListaChatObservable(idt)
      .subscribe(
        risp => this.listachat = risp,
        error => this.errormsg = error);
  }

  getDettaglioMetroObservable(idt: string) {
    this.treniservice.getDettaglioMetroObservable(idt)
      .subscribe(
        risp => this.treno = risp[0],
        error => this.errormsg = error);
  }

  getDettaglioMetro(idtr: string) {
    this.treno = this.treniservice.getDettaglioMetro(idtr);
  }

}
