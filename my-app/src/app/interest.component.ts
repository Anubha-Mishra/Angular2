import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  birthday:Date= new Date();
  amount:number =0;
  rate:number=0;
  term:number=0;
  names:string[]=["Srinivas","Nihil","Ankut","Abc","raghu"];
  mode:string='t';
  flight:string="Indigo";  
  train:string="Ap Express";
  myclass={"big":true,'red':true}
  clearAll():void{
    this.amount=0;
    this.rate=0;
    this.term=0;
  }
  switch:boolean=true;
  onSwitch():void{
    this.switch=!this.switch;
  }
  twowaybinding={"big":true,'green':false}
  constructor() { }

  ngOnInit() {
  }
 
}
