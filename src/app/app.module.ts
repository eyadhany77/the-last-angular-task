import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomenewComponent } from './welcomenew/welcomenew.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieratingComponent } from './movierating/movierating.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TvlistComponent } from './tvlist/tvlist.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomenewComponent,
    MovielistComponent,
    MovieratingComponent,
    MoviedetailsComponent,
    PagenotfoundComponent,
    TvlistComponent,
    TvdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
