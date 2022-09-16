import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserverService } from '../movieserver.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent implements OnInit {
singleshow:any;
  constructor(private tvdet:MovieserverService , private route2:ActivatedRoute) { }

  ngOnInit(): void {
    let id=Number(this.route2.snapshot.paramMap.get('id'));
    console.log(id);
    this.tvdet.gettvseriesbyid(id).subscribe(
      {
        next:(movie)=>
        {
          this.singleshow=movie;
        }
      }
    )


  }

}
