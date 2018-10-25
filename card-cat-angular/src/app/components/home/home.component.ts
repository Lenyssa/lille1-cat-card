import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from './../services/data-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards;

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getAllCards().then(
      (data) => {
        this.cards = data;
      }
    )
  }

  gotoForm(cardId) {
    if(cardId) {
      this.router.navigate(['form', cardId]);
    } else {
      this.router.navigate(['form']);
    }
    
  }

}
