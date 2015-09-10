///<reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>
///<reference path="../../../interfaces/i_todo.ts"/>
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
var TodoItem = (function () {
    function TodoItem() {
        this.changeTodo = new angular2_2.EventEmitter();
    }
    TodoItem.prototype.onClick = function () {
        this.todo.checked = !this.todo.checked;
        this.changeTodo.next(this.todo);
    };
    TodoItem = __decorate([
        angular2_1.Component({
            selector: 'todo-item',
            properties: ['todo'],
            events: ['changeTodo']
        }),
        angular2_1.View({
            template: "\n    <input type=\"checkbox\" [checked]=\"todo.checked\" [id]=\"todo.id\" (click)=\"onClick()\"/>\n    <label [attr.for]=\"todo.id\">{{todo.title}}</label>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
})();
exports.default = TodoItem;
//# sourceMappingURL=todo_item.js.map