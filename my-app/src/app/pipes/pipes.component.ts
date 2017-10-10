import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  MyBirthDay:string='09/10/2017';
  str="Anubha";
  constructor() { }

  ngOnInit() {
  }

}
