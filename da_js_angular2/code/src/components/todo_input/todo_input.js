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
var angular2_3 = require('angular2/angular2');
var TodoInput = (function () {
    function TodoInput() {
        this.addTodo = new angular2_2.EventEmitter();
        this.title = new angular2_3.Control('', angular2_3.Validators.required);
    }
    TodoInput.prototype.onSubmit = function () {
        if (this.title.valid) {
            this.addTodo.next(this.title.value);
            this.title.value = '';
        }
    };
    TodoInput = __decorate([
        angular2_1.Component({
            selector: 'todo-input',
            events: ['addTodo']
        }),
        angular2_1.View({
            template: "\n    <form (submit)=\"onSubmit()\">\n      <input type=\"text\" [ng-form-control]=\"title\" [class.error]=\"!title.valid\"/>\n      <button type=\"submit\">Add</button>\n    </form>\n  ",
            directives: [angular2_3.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoInput);
    return TodoInput;
})();
exports.default = TodoInput;
//# sourceMappingURL=todo_input.js.map