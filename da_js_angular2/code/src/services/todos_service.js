///<reference path="../../interfaces/i_todo.ts"/>
///<reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>
var Todo = (function () {
    function Todo(id, title, checked) {
        if (checked === void 0) { checked = false; }
        this._id = id;
        this._title = title;
        this._checked = checked;
    }
    Object.defineProperty(Todo.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checkedStatus) {
            this._checked = checkedStatus;
        },
        enumerable: true,
        configurable: true
    });
    return Todo;
})();
var todosArray = [
    new Todo('todo1', 'Todo 1', true),
    new Todo('todo2', 'Todo 2'),
    new Todo('todo3', 'Todo 3'),
    new Todo('todo4', 'Todo 4'),
    new Todo('todo5', 'Todo 5')
];
var TodosService = (function () {
    function TodosService() {
        this._todos = todosArray;
        this.counter = todosArray.length + 1;
    }
    Object.defineProperty(TodosService.prototype, "todos", {
        get: function () {
            return this._todos;
        },
        enumerable: true,
        configurable: true
    });
    TodosService.prototype.addTodo = function (todoTitle) {
        var id = 'todo' + this.counter;
        this.counter += 1;
        var todo = new Todo(id, todoTitle);
        this._todos.push(todo);
    };
    TodosService.prototype.updateTodo = function (todo) {
        console.log('id:', todo.id, 'check status:', todo.checked);
    };
    return TodosService;
})();
exports.default = TodosService;
//# sourceMappingURL=todos_service.js.map