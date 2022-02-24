import { Component, Input } from '@angular/core';
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

  showOrHideListOfNews(): boolean {
    console.log("ciao")
    this.showHidden = !this.showHidden;
    return this.showHidden;
  }
}
