import { Component, OnInit } from '@angular/core';
import {Gituser} from './gituser';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-gitcall',
  templateUrl: './gitcall.component.html'
})
export class GitcallComponent {

  public user: Gituser;
  private url: string = "https://api.github.com/users/";
  public isLoading: boolean = false;
  public message: string = "";

  constructor(private http: Http) {
  }



getDetails(username: string): void {
  this.user = null;
  this.message = '';
  this.isLoading = true; 
  this.http.get(this.url + username)
       // .map((response: Response) => response.json())
      .finally( () => this.isLoading = false)
      .subscribe(response => this.user = <Gituser> response.json(),
                 error =>  this.message = "Sorry! User Not Found!");
      
}

}
