import { Injectable } from '@angular/core';
import { Metro } from 'src/app/model/metro.model';
import { LISTAMETRO } from 'src/app/dati/metroremoti';

import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreniService {

  private apiGetUrl = 'http://www.dcopelli.it/test/angular/metro/';

  constructor(private http: HttpClient) { }

  getListaMetroObservable(): Observable<Metro[]> {
    return this.http.get<Metro[]>(this.apiGetUrl)
      .pipe(
        map(risposta => risposta['dati']),
        //tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
        catchError(this.handleErrorObs)
      );
  }

  getDettaglioMetroObservable(idt: string): Observable<Metro> {
    return this.http.get<Metro>(this.apiGetUrl + '?idt=' + idt)
      .pipe(
        map(risposta => risposta['dati']),
        catchError(this.handleErrorObs)
      );
  }

  getDettaglioMetro(idt: string): Metro {
    var metro;
    for (let i = 0; i < LISTAMETRO.length; i++) {
      if (LISTAMETRO[i].idt == idt) {
        metro = LISTAMETRO[i];
        return metro
      }
    } return metro;
  }

  private handleErrorObs(error: any) {
    return throwError(() => new Error(error.message) || error);
  }

}