import { Component, OnInit } from '@angular/core';
import {Books} from './books';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html'
})
export class ListbooksComponent implements OnInit {

  books: Books[];
  constructor(private http: Http) {}

  ngOnInit() {
      this.http.get("/assets/books.json")     
      .toPromise()
      .then(resp => this.books = <Books[]> resp.json())  
      //.map(resp => <Books[]> resp.json())   
      //.subscribe( books => this.books =  books);
  }

}
