import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data-service';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
 constructor(
     private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
  }

  
}
