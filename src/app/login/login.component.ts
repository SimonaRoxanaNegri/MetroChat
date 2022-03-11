import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../model/login';
import { LoginService } from 'src/service/login.service';
@Component({
  selector: 'ca-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nome_modello;
  email_modello;
  datiLogin: Login;
  errormsg;
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  login(nome: string, email: string) {
    this.datiLogin = {
      'nome': nome,
      'email': email,
    };
    this.sendLoginDataObservable(this.datiLogin);
  }
  sendLoginDataObservable(dati: Login) {
    this.loginservice.sendLoginDataObservable(dati).subscribe(
      risp => this.datiLogin = risp,
      error => this.errormsg = error
    );
  }
}
