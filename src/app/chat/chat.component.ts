import { Component, OnInit, Input } from '@angular/core';
import { Messaggio } from './../model/messaggio.model';
import { ChatService } from 'src/service/chat.service';

@Component({
  selector: 'ca-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() msgIn: Messaggio;
  errormsg;

  constructor(private chatservice: ChatService) {
  }

  ngOnInit() {
  }

  setMsgPreferiti(idm, newstato) {
    const statoprec = this.msgIn.stato;
    this.msgIn.stato = newstato;
    this.chatservice.setChatPreferiti('99', idm, newstato)
      .subscribe(risp => {
        if (risp != newstato) {
          alert('Errore');
          // ritorno allo stato precedente
          this.msgIn.stato = statoprec;
        } else {
          alert('Ok');
          this.msgIn.stato = newstato
        }
      },
        error => this.errormsg = error);
  }

}
