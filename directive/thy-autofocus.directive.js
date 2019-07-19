var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ElementRef } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var ThyAutofocusDirective = /** @class */ (function () {
    function ThyAutofocusDirective(elementRef) {
        this.elementRef = elementRef;
        // 自动选择，用于只读的 input 输入框，方便复制粘贴
        this._autoSelect = false;
    }
    Object.defineProperty(ThyAutofocusDirective.prototype, "thyAutoSelect", {
        set: function (value) {
            this._autoSelect = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyAutofocusDirective.prototype, "thyAutofocus", {
        // auto focus current element
        set: function (value) {
            var _this = this;
            if (inputValueToBoolean(value) !== false) {
                setTimeout(function () {
                    _this.elementRef.nativeElement.focus();
                    if (_this._autoSelect && _this.elementRef.nativeElement.select) {
                        _this.elementRef.nativeElement.select();
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyAutofocusDirective.prototype, "thyAutoSelect", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyAutofocusDirective.prototype, "thyAutofocus", null);
    ThyAutofocusDirective = __decorate([
        Directive({
            selector: 'input[thyAutofocus],textarea[thyAutofocus]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ThyAutofocusDirective);
    return ThyAutofocusDirective;
}());
export { ThyAutofocusDirective };
//# sourceMappingURL=thy-autofocus.directive.js.map