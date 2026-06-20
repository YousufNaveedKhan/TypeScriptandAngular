import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
    promise = new Promise(

      (resolve, reject) => {
      let isSuccess = true; 

      setTimeout(() => { 
      if (isSuccess) {
        resolve(console.log("Promise resolved"));
      }else {
        reject(console.log("Promise Rejected"))
      }
      }, 5000
      )
    }
  );
  }

