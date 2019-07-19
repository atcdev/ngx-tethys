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
var ThyMaxDirective = /** @class */ (function () {
    function ThyMaxDirective() {
    }
    ThyMaxDirective_1 = ThyMaxDirective;
    Object.defineProperty(ThyMaxDirective.prototype, "max", {
        set: function (value) {
            this._validator = Validators.max(parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    ThyMaxDirective.prototype.validate = function (control) {
        return this._validator(control);
    };
    var ThyMaxDirective_1;
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyMaxDirective.prototype, "max", null);
    ThyMaxDirective = ThyMaxDirective_1 = __decorate([
        Directive({
            selector: '[max][formControlName],[max][formControl],[max][ngModel]',
            providers: [
                {
                    provide: NG_VALIDATORS,
                    useExisting: forwardRef(function () { return ThyMaxDirective_1; }),
                    multi: true
                }
            ]
        })
    ], ThyMaxDirective);
    return ThyMaxDirective;
}());
export { ThyMaxDirective };
//# sourceMappingURL=max-validator.directive.js.map