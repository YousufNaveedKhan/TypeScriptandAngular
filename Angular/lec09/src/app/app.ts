import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lec09');

  name: string = "";
  email: string = "";
  age: number = 0;

  submitData() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.age);
  }
}
