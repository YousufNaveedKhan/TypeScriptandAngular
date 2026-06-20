import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  students:string[] = [
    "Laiba",
    "Anusha",
    "Anum",
    "Abdul Rehman",
    "Abu Hurerah", 
    "Hammad",
    "Fatima"
  ];

  getStudents() {
    return this.students;
  }
}
