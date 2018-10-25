import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../../../services/data-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
  }

  gotoForm(cardId) {
    if(cardId) {
      this.router.navigate(['form', cardId]);
    } else {
      this.router.navigate(['form']);
    }
    
  }

}
