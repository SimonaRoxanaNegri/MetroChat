import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-listanews',
  templateUrl: './listanews.component.html',
  styleUrls: ['./listanews.component.css']
})
export class ListanewsComponent {

  listanews = [
    { titolo: 'Titolo Notizia 1', descrizione: 'descrizione notizia 1' },
    { titolo: 'Titolo Notizia 2', descrizione: 'descrizione notizia 2' },
    { titolo: 'Titolo Notizia 3', descrizione: 'descrizione notizia 3' },
    { titolo: 'Titolo Notizia 4', descrizione: 'descrizione notizia 4' },
  ];

}
