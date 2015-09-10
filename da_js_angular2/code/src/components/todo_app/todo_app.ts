///<reference path="../../../interfaces/i_todo.ts"/>
///<reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2';
import {bootstrap} from 'angular2/angular2';

import TodosService from '../../services/todos_service';
import TodoInput from '../todo_input/todo_input';
import TodoItem from '../todo_item/todo_item';

@Component({
  selector: 'todo-app',
  bindings: [TodosService]
})
@View({
  template: `
    <todo-input (add-todo)="addTodo($event)"></todo-input>
    <ul>
      <li *ng-for="#todo of _todos">
        <todo-item [todo]="todo" (change-todo)="todoChanged($event)"></todo-item>
      </li>
    </ul>
  `,
  directives: [TodoItem, TodoInput, NgFor]
})
class TodoApp {
  private _todos:Array<ITodo>;
  private _todosService:TodosService;

  constructor(todosService:TodosService) {
    this._todos = todosService.todos;
    this._todosService = todosService;
  }

  addTodo(todoTitle: string) {
    this._todosService.addTodo(todoTitle);
  }

  todoChanged(todo: ITodo) {
    this._todosService.updateTodo(todo);
  }
}

bootstrap(TodoApp, []);
