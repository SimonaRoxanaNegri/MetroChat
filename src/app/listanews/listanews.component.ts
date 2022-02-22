import { Component } from '@angular/core';
import { News } from './../model/news.model';
@Component({
  selector: 'ca-listanews',
  templateUrl: './listanews.component.html',
  styleUrls: ['./listanews.component.css']
})

export class ListanewsComponent {

  listanews: News[] = [];
  constructor() {
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
  }

  dettaglio(id: number) {
    alert("id Notizia:" + id);
  }
}
