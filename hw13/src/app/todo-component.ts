import {Component} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: 'todo-component.html',
  styleUrls: ['todo-component.css']
})

export class TodoComponent {

  newTodo: string;
  todo: Array<{newTodo: string, isChecked: boolean, isDeleted: boolean}>;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todo = [];
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      isChecked: false,
      isDeleted: false
    };
    this.todo.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  update(e) {
    console.warn(e);
  }
}
