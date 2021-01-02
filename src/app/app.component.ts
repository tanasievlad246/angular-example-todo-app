import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'angular-todo-list';
  age: number = 12;

  constructor() {
    this.changeName("Vlad");
  }

  changeName(name: string): void {
    this.name = name;
  }
}
