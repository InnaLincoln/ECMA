import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-removing',
  templateUrl: './task-removing.component.html',
  styleUrls: ['./task-removing.component.css']
})
export class TaskRemovingComponent implements OnInit {
  @Input() task: {newTodo: string, isChecked: boolean, isDeleted: boolean};
  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.task.isDeleted = true;
  }
}
