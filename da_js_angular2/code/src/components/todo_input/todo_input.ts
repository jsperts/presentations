///<reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

import {Component, View, Inject} from 'angular2/angular2';

import {EventEmitter} from 'angular2/angular2';

import {FORM_DIRECTIVES, Control, Validators} from 'angular2/angular2';

@Component({
  selector: 'todo-input',
  events: ['addTodo']
})
@View({
  template: `
    <form (submit)="onSubmit()">
      <input type="text" [ng-form-control]="title" [class.error]="!title.valid"/>
      <button type="submit">Add</button>
    </form>
  `,
  directives: [FORM_DIRECTIVES]
})
class TodoInput {
  addTodo = new EventEmitter();
  private title: Control;

  constructor() {
    this.title = new Control('', Validators.required);
  }
  onSubmit() {
    if (this.title.valid) {
      this.addTodo.next(this.title.value);
      this.title.value = '';
    }
  }
}

export default TodoInput;
