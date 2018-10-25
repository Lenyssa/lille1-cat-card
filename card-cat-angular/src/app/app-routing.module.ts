import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'form',
    component: FormComponent
  },{
    path: 'form/:cardId',
    component: FormComponent
  },{
    path: 'not-found',
    component: NotFoundComponent
  },{
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
