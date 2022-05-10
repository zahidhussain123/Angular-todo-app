import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() taskDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    this.taskDelete.emit(todo);
  }
}
