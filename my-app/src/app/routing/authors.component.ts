import { Component, OnInit } from '@angular/core';
import {Author} from './author';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit {

  authors : Author [] ;
  
  ngOnInit() {
    this.authors = Author.getAuthors();
  }

}
