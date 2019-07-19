var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThyFormDirective } from './form.directive';
var ThyFormSubmitDirective = /** @class */ (function () {
    function ThyFormSubmitDirective(ngForm, thyFormDirective) {
        this.ngForm = ngForm;
        this.thyFormDirective = thyFormDirective;
        this.thyFormSubmit = new EventEmitter();
    }
    ThyFormSubmitDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.thyFormDirective.onSubmitSuccess = function ($event) {
            _this.thyFormSubmit.emit($event);
        };
    };
    ThyFormSubmitDirective.prototype.onSubmit = function ($event) {
        this.thyFormDirective.submit($event);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyFormSubmitDirective.prototype, "thyFormSubmit", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThyFormSubmitDirective.prototype, "onSubmit", null);
    ThyFormSubmitDirective = __decorate([
        Directive({
            selector: '[thyFormSubmit],[thy-form-submit]'
        }),
        __metadata("design:paramtypes", [NgForm,
            ThyFormDirective])
    ], ThyFormSubmitDirective);
    return ThyFormSubmitDirective;
}());
export { ThyFormSubmitDirective };
//# sourceMappingURL=form-submit.directive.js.map