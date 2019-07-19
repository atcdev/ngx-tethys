var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, HostBinding, ViewEncapsulation, Optional, Input } from '@angular/core';
import { ThyFormDirective } from '../form.directive';
var ThyFormGroupErrorComponent = /** @class */ (function () {
    function ThyFormGroupErrorComponent(thyParentForm) {
        this.thyParentForm = thyParentForm;
        this.thyShowFirst = true;
        this.isHorizontal = true;
    }
    Object.defineProperty(ThyFormGroupErrorComponent.prototype, "thyErrors", {
        get: function () {
            var errors = this.errors || this.thyParentForm.validator.errors;
            return errors && errors.length > 0 && this.thyShowFirst ? [errors[0]] : errors;
        },
        set: function (errors) {
            this.errors = errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupErrorComponent.prototype, "_isFormGroup", {
        get: function () {
            return this.thyErrors && this.thyErrors.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ThyFormGroupErrorComponent.prototype.ngOnInit = function () {
        if (this.thyParentForm) {
            this.isHorizontal = this.thyParentForm.isHorizontal;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyFormGroupErrorComponent.prototype, "thyShowFirst", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ThyFormGroupErrorComponent.prototype, "thyErrors", null);
    __decorate([
        HostBinding('class.form-group'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ThyFormGroupErrorComponent.prototype, "_isFormGroup", null);
    __decorate([
        HostBinding('class.row'),
        __metadata("design:type", Object)
    ], ThyFormGroupErrorComponent.prototype, "isHorizontal", void 0);
    ThyFormGroupErrorComponent = __decorate([
        Component({
            selector: 'thy-form-group-error',
            template: "<div [ngClass]=\"{ 'col-sm-10 offset-sm-2 col-form-control': isHorizontal }\"> <thy-alert *ngFor=\"let error of thyErrors\" thyType=\"danger\" [thyMessage]=\"error\"></thy-alert> </div> ",
            encapsulation: ViewEncapsulation.None
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [ThyFormDirective])
    ], ThyFormGroupErrorComponent);
    return ThyFormGroupErrorComponent;
}());
export { ThyFormGroupErrorComponent };
//# sourceMappingURL=form-group-error.component.js.map