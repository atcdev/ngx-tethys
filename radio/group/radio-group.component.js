var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef, HostBinding, Input, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UpdateHostClassService } from '../../shared';
var buttonGroupSizeMap = {
    sm: ['btn-group-sm'],
    lg: ['btn-group-lg']
};
var radioGroupLayoutMap = {
    flex: ['radio-group-layout-flex']
};
var ThyRadioGroupComponent = /** @class */ (function () {
    function ThyRadioGroupComponent(updateHostClassService, elementRef, changeDetectorRef) {
        this.updateHostClassService = updateHostClassService;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.thyRadioGroup = true;
        this.isButtonGroup = false;
        this.isButtonGroupOutline = false;
        this.radios = [];
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    ThyRadioGroupComponent_1 = ThyRadioGroupComponent;
    Object.defineProperty(ThyRadioGroupComponent.prototype, "thySize", {
        set: function (size) {
            this._size = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyRadioGroupComponent.prototype, "thyLayout", {
        set: function (layout) {
            this._layout = layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyRadioGroupComponent.prototype, "thyDisabled", {
        set: function (value) {
            this.setDisabledState(value);
        },
        enumerable: true,
        configurable: true
    });
    ThyRadioGroupComponent.prototype.addRadio = function (radio) {
        this.radios.push(radio);
        radio.thyChecked = radio.thyValue === this._innerValue;
    };
    ThyRadioGroupComponent.prototype.updateValue = function (value, emit) {
        var _this = this;
        this._innerValue = value;
        this.radios.forEach(function (radio) {
            radio.thyChecked = radio.thyValue === _this._innerValue;
        });
        if (emit) {
            this.onChange(value);
        }
        this.changeDetectorRef.detectChanges();
    };
    ThyRadioGroupComponent.prototype.writeValue = function (value) {
        this.updateValue(value, false);
    };
    ThyRadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ThyRadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ThyRadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.radios.forEach(function (radio) {
            radio.setDisabledState(isDisabled);
        });
    };
    ThyRadioGroupComponent.prototype.setGroup = function () {
        if (!this.isButtonGroup && !this.isButtonGroupOutline) {
            this.isButtonGroup = true;
            this.isButtonGroupOutline = true;
        }
    };
    ThyRadioGroupComponent.prototype.ngOnInit = function () {
        this._setClasses();
    };
    ThyRadioGroupComponent.prototype._setClasses = function () {
        var classNames = [];
        if (buttonGroupSizeMap[this._size]) {
            classNames.push(buttonGroupSizeMap[this._size]);
        }
        if (radioGroupLayoutMap[this._layout]) {
            classNames.push(radioGroupLayoutMap[this._layout]);
        }
        this.updateHostClassService.updateClass(classNames);
    };
    var ThyRadioGroupComponent_1;
    __decorate([
        HostBinding('class.thy-radio-group'),
        __metadata("design:type", Object)
    ], ThyRadioGroupComponent.prototype, "thyRadioGroup", void 0);
    __decorate([
        HostBinding('class.btn-group'),
        __metadata("design:type", Object)
    ], ThyRadioGroupComponent.prototype, "isButtonGroup", void 0);
    __decorate([
        HostBinding('class.btn-group-outline-default'),
        __metadata("design:type", Object)
    ], ThyRadioGroupComponent.prototype, "isButtonGroupOutline", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyRadioGroupComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyRadioGroupComponent.prototype, "thyLayout", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyRadioGroupComponent.prototype, "thyDisabled", null);
    ThyRadioGroupComponent = ThyRadioGroupComponent_1 = __decorate([
        Component({
            selector: 'thy-radio-group',
            template: "<ng-content></ng-content>",
            providers: [
                UpdateHostClassService,
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyRadioGroupComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [UpdateHostClassService,
            ElementRef,
            ChangeDetectorRef])
    ], ThyRadioGroupComponent);
    return ThyRadioGroupComponent;
}());
export { ThyRadioGroupComponent };
//# sourceMappingURL=radio-group.component.js.map