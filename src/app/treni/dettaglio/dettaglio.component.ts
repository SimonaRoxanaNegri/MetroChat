import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  /* idtreno: string; */
  constructor(private route: ActivatedRoute) {
    /*  this.idtreno = this.route.snapshot.paramMap.get('id'); */
  }
  ngOnInit(): void {
  }

}
