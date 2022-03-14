import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ca-formiscriviti',
  templateUrl: './formiscriviti.component.html',
  styleUrls: ['./formiscriviti.component.css']
})
export class FormiscrivitiComponent implements OnInit {
  nome_modello;
  email_modello;
  password_modello;
  constructor() { }

  ngOnInit(): void {
  }

  invio(form: NgForm) {
    alert("Registrazione effettuata con successo!");
    //console.log("Nome inserito è: " + form.controls['nome'].value);
    //console.log("Email inserita è: " + form.controls['email'].value);
  }

}
