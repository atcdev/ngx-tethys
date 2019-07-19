var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { helpers } from '../util';
var ThySwitchComponent = /** @class */ (function () {
    function ThySwitchComponent() {
        this.type = 'primary';
        this.size = '';
        this.disabled = false;
        this.typeArray = ['primary', 'info', 'warning', 'danger'];
        this.sizeArray = ['lg', '', 'sm'];
        this.thyChange = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    ThySwitchComponent_1 = ThySwitchComponent;
    Object.defineProperty(ThySwitchComponent.prototype, "thyType", {
        set: function (value) {
            if (!this.typeArray.includes(value)) {
                value = 'primary';
            }
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySwitchComponent.prototype, "thySize", {
        set: function (value) {
            if (!this.sizeArray.includes(value)) {
                value = '';
            }
            this.size = value;
        },
        enumerable: true,
        configurable: true
    });
    ThySwitchComponent.prototype.ngOnInit = function () {
        this.setClassNames();
    };
    ThySwitchComponent.prototype.ngOnChanges = function (changes) {
        // 兼容降级后的Switch，使用onChanges
        if (changes.thyDisabled) {
            var value = changes.thyDisabled.currentValue;
            this.disabled = helpers.isBoolean(value) ? Boolean(value) : (value === 'true' || value === '1');
            this.setClassNames();
        }
    };
    ThySwitchComponent.prototype.writeValue = function (value) {
        this.model = value;
        // this.setClassNames();
    };
    ThySwitchComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ThySwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    ThySwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.setClassNames();
    };
    ThySwitchComponent.prototype.toggle = function (event) {
        this.model = !this.model;
        this.onModelChange(this.model);
        this.thyChange.emit(event);
    };
    ThySwitchComponent.prototype.setClassNames = function () {
        this.classNames = ["thy-switch-" + this.type];
        if (this.size) {
            this.classNames.push("thy-switch-" + this.size);
        }
        if (this.disabled) {
            this.classNames.push("thy-switch-disabled");
            if (this.model) {
                this.classNames.push("thy-switch-disabled-true");
            }
        }
    };
    var ThySwitchComponent_1;
    __decorate([
        ViewChild('switch'),
        __metadata("design:type", ElementRef)
    ], ThySwitchComponent.prototype, "switchElementRef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThySwitchComponent.prototype, "thyType", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThySwitchComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThySwitchComponent.prototype, "thyDisabled", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThySwitchComponent.prototype, "thyChange", void 0);
    ThySwitchComponent = ThySwitchComponent_1 = __decorate([
        Component({
            selector: 'thy-switch',
            template: "<label #switch class=\"thy-switch\" [ngClass]=\"classNames\"> <input type=\"checkbox\" [disabled]=\"disabled\" class=\"thy-switch-input\" [checked]=\"model\" (change)=\"toggle($event)\"> <span class=\"thy-switch-label\"></span> <span class=\"thy-switch-handle\"></span> </label>",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThySwitchComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ThySwitchComponent);
    return ThySwitchComponent;
}());
export { ThySwitchComponent };
//# sourceMappingURL=switch.component.js.map