import { Component } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-emp',
  imports: [],
  templateUrl: './emp.html',
  styleUrl: './emp.css',
})
export class Emp {
  students:string[] = [];
  
    constructor(private studentService: Student) {
      this.students = this.studentService.getStudents();
    }
}
