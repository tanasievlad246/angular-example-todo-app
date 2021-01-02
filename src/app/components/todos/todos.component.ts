import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: "my first todo",
        completed: false
      },
      {
        id: 2,
        title: "my second todo",
        completed: true
      },
      {
        id: 3,
        title: "my third todo",
        completed: false
      }
    ]
  }

}
