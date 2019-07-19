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
import { Component, Input, ViewChild, TemplateRef, Inject, InjectionToken, Optional } from '@angular/core';
export var THY_STEPPER_COMPONENT = new InjectionToken('THY_STEPPER_COMPONENT');
var ThyStepComponent = /** @class */ (function () {
    function ThyStepComponent(stepper) {
        this.stepper = stepper;
    }
    ThyStepComponent.prototype.select = function () {
        this.stepper.selected = this;
    };
    __decorate([
        ViewChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], ThyStepComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyStepComponent.prototype, "label", void 0);
    ThyStepComponent = __decorate([
        Component({
            selector: 'thy-step',
            template: "<ng-template><ng-content></ng-content></ng-template> "
        }),
        __param(0, Optional()), __param(0, Inject(THY_STEPPER_COMPONENT)),
        __metadata("design:paramtypes", [Object])
    ], ThyStepComponent);
    return ThyStepComponent;
}());
export { ThyStepComponent };
//# sourceMappingURL=step.component.js.map