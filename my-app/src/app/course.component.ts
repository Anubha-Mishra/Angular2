import {Component} from '@angular/core';

@Component({
    selector: 'my-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent {
    name:string = 'Angular';
    topics:string[]=["Getting Started","Components","Directives","Routing"];
    addTopic(topic):void{
        //console.log("Getting called"+topic);
        this.topics.push(topic);
    };
    clearTopic():void{
        this.topics.splice(0,this.topics.length);
    }
}