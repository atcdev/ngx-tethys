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
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Directive, Input, Optional, ElementRef } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ThyFormDirective } from '../form.directive';
var ThyUniqueCheckValidator = /** @class */ (function () {
    function ThyUniqueCheckValidator(elementRef, thyForm) {
        this.elementRef = elementRef;
        this.thyForm = thyForm;
    }
    ThyUniqueCheckValidator_1 = ThyUniqueCheckValidator;
    ThyUniqueCheckValidator.prototype.validate = function (ctrl) {
        var _this = this;
        return this.thyUniqueCheck(ctrl.value)
            .pipe(map(function (failed) {
            setTimeout(function () {
                if (failed && _this.thyForm && _this.elementRef.nativeElement.name) {
                    _this.thyForm.validator.validateControl(_this.elementRef.nativeElement.name);
                }
            });
            return failed ? { thyUniqueCheck: failed } : null;
        }), catchError(function () { return null; }));
    };
    var ThyUniqueCheckValidator_1;
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], ThyUniqueCheckValidator.prototype, "thyUniqueCheck", void 0);
    ThyUniqueCheckValidator = ThyUniqueCheckValidator_1 = __decorate([
        Directive({
            selector: '[thyUniqueCheck]',
            providers: [
                {
                    provide: NG_ASYNC_VALIDATORS, useExisting: ThyUniqueCheckValidator_1, multi: true
                }
            ]
        }),
        __param(1, Optional()),
        __metadata("design:paramtypes", [ElementRef,
            ThyFormDirective])
    ], ThyUniqueCheckValidator);
    return ThyUniqueCheckValidator;
}());
export { ThyUniqueCheckValidator };
//# sourceMappingURL=unique-validator.directive.js.map