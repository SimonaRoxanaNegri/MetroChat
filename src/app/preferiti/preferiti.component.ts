import { Component, Input, OnInit } from '@angular/core';
import { Messaggio } from 'src/app/model/messaggio.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ChatService } from 'src/service/chat.service';
import { Metro } from '../model/metro.model';
@Component({
  selector: 'ca-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  idutente: string;
  listachat: Messaggio[];
  errormsg;
  msg: Messaggio;
  listametro: Metro[];

  constructor(
    private route: ActivatedRoute,
    private chatservice: ChatService
  ) { }

  ngOnInit() {
    this.idutente = this.route.snapshot.paramMap.get('id');
    // this.getDettaglioChatMsgListaPreferiti(this.idutente);
    this.getChatMsgListaPreferitiObservable();
  }

  getChatMsgListaPreferitiObservable() {
    this.chatservice.getChatMsgListaPreferiti()
      .subscribe(
        risp => this.listachat = risp,
        error => this.errormsg = error);
  }

  /*   getDettaglioChatMsgListaPreferiti(idu: string) {
      this.chatservice.getDettaglioChatMsgListaPreferiti(idu)
        .subscribe(
          risp => this.msg = risp[0],
          error => this.errormsg = error);
    } */


}
