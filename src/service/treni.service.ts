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

  // 2
  private apiGetUrl = 'http://www.dcopelli.it/test/angular/metro/';

  // 3
  constructor(private http: HttpClient) { }

  getListaMetro(): Metro[] {
    return LISTAMETRO;
  }

  getListaMetroObservable(): Observable<Metro[]> {
    return this.http.get<Metro[]>(this.apiGetUrl)
      .pipe(
        map(risposta => risposta['dati']),
        tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
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

  private handleErrorObs(error: any) {
    console.error('Si è verificato un errore', error);
    return throwError(() => new Error(error.message) || error);
  }

  /*   getPreferitiMetro(): Metro[] {
      // recupero la lista dei preferiti
      return;
    }
  
    setPreferitiMetro(id: string): boolean {
      // imposto la metro tra i preferiti
      return;
    } */
}