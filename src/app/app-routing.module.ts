import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovielistComponent } from './movielist/movielist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { TvlistComponent } from './tvlist/tvlist.component';

const routes: Routes = [
  {path:'movies' ,component:MovielistComponent},
  {path:'movies/:id' ,component:MoviedetailsComponent},
  {path:'tv' , component:TvlistComponent},
  {path:'tv/:id' , component:TvdetailsComponent},
  {path:'**' , component:PagenotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
