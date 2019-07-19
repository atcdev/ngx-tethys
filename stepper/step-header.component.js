var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input } from '@angular/core';
var ThyStepHeaderComponent = /** @class */ (function () {
    function ThyStepHeaderComponent() {
        this.thyStepHeader = true;
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyStepHeaderComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ThyStepHeaderComponent.prototype, "index", void 0);
    __decorate([
        HostBinding('class.thy-stepper-header-selected'),
        Input(),
        __metadata("design:type", Boolean)
    ], ThyStepHeaderComponent.prototype, "selected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyStepHeaderComponent.prototype, "active", void 0);
    __decorate([
        HostBinding('class.thy-stepper-header'),
        __metadata("design:type", Object)
    ], ThyStepHeaderComponent.prototype, "thyStepHeader", void 0);
    ThyStepHeaderComponent = __decorate([
        Component({
            selector: 'thy-step-header',
            template: "<div class=\"thy-step-number\"> <span>{{index + 1}}</span></div> <div class=\"thy-step-label\">{{label}}</div>"
        })
    ], ThyStepHeaderComponent);
    return ThyStepHeaderComponent;
}());
export { ThyStepHeaderComponent };
//# sourceMappingURL=step-header.component.js.map