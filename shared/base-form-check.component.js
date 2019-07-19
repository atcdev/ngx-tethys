var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HostBinding, Input } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var noop = function () { };
var ɵ0 = noop;
var ThyFormCheckBaseComponent = /** @class */ (function () {
    function ThyFormCheckBaseComponent(thyTranslate, changeDetectorRef) {
        this.thyTranslate = thyTranslate;
        this.changeDetectorRef = changeDetectorRef;
        // The internal data model
        this._innerValue = null;
        this._disabled = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this._isFormCheck = true;
        this._isFormCheckInline = false;
        this._isChecked = false;
    }
    Object.defineProperty(ThyFormCheckBaseComponent.prototype, "thyInline", {
        set: function (value) {
            this._isFormCheckInline = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormCheckBaseComponent.prototype, "thyLabelText", {
        set: function (value) {
            this._labelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormCheckBaseComponent.prototype, "thyLabelTextTranslateKey", {
        set: function (value) {
            if (value) {
                this._labelText = this.thyTranslate.instant(value);
            }
            else {
                this._labelText = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormCheckBaseComponent.prototype, "thyDisabled", {
        set: function (value) {
            this.setDisabledState(inputValueToBoolean(value));
        },
        enumerable: true,
        configurable: true
    });
    ThyFormCheckBaseComponent.prototype.writeValue = function (obj) {
        if (obj !== this._innerValue) {
            this._innerValue = obj;
            this._isChecked = !!this._innerValue;
        }
    };
    ThyFormCheckBaseComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ThyFormCheckBaseComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ThyFormCheckBaseComponent.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
        this.markForCheck();
    };
    ThyFormCheckBaseComponent.prototype.updateValue = function (value) {
        this._innerValue = value;
        this._isChecked = !!this._innerValue;
        this.onChangeCallback(value);
        this.markForCheck();
    };
    ThyFormCheckBaseComponent.prototype.change = function () {
        this.updateValue(!this._innerValue);
    };
    ThyFormCheckBaseComponent.prototype.markForCheck = function () {
        if (this.changeDetectorRef) {
            this.changeDetectorRef.markForCheck();
        }
    };
    __decorate([
        HostBinding('class.form-check'),
        __metadata("design:type", Object)
    ], ThyFormCheckBaseComponent.prototype, "_isFormCheck", void 0);
    __decorate([
        HostBinding('class.form-check-inline'),
        __metadata("design:type", Object)
    ], ThyFormCheckBaseComponent.prototype, "_isFormCheckInline", void 0);
    __decorate([
        HostBinding('class.form-check-checked'),
        __metadata("design:type", Object)
    ], ThyFormCheckBaseComponent.prototype, "_isChecked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyFormCheckBaseComponent.prototype, "thyInline", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormCheckBaseComponent.prototype, "thyLabelText", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormCheckBaseComponent.prototype, "thyLabelTextTranslateKey", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyFormCheckBaseComponent.prototype, "thyDisabled", null);
    return ThyFormCheckBaseComponent;
}());
export { ThyFormCheckBaseComponent };
export { ɵ0 };
//# sourceMappingURL=base-form-check.component.js.map