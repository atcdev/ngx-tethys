var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener } from '@angular/core';
import { ThyStepperComponent } from './stepper.component';
/** Button that moves to the next step in a stepper workflow. */
var ThyStepperNextDirective = /** @class */ (function () {
    function ThyStepperNextDirective(stepper) {
        this.stepper = stepper;
    }
    ThyStepperNextDirective.prototype.click = function ($event) {
        this.stepper.next();
    };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThyStepperNextDirective.prototype, "click", null);
    ThyStepperNextDirective = __decorate([
        Directive({
            selector: '[thyStepperNext]'
        }),
        __metadata("design:paramtypes", [ThyStepperComponent])
    ], ThyStepperNextDirective);
    return ThyStepperNextDirective;
}());
export { ThyStepperNextDirective };
/** Button that moves to the previous step in a stepper workflow. */
var ThyStepperPreviousDirective = /** @class */ (function () {
    function ThyStepperPreviousDirective(stepper) {
        this.stepper = stepper;
    }
    ThyStepperPreviousDirective.prototype.click = function ($event) {
        this.stepper.previous();
    };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThyStepperPreviousDirective.prototype, "click", null);
    ThyStepperPreviousDirective = __decorate([
        Directive({
            selector: '[thyStepperPrevious]',
        }),
        __metadata("design:paramtypes", [ThyStepperComponent])
    ], ThyStepperPreviousDirective);
    return ThyStepperPreviousDirective;
}());
export { ThyStepperPreviousDirective };
//# sourceMappingURL=stepper-button.directive.js.map