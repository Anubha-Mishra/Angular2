import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { Course1Component } from './course1.component';

import { Course3Component } from './course3.component';
import { SrinivasComponent } from './srinivas.component';
import { InterestComponent } from './interest.component';
import { AttrhighlightDirective } from './attr-highlight.directive';
import { StrifoppositeDirective } from './strifopposite.directive';
import { UnlessDirective } from './unless.directive';
import { PipesComponent } from './pipes/pipes.component';
import { BracketsPipe } from './brackets.pipe';
import { LifecycleComponent } from './lifecycle.component';
import { UserlogComponent } from './userlog/userlog.component';
import { LoginComponent } from './login/login.component';
import { ReactiveComponent } from './login/reactive.component';
import { CartComponent } from './cart/cart.component';
import { ListbooksComponent } from './listbooks/listbooks.component';

import { HttpModule } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { GitcallComponent } from './listbooks/gitcall.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home.component';
import { MainComponent } from './routing/main.component';
import { AuthorsComponent } from './routing/authors.component';
import { AuthorsDetailsComponent } from './routing/authors-details.component';
import { NotFoundComponent } from './routing/not-found.component';

const appRoutes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'details/:id', component:  AuthorsDetailsComponent },
  { path: '', component : HomeComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [ AppComponent,CourseComponent, Course1Component, Course3Component, SrinivasComponent, 
                  InterestComponent, AttrhighlightDirective, StrifoppositeDirective, UnlessDirective, 
                  PipesComponent, BracketsPipe, LifecycleComponent, UserlogComponent, LoginComponent, 
                  ReactiveComponent, CartComponent, ListbooksComponent, GitcallComponent, HomeComponent, 
                  MainComponent, AuthorsComponent, AuthorsDetailsComponent, NotFoundComponent ],
  imports: [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
