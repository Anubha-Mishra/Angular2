import { Component, OnInit } from '@angular/core';
import {Author} from './author';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html'
})
export class AuthorsDetailsComponent implements OnInit {

  author: Author;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.author = this.getAuthor(this.id);
  }
  getAuthor(id: number): Author {
    console.log("Route id : " + id);
    for (var a of Author.getAuthors()) {
      if (a.id == id) {
        return a;
      }
    }
  }

  back() {
    this.router.navigate(['authors']);
  }
}
