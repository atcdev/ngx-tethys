var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';
var ThyMinDirective = /** @class */ (function () {
    function ThyMinDirective() {
    }
    ThyMinDirective_1 = ThyMinDirective;
    Object.defineProperty(ThyMinDirective.prototype, "min", {
        set: function (value) {
            this._validator = Validators.min(parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    ThyMinDirective.prototype.validate = function (control) {
        return this._validator(control);
    };
    var ThyMinDirective_1;
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyMinDirective.prototype, "min", null);
    ThyMinDirective = ThyMinDirective_1 = __decorate([
        Directive({
            selector: '[min][formControlName],[min][formControl],[min][ngModel]',
            providers: [
                {
                    provide: NG_VALIDATORS,
                    useExisting: forwardRef(function () { return ThyMinDirective_1; }),
                    multi: true
                }
            ]
        })
    ], ThyMinDirective);
    return ThyMinDirective;
}());
export { ThyMinDirective };
//# sourceMappingURL=min-validator.directive.js.map