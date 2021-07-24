import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  myText: string = "Hello, world!"
  myDate: Date = new Date();
  myList: string[] = ["Brot", "Milch", "Honig", "Vollkornbrot"];
}
