import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Metro } from '../../../model/metro.model';
import { TreniService } from '../../../../service/treni.service';
import { Messaggio } from 'src/app/model/messaggio.model';
import { ChatService } from 'src/service/chat.service';

@Component({
  selector: 'ca-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
  idtreno: string;
  treno: Metro;
  errormsg;
  listachat: Messaggio[];
  chatmsg: Messaggio;

  constructor(
    private route: ActivatedRoute,
    private treniservice: TreniService,
    private chatservice: ChatService
  ) { }

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
  //costruisco l'oggetto messaggio
  invioMsg(testomsg: string) {
    this.chatmsg = {
      'idm': 0,
      'idt': this.idtreno,
      'idu': '99',
      'testo': testomsg
    };
    this.sendMsgObservable(this.chatmsg);
  }
  //attesa di risposta dell'api con l'oggetto Messaggio
  sendMsgObservable(msg: Messaggio) {
    this.chatservice.sendChatMsgObservable(msg)
      .subscribe(
        risp => this.listachat.push(risp[0]),
        error => this.errormsg = error
      );
  }



}
