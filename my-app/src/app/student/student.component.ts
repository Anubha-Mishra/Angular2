import { Component, OnInit } from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[];

  constructor() { }

  ngOnInit() {
    this.students = [new Student(1, 450),
                     new Student(2, 500)];
  }

  addStudent() {
    console.log("Added");
  }

  editStudent(id: number) {
    console.log("Edited");
  }

  deleteStudent(id: number) {
    console.log("Deleted");
  }
}
