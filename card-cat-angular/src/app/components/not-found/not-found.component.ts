import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import {DataService} from './../services/data-service';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  
 constructor(
  ) { 
  }

  ngOnInit() {
  }

  
}
