import { Component, OnInit } from '@angular/core';
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
  private _searchValue:string=''
  moviedata:any[]=[]
  filteredMovies:any[]=this.moviedata;


   constructor(private moviesservice:MovieserverService){}

   ngOnInit() {
      console.log('hello on int');
      this.moviedata=this.moviesservice.getdata();
      this.filteredMovies=this.moviedata;
    }


    get searchValue ():string
    {
      return this._searchValue;
    }
    set searchValue(value:string)
    { 
      this._searchValue=value;
      this.filteredMovies=this.perfomSearch(value);
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
  
perfomSearch (val:string) :Imovie[] {
return this.moviedata.filter((movie)=>
movie.title.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
}

handlechildevent(data:string){this.childmsg=data;}
}

