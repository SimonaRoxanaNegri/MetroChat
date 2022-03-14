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
  password_modello;
  datiLogin: Login;
  registrazione: string = "Registrati";
  errormsg;
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  login(nome: string, password: string) {
    this.datiLogin = {
      'nome': nome,
      'password': password
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
