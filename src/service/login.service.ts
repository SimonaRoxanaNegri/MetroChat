import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/login';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiPostUrl = 'https://www.dcopelli.it/test/angular/login/';

  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'text/plain' });

  constructor(private http: HttpClient) { }

  sendLoginDataObservable(obj: Login): Observable<Login> {

    return this.http.post<Login>(this.apiPostUrl,
      {
        nome: obj.nome,
        email: obj.email,
      },
      {
        headers: this.headers,
        responseType: 'text' as 'json'
      }
    ).pipe(
      map(risposta => { alert(risposta); return risposta }),
      //tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
      catchError(this.handleErrorObs)
    );

  }

  private handleErrorObs(error: any) {
    //console.error('Si è verificato un errore', error);
    return throwError(() => new Error(error.message) || error);
  }


}
