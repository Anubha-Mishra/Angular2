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
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [ AppComponent,CourseComponent, Course1Component, Course3Component, SrinivasComponent, InterestComponent, AttrhighlightDirective, StrifoppositeDirective, UnlessDirective, PipesComponent, BracketsPipe, LifecycleComponent, UserlogComponent, LoginComponent, ReactiveComponent, CartComponent, StudentComponent ],
  imports: [ BrowserModule,FormsModule,ReactiveFormsModule ],
  providers: [],
  bootstrap: [StudentComponent]
})
export class AppModule { }
