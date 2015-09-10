///<reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>
///<reference path="../../../interfaces/i_todo.ts"/>

import {Component, View} from 'angular2/angular2';

import {EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'todo-item',
  properties: ['todo'],
  events: ['changeTodo']
})
@View({
  template: `
    <input type="checkbox" [checked]="todo.checked" [id]="todo.id" (click)="onClick()"/>
    <label [attr.for]="todo.id">{{todo.title}}</label>
  `
})
class TodoItem {
  private todo: ITodo;
  changeTodo = new EventEmitter();
  onClick() {
    this.todo.checked = !this.todo.checked;
    this.changeTodo.next(this.todo);
  }
}

export default TodoItem;