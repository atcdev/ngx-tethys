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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, forwardRef, Input, Optional, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThyTranslate } from '../shared';
import { ThyFormCheckBaseComponent } from '../shared';
import { ThyRadioGroupComponent } from './group/radio-group.component';
import { inputValueToBoolean } from '../util/helpers';
var ThyRadioComponent = /** @class */ (function (_super) {
    __extends(ThyRadioComponent, _super);
    function ThyRadioComponent(thyTranslate, thyRadioGroupComponent, changeDetectorRef) {
        var _this = _super.call(this, thyTranslate, changeDetectorRef) || this;
        _this.thyTranslate = thyTranslate;
        _this.thyRadioGroupComponent = thyRadioGroupComponent;
        return _this;
    }
    ThyRadioComponent_1 = ThyRadioComponent;
    Object.defineProperty(ThyRadioComponent.prototype, "thyChecked", {
        set: function (value) {
            this.writeValue(inputValueToBoolean(value));
            this.changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    ThyRadioComponent.prototype.ngOnInit = function () {
        if (this.thyRadioGroupComponent) {
            this.thyRadioGroupComponent.addRadio(this);
        }
    };
    ThyRadioComponent.prototype.change = function () {
        if (this.thyRadioGroupComponent) {
            this.thyRadioGroupComponent.updateValue(this.thyValue, true);
        }
        else {
            this.updateValue(!this._innerValue);
        }
    };
    var ThyRadioComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyRadioComponent.prototype, "thyValue", void 0);
    ThyRadioComponent = ThyRadioComponent_1 = __decorate([
        Component({
            selector: '[thy-radio],[thyRadio]',
            template: "<input class=\"form-check-input\" [checked]=\"_isChecked\" (change)=\"change()\" type=\"radio\" [disabled]=\"_disabled\" [attr.name]=\"name\"> <span class=\"form-check-label\">{{_labelText}}</span> <ng-content></ng-content> ",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyRadioComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __param(1, Optional()),
        __metadata("design:paramtypes", [ThyTranslate,
            ThyRadioGroupComponent,
            ChangeDetectorRef])
    ], ThyRadioComponent);
    return ThyRadioComponent;
}(ThyFormCheckBaseComponent));
export { ThyRadioComponent };
//# sourceMappingURL=radio.component.js.map