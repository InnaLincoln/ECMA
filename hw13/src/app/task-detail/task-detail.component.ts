import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: {newTodo: string, isChecked: boolean, isDeleted: boolean};
  @Output() synchronize = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.task.isDeleted = true;
  }

  checkTodo() {
    this.task.isChecked = true;
    this.synchronize.emit('Synchronized');
  }
}
