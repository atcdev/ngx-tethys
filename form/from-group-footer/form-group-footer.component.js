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
import { Component, HostBinding, ViewEncapsulation, Optional } from '@angular/core';
import { ThyFormDirective } from '../form.directive';
var ThyFormGroupFooterComponent = /** @class */ (function () {
    function ThyFormGroupFooterComponent(thyParentForm) {
        this.thyParentForm = thyParentForm;
        this._isFormGroup = true;
        this.isHorizontal = true;
    }
    ThyFormGroupFooterComponent.prototype.ngOnInit = function () {
        if (this.thyParentForm) {
            this.isHorizontal = this.thyParentForm.isHorizontal;
        }
    };
    __decorate([
        HostBinding('class.form-group'),
        __metadata("design:type", Object)
    ], ThyFormGroupFooterComponent.prototype, "_isFormGroup", void 0);
    __decorate([
        HostBinding('class.row'),
        __metadata("design:type", Object)
    ], ThyFormGroupFooterComponent.prototype, "isHorizontal", void 0);
    ThyFormGroupFooterComponent = __decorate([
        Component({
            selector: 'thy-form-group-footer',
            template: " <div [ngClass]=\"{'col-sm-10 offset-sm-2 col-form-control': isHorizontal}\" class=\"btn-pair\"> <ng-content></ng-content> </div>",
            encapsulation: ViewEncapsulation.None
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [ThyFormDirective])
    ], ThyFormGroupFooterComponent);
    return ThyFormGroupFooterComponent;
}());
export { ThyFormGroupFooterComponent };
//# sourceMappingURL=form-group-footer.component.js.map