import { Injectable } from '@angular/core';
import { LISTAMSG } from 'src/app/dati/messaggiremoti';
import { HttpParams } from '@angular/common/http';
import { Messaggio } from 'src/app/model/messaggio.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiGetUrl = 'http://www.dcopelli.it/test/angular/chat/';
  private apiPostUrl = 'http://www.dcopelli.it/test/angular/chat/send/';
  private apiPreferitiUrl = 'http://www.dcopelli.it/test/angular/chat/send/preferiti/';

  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'text/plain' });

  constructor(private http: HttpClient) { }

  getListaChat(): Messaggio[] {
    return LISTAMSG;
  }

  getListaChatObservable(idt: string): Observable<Messaggio[]> {
    const param = new HttpParams().set('idt', idt).set('idu', '99');
    return this.http.get<Messaggio[]>(
      this.apiGetUrl,
      {
        params: param
      }
    ).pipe(
      map(risposta => risposta['dati']),
      //tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
      catchError(this.handleErrorObs)
    );
  }

  sendChatMsgObservable(obj: Messaggio): Observable<Messaggio> {
    return this.http.post<Messaggio[]>(this.apiPostUrl,
      {
        idtreno: obj.idt,
        idutente: obj.idu,
        messaggio: obj.testo,
      },
      {
        headers: this.headers,
        responseType: 'text' as 'json'
      }
    )
      .pipe(
        map(risposta => risposta['dati']),
        tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
        catchError(this.handleErrorObs)
      );
  }

  setChatPreferiti(idu: string, idm: string, stato: number): Observable<Number> {
    return this.http.put<Number>(this.apiPreferitiUrl,
      {
        idutente: idu,
        idmessaggio: idm,
        stato: stato
      },
      {
        headers: this.headers,
        responseType: 'text' as 'json'
      })
      .pipe(
        map(risposta => risposta['stato']),
        tap(dati => console.log('Dati recuperati')),
        catchError(this.handleErrorObs)
      );
  }

  // 5) GESTIONE DEGLI ERRORI COMUNICAZIONE via HTTP
  private handleErrorObs(error: any) {
    console.error('Si è verificato un errore', error);
    return throwError(() => new Error(error.message) || error);
  }
}
