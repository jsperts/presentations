///<reference path="../../../interfaces/i_todo.ts"/>
///<reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var todos_service_1 = require('../../services/todos_service');
var todo_input_1 = require('../todo_input/todo_input');
var todo_item_1 = require('../todo_item/todo_item');
var TodoApp = (function () {
    function TodoApp(todosService) {
        this._todos = todosService.todos;
        this._todosService = todosService;
    }
    TodoApp.prototype.addTodo = function (todoTitle) {
        this._todosService.addTodo(todoTitle);
    };
    TodoApp.prototype.todoChanged = function (todo) {
        this._todosService.updateTodo(todo);
    };
    TodoApp = __decorate([
        angular2_1.Component({
            selector: 'todo-app',
            bindings: [todos_service_1.default]
        }),
        angular2_1.View({
            template: "\n    <todo-input (add-todo)=\"addTodo($event)\"></todo-input>\n    <ul>\n      <li *ng-for=\"#todo of _todos\">\n        <todo-item [todo]=\"todo\" (change-todo)=\"todoChanged($event)\"></todo-item>\n      </li>\n    </ul>\n  ",
            directives: [todo_item_1.default, todo_input_1.default, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [todos_service_1.default])
    ], TodoApp);
    return TodoApp;
})();
angular2_2.bootstrap(TodoApp, []);
//# sourceMappingURL=todo_app.js.map