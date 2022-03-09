import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/messaggio.model copy';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiPostUrl = 'https://www.dcopelli.it/test/angular/login/';

  private headers: HttpHeaders = new HttpHeaders({});

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json'),
      this.headers.append('Access-Control-Allow-Headers', 'Content-Type'),
      this.headers.append('Access-Control-Allow-Origin', '*'),
      this.headers.append('Access-Control-Allow-Methods', 'POST'),
      this.headers.append('Authorization', 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3')
  }

  sendLoginDataObservable(obj: Login): Observable<Login> {
    return this.http.post<Login>(this.apiPostUrl,
      {
        nome: obj.nome,
        email: obj.email,
      },
      { headers: this.headers }
    )
      .pipe(
        map(risposta => risposta['']),
        tap(dati => console.log('Dati recuperati')), // messaggio di verifica nella console
        catchError(this.handleErrorObs)
      );
  }

  private handleErrorObs(error: any) {
    console.error('Si è verificato un errore', error);
    return throwError(() => new Error(error.message) || error);
  }

}
