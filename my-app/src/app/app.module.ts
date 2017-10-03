import { BrowserModule } from '@angular/platform-browser';//Solve browser compatibility issue
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent} from './course.component';
import { Course2Component } from './course2/course2.component';
import { Course1Component } from './course1.component';
import { AttrHighlightDirective } from './attr-highlight.directive';
import { Course3Component } from './course3.component';
import { SrinivasComponent } from './srinivas.component';
import { InterestComponent } from './interest.component';
import { StrifoppositeDirective } from './strifopposite.directive';

@NgModule({//NgModule is decorator
  declarations: [AppComponent, CourseComponent, Course2Component, Course1Component, AttrHighlightDirective, Course3Component, SrinivasComponent, InterestComponent, StrifoppositeDirective],//metadata more than one
  imports: [BrowserModule, FormsModule],//metadata more than one
  providers: [],
  bootstrap: [CourseComponent]//only one component can be bootstrapped
})
export class AppModule { }//to access outside the present file
