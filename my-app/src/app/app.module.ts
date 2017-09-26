import { BrowserModule } from '@angular/platform-browser';//Solve browser compatibility issue
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent} from './course.component';
import { Course2Component } from './course2/course2.component';
import { Course1Component } from './course1.component';

@NgModule({//NgModule is decorator
  declarations: [AppComponent, CourseComponent, Course2Component, Course1Component],//metadata more than one
  imports: [BrowserModule],//metadata more than one
  providers: [],
  bootstrap: [CourseComponent]//only one component can be bootstrapped
})
export class AppModule { }//to access outside the present file
