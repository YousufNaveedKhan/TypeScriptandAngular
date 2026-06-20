import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student';
import { Emp } from './emp/emp';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Emp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lec08');

  students:string[] = [];

  constructor(private studentService: Student) {
    this.students = this.studentService.getStudents();
  }
}
