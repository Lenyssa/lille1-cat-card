import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardComponent } from './components/home/components/card/card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { APP_BASE_HREF } from '@angular/common';
import { DataService } from './components/services/data-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    NotFoundComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue:''},
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
