import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lec10');

  students: any[] = [];

  studentForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(3)
    ]), 
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]), 
    age: new FormControl('', [
      Validators.required, 
      Validators.min(18)
    ])
  });

  saveStudent() {
    this.students.push(this.studentForm.value);

    this.studentForm.reset;
  }
}
