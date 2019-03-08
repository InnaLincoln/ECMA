import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-adding',
  templateUrl: './task-adding.component.html',
  styleUrls: ['./task-adding.component.css']
})
export class TaskAddingComponent implements OnInit {
  newTodo: string;
  todo: Array<{newTodo: string, isChecked: boolean, isDeleted: boolean}>;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todo = [];
  }

  ngOnInit() {
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
