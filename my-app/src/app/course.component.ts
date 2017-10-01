import { Component } from '@angular/core';

@Component({
  selector: 'my-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  name:string = 'Angular Training from Aspire';
  amount:number = 586770;
  online:boolean=false;
  topics:string[]=["Getting Started","Component","Directives","Routing","Servics","Forms","Pipes","Routing"];
  newtopic : string;
  addTopic(topic):void{
    this.topics.push(topic);
      console.log("Getting called");
      //this.topics.concat(this.newtopic);
     // this.newtopic = "";
        }
  clearTopic():void{
      this.topics.splice(0,this.topics.length);
  }
}
