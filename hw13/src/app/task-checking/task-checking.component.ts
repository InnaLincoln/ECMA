import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-checking',
  templateUrl: './task-checking.component.html',
  styleUrls: ['./task-checking.component.css']
})
export class TaskCheckingComponent implements OnInit {
  @Input() task: {newTodo: string, isChecked: boolean, isDeleted: boolean};
  @Output() synchronize = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  checkTodo() {
    this.task.isChecked = true;
    this.synchronize.emit('Synchronized');
  }
}
