var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThyTranslate } from '../shared';
import { ThyFormCheckBaseComponent } from '../shared';
var noop = function () {
};
var ɵ0 = noop;
var ThyCheckboxComponent = /** @class */ (function (_super) {
    __extends(ThyCheckboxComponent, _super);
    function ThyCheckboxComponent(thyTranslate) {
        return _super.call(this, thyTranslate) || this;
    }
    ThyCheckboxComponent_1 = ThyCheckboxComponent;
    var ThyCheckboxComponent_1;
    ThyCheckboxComponent = ThyCheckboxComponent_1 = __decorate([
        Component({
            selector: '[thy-checkbox],[thyCheckbox]',
            template: "<input class=\"form-check-input\" [checked]=\"_innerValue\" (change)=\"change()\" type=\"checkbox\" [disabled]=\"_disabled\"> <span class=\"form-check-label\">{{_labelText}}</span> <ng-content></ng-content>",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyCheckboxComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ThyTranslate])
    ], ThyCheckboxComponent);
    return ThyCheckboxComponent;
}(ThyFormCheckBaseComponent));
export { ThyCheckboxComponent };
export { ɵ0 };
//# sourceMappingURL=checkbox.component.js.map