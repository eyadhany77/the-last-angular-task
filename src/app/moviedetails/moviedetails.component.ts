import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserverService } from '../movieserver.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  singlemovie:any;
  constructor(private moviedetail:MovieserverService, private route:ActivatedRoute) { }

  ngOnInit(): void 
  {
    let id=Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.moviedetail.getmoviebyid(id).subscribe(
      {
        next:(movie)=>
        {
          this.singlemovie=movie;
        }
      }
    )

  
  }

}
