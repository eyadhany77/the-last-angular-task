import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscriber } from 'rxjs';
import { MovieserverService } from '../movieserver.service';
import { Imovie } from './movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent  implements OnInit{
  isdisabled = false;
  childmsg='';
  pageSize=20;
  length=3000;
  currentpage=1;
  
  private _searchValue:string=''
  moviedata:any[]=[]
  filteredMovies:any[]=this.moviedata;


   constructor(private moviesservice:MovieserverService){}

   ngOnInit() {
      console.log('hello on int');
      this.moviesservice.getallmovies().subscribe({next:(movies)=>
      {
        console.log(movies.results);
        this.moviedata=movies.results;
        this.filteredMovies=this.moviedata;
      }});
      
    }


    get searchValue ():string
    {
      return this._searchValue;
    }
    set searchValue(value:string)
    { 
      this._searchValue=value;
      this.perfomSearch(value);
    } 

   
    
    printtoconsole()
    {console.log('button pressed');};
    toggledata(movieId:number):void{
      this.moviedata.filter(function(movie){
        if (movie.id==movieId) {
          movie.isVisiable=!movie.isVisiable;
        }
      })
    }
  
perfomSearch (val:string)  {
this.moviesservice.getsearchmovie(val) .subscribe({next:(data)=>{this.filteredMovies=data.results;}})
}

handlechildevent(data:string){this.childmsg=data;}
onpagechange(pagedata:PageEvent){
  this.currentpage=pagedata.pageIndex+1;
  this.moviesservice.getallmovies(this.currentpage  ).subscribe({next:(movies)=>
    {
      console.log(movies.results);
      this.moviedata=movies.results;
      this.filteredMovies=this.moviedata;
    }});
}

}

