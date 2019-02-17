import {Component} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: 'todo.html',
  styleUrls: ['todo.css']
})

export class TodoComponent {

  newTodo: string;
  todo: any;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todo = [];
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todo.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }


  deleteTodo(index) {
    this.todo.splice(index, 1);
  }

}
