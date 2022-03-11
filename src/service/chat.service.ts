import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Messaggio } from 'src/app/model/messaggio.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Metro } from 'src/app/model/metro.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiGetUrl = 'http://www.dcopelli.it/test/angular/chat/';
  private apiPostUrl = 'http://www.dcopelli.it/test/angular/chat/send/';
  private apiPreferitiUrl = 'http://www.dcopelli.it/test/angular/chat/send/preferiti/';
  private apiDeleteUrl = this.apiGetUrl;
  private apiListaPreferitiUrl = 'https://www.dcopelli.it/test/angular/chat/preferiti/';

  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'text/plain' });

  constructor(private http: HttpClient) { }

  getListaChatObservable(idt: string): Observable<Messaggio[]> {

    const param = new HttpParams().set('idt', idt).set('idu', '99');
    return this.http.get<Messaggio[]>(
      this.apiGetUrl,
      {
        params: param
      }
    ).pipe(
      map(risp => { console.log(risp['dati']); return risp['dati'] }),
      //tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
      catchError(this.handleErrorObs)
    );
  }

  deleteChatMsgObservable(idm: Messaggio): Observable<Messaggio> {
    const param = new HttpParams().set('idm', JSON.stringify(idm));
    return this.http.delete<Messaggio>(
      this.apiDeleteUrl,
      {
        params: param
      }
    ).pipe(
      map(risp => { console.log(risp['dati']); return risp['dati'] }),
      //tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
      catchError(this.handleErrorObs)
    );
  }

  updateChatMsgObservable(idu: string, idm: string, testo: string): Observable<Messaggio> {
    return this.http.put<Messaggio>(this.apiDeleteUrl,
      {
        idutente: idu,
        idmessaggio: idm,
        testo: testo
      },
      {
        headers: this.headers,
        responseType: 'text' as 'json'
      })
      .pipe(
        map(risposta => risposta['dati']),
        tap(dati => console.log('Dati recuperati')),
        catchError(this.handleErrorObs)
      );
  }

  //invio dei dati Messaggio al server
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
    ).pipe(
      map(risposta => risposta['dati']),
      //tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
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
        //tap(dati => console.log('Dati recuperati')),
        catchError(this.handleErrorObs)
      );
  }

  getChatMsgListaPreferiti(): Observable<Messaggio[]> {

    return this.http.get<Messaggio[]>(
      'http://www.dcopelli.it/test/angular/chat/preferiti/' + '?idu=' + '99')
      .pipe(
        map(risp => { console.log(risp['dati']); return risp['dati'] }),
        tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
        catchError(this.handleErrorObs)
      );
  }

  /*   getDettaglioChatMsgListaPreferiti(idu: string): Observable<Messaggio> {
      return this.http.get<Messaggio>(this.apiListaPreferitiUrl + '?idu=' + idu)
        .pipe(
          map(risp => { console.log(risp['dati']); return risp['dati'] }),
          tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
          catchError(this.handleErrorObs)
        );
    }
   */
  // 5) GESTIONE DEGLI ERRORI COMUNICAZIONE via HTTP
  private handleErrorObs(error: any) {
    console.error('Si è verificato un errore', error);
    return throwError(() => new Error(error.message) || error);
  }
}
