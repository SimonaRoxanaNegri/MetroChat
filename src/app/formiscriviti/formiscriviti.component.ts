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
  isShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  invio(form: NgForm) {
    this.isShown = !this.isShown;
    //console.log("Nome inserito è: " + form.controls['nome'].value);
    //console.log("Email inserita è: " + form.controls['email'].value);
  }

}
