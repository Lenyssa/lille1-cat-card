import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import {DataService} from './../services/data-service';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  card;
  cardId: string;
  validated = false;
  notExistCard = false;
  needDelete = true;
  
  form: FormGroup;
  
 constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute
  ) { 
    this.form = this.formBuilder.group({
      'title': ['', [ Validators.maxLength(250), Validators.required ]],
      'imageUrl': ['', [Validators.required ]],
      'description': []
    });
  }

  ngOnInit() {
    this.cardId = this.route.snapshot.params.cardId;
    if(this.cardId) {
      this.dataService.getCard(this.cardId).then(
        (res) => {
          this.card = res;
        }
      ).catch(
        (err) => {
          this.notExistCard = true;
        }
      );
    } else {
      this.needDelete = false;
    }
  }

  onSave() {
    this.validated = true;
    var regex = new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$");
    if(this.form.valid && regex.test(this.form.value.imageUrl)){
      if(!this.cardId) {
        const newCard = {
          id: this.dataService.id+1,
          title: this.form.value.title,
          imageUrl: this.form.value.imageUrl,
          description: this.form.value.description
        };
        this.dataService.id += 1;
        this.dataService.createCard(newCard).then(
          (res)=> {
            this.router.navigate(['home']);
          }
        );
      } else {
        this.card = {
          id: this.card.id,
          title: this.form.value.title,
          imageUrl: this.form.value.imageUrl,
          description: this.form.value.description
        };
        this.dataService.updateCard(this.card).then(
          (res)=> {
            this.router.navigate(['home']);
          }
        );
      }
    } else {
      if(this.cardId) {
        if(!this.form.value.title){
          this.form.value.title = this.card.title;
        }
        if(!this.form.value.imageUrl){
          this.form.value.imageUrl = this.card.imageUrl;
        }
        if(!this.form.value.description){
          this.form.value.description = this.card.description;
        }
        this.card = {
          id: this.card.id,
          title: this.form.value.title,
          imageUrl: this.form.value.imageUrl,
          description: this.form.value.description
        };
        this.dataService.updateCard(this.card).then(
          (res)=> {
            this.router.navigate(['home']);
          }
        );
      }
    }
  }

  onDelete() {
    if(this.cardId) {
      this.dataService.deleteCard(this.cardId).then(
        (res) => {
          this.router.navigate(['home']);
        }
      );
    }
  }

}
