import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ca-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  tornaAllaHome() {
    this.router.navigate(['/']);
  }

}
