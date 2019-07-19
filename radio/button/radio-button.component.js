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
import { Component, HostBinding, HostListener, Input, Optional, ChangeDetectorRef } from '@angular/core';
import { ThyTranslate } from '../../shared';
import { ThyRadioGroupComponent } from './../group/radio-group.component';
import { inputValueToBoolean } from '../../util/helpers';
import { ThyRadioComponent } from '../radio.component';
var ThyRadioButtonComponent = /** @class */ (function (_super) {
    __extends(ThyRadioButtonComponent, _super);
    function ThyRadioButtonComponent(thyTranslate, thyRadioGroupComponent, changeDetectorRef) {
        var _this = _super.call(this, thyTranslate, thyRadioGroupComponent, changeDetectorRef) || this;
        _this.isButton = true;
        _this.isActive = false;
        return _this;
    }
    Object.defineProperty(ThyRadioButtonComponent.prototype, "thyChecked", {
        set: function (value) {
            this.isActive = !!value;
            this.writeValue(inputValueToBoolean(value));
        },
        enumerable: true,
        configurable: true
    });
    ThyRadioButtonComponent.prototype.ngOnInit = function () {
        this._isFormCheck = false;
        if (this.thyRadioGroupComponent) {
            this.thyRadioGroupComponent.addRadio(this);
            this.thyRadioGroupComponent.setGroup();
        }
    };
    ThyRadioButtonComponent.prototype.click = function ($event) {
        this.change();
    };
    __decorate([
        HostBinding('class.btn'),
        __metadata("design:type", Object)
    ], ThyRadioButtonComponent.prototype, "isButton", void 0);
    __decorate([
        HostBinding('class.active'),
        __metadata("design:type", Object)
    ], ThyRadioButtonComponent.prototype, "isActive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyRadioButtonComponent.prototype, "thyValue", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ThyRadioButtonComponent.prototype, "click", null);
    ThyRadioButtonComponent = __decorate([
        Component({
            selector: '[thy-radio-button],[thyRadioButton]',
            template: "<ng-container> {{ _labelText }}</ng-container> <ng-content></ng-content> "
        }),
        __param(1, Optional()),
        __metadata("design:paramtypes", [ThyTranslate,
            ThyRadioGroupComponent,
            ChangeDetectorRef])
    ], ThyRadioButtonComponent);
    return ThyRadioButtonComponent;
}(ThyRadioComponent));
export { ThyRadioButtonComponent };
//# sourceMappingURL=radio-button.component.js.map