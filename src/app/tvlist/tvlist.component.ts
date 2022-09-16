import { Component, OnInit } from '@angular/core';
import { MovieserverService } from '../movieserver.service';

@Component({
  selector: 'app-tvlist',
  templateUrl: './tvlist.component.html',
  styleUrls: ['./tvlist.component.css']
})
export class TvlistComponent implements OnInit {
 tvshows:any[]=[];
  constructor(private tvservece:MovieserverService) { }

  ngOnInit(): void {
    this.tvservece.gettvseries().subscribe({next:(tvdata)=>{ this.tvshows=tvdata.results;    }})
  }

}
