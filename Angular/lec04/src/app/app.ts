import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
 
export class App {
  showAlert() {
    console.log("Button Clicked");
  }

  showText() {
    console.log("Element Hovered");
  }

  typing() {
    console.log("Typing...");
  }

  countryChanged() {
    console.log("Country Changed...");
  }

  isDisabled = true;

  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EjeFbGJXZh3DPt8zA2kpDy8V_jThCydOKw&s";

  userName:string = "Abdul Rehman";

  isLoggedIn = false;

  students:string[] = [
    "Laiba", 
    "Anusha",
    "Abu Hurerah",
    "Abdul Rehman"
  ];
}
