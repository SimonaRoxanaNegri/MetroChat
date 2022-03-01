import { getLocaleDateFormat } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { News } from './../model/news.model';
@Component({
  selector: 'ca-listanews',
  templateUrl: './listanews.component.html',
  styleUrls: ['./listanews.component.css']
})

export class ListanewsComponent {

  listanews: News[] = [];
  @Input() user?: string;
  showHidden: boolean = false;
  today: Date;
  color: string;
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.listanews = [
      {
        id: 1,
        titolo: 'Titolo Notizia 1',
        descrizione: 'descrizione notizia 1'
      },
      {
        id: 2,
        titolo: 'Titolo Notizia 2',
        descrizione: 'descrizione notizia 2'
      },
    ];
    this.today = new Date();
    this.color = 'black';
    this.form = fb.group({
      'username': ['', Validators.required],
      'email': ['']
    });
  }

  dettaglio(id: number) {
    alert("id Notizia:" + id);
  }

  showOrHideListOfNews(): boolean {
    this.showHidden = !this.showHidden;
    return this.showHidden;
  }

  changeColor(field: HTMLSelectElement): string {
    if (field.value == '1')
      return this.color = 'red';
    else if (field.value == '2') {
      return this.color = 'blue'
    } else {
      return this.color = 'black'
    }
  }

  send(): void {
    if (!this.form.valid) {
      alert('compilare tutti i campi obbligatori!');
      return;
    }
    alert('registrazione avvenuta con successo!')
  }
}
