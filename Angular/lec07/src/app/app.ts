import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Student {
  id:number; 
  name:string; 
  age:number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lec07');

  student:Student = {
    id:201, 
    name:"Laiba",
    age:19
  }

  students:Student[] = [
    {
      id:101, 
      name:"Laiba",
      age:19
    }, 
    {
      id:102,
      name:"Anusha",
      age:22
    }, 
    {
      id:103,
      name:"Anum",
      age:23
    },
    {
      id:104,
      name:"Abdul Rehman", 
      age:22
    }, 
    {
      id:105,
      name:"Abu Hurerah",
      age:22
    }
  ]
}
