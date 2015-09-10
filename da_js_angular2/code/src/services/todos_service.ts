///<reference path="../../interfaces/i_todo.ts"/>
///<reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>

class Todo implements ITodo {
  private _title: string;
  private _id: string;
  private _checked: boolean;
  constructor(id: string, title: string, checked: boolean = false) {
    this._id = id;
    this._title = title;
    this._checked = checked;
  }

  get title(): string {
    return this._title;
  }

  get id(): string {
    return this._id;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(checkedStatus: boolean) {
    this._checked = checkedStatus;
  }
}

var todosArray:Array<ITodo> = [
  new Todo('todo1', 'Todo 1', true),
  new Todo('todo2', 'Todo 2'),
  new Todo('todo3', 'Todo 3'),
  new Todo('todo4', 'Todo 4'),
  new Todo('todo5', 'Todo 5')
];

class TodosService {
  private _todos:Array<ITodo>;
  private counter: number;

  constructor() {
    this._todos = todosArray;
    this.counter = todosArray.length + 1;
  }

  get todos():Array<ITodo> {
    return this._todos;
  }

  addTodo(todoTitle: string):void {
    const id = 'todo' + this.counter;
    this.counter += 1;
    const todo = new Todo(id, todoTitle);
    this._todos.push(todo);
  }

  updateTodo(todo: ITodo) {
    console.log('id:', todo.id, 'check status:', todo.checked);
  }
}

export default TodosService;
