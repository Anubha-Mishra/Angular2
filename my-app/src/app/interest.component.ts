import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  amount:number =0;
  rate:number=0;
  term:number=0;
  myclass={"big":true,'red':true}
  clearAll():void{
    this.amount=0;
    this.rate=0;
    this.term=0;
  }
  twowaybinding={"big":true,'green':false}
  constructor() { }

  ngOnInit() {
  }

}
