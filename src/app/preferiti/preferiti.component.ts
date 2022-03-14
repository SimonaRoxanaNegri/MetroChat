import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Messaggio } from 'src/app/model/messaggio.model';
import { ChatService } from 'src/service/chat.service';
import { Metro } from '../model/metro.model';
import { MmssPipe } from '../pipe/mmss.pipe';
@Component({
  selector: 'ca-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  listachat: Messaggio[];
  errormsg;
  listametro: Metro[];
  msg: Messaggio;
  nomeUtente: string;
  dataIscrizione;
  bio: string;

  constructor(
    private chatservice: ChatService,
  ) {
    this.nomeUtente = 'Martina';
    this.msg = new Messaggio(null, '', '99', '');
    this.dataIscrizione = new Date(2022, 1, 21);
    this.bio = 'Mi chiamo Martina! Sono una freelancer nell\'area assicurativa.' +
      ' Nel tempo libero mi piace viaggiare, leggere, guardare serie tv e ascoltare la musica.';
  }

  ngOnInit() {
    this.getChatMsgListaPreferitiObservable();

    var dataDefault = this.dataIscrizione;
    var year = dataDefault.getFullYear();
    var mes = dataDefault.getMonth();
    var dia = dataDefault.getDate();
    console.log(this.msg)
    this.dataIscrizione = dia + "/" + mes + "/" + year;
  }

  getChatMsgListaPreferitiObservable() {
    this.chatservice.getChatMsgListaPreferiti()
      .subscribe(
        risp => this.listachat = risp,
        error => this.errormsg = error);
  }

}
