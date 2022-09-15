import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomenewComponent } from './welcomenew/welcomenew.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieratingComponent } from './movierating/movierating.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomenewComponent,
    MovielistComponent,
    MovieratingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
