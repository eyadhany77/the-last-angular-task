import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movierating',
  templateUrl: './movierating.component.html',
  styleUrls: ['./movierating.component.css']
})
export class MovieratingComponent implements OnInit {

  @Input()
  raiting!: number;
  clipwidth:number =75;
  constructor() { }

  @Output() messagefromchild:EventEmitter<string>=new EventEmitter<string>()
  ngOnInit(): void {
  }
  ngOnChanges () 
  {
    this.clipwidth=this.raiting*75/5;
  }

  onclick () 
  {
    console.log("hello from child");
    
    this.messagefromchild.emit(`from child with raiting ${this.raiting}`);
  }
}
