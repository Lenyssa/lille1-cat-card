import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data-service';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
 constructor(
  ) { 
  }

  ngOnInit() {
  }

  
}
