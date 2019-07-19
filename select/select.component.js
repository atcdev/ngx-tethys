var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef, HostBinding, Input, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UpdateHostClassService } from '../shared/update-host-class.service';
var noop = function () {
};
var ɵ0 = noop;
var ThySelectComponent = /** @class */ (function () {
    function ThySelectComponent(elementRef, updateHostClassService) {
        this.elementRef = elementRef;
        this.updateHostClassService = updateHostClassService;
        // The internal data model
        this._innerValue = null;
        this._disabled = false;
        this._expandOptions = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this._isSelect = true;
        this.thyAllowClear = false;
        this.updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    ThySelectComponent_1 = ThySelectComponent;
    Object.defineProperty(ThySelectComponent.prototype, "thySize", {
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    ThySelectComponent.prototype.writeValue = function (obj) {
        if (obj !== this._innerValue) {
            this._innerValue = obj;
        }
    };
    ThySelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ThySelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ThySelectComponent.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
    };
    ThySelectComponent.prototype.ngModelChange = function () {
        this.onChangeCallback(this._innerValue);
    };
    ThySelectComponent.prototype.ngOnInit = function () {
        var classes = this._size ? ["thy-select-" + this._size] : [];
        this.updateHostClassService.updateClass(classes);
    };
    ThySelectComponent.prototype.clearSelectValue = function (event) {
        event.stopPropagation();
        this._innerValue = '';
        this.onChangeCallback(this._innerValue);
    };
    var ThySelectComponent_1;
    __decorate([
        HostBinding('class.thy-select'),
        __metadata("design:type", Object)
    ], ThySelectComponent.prototype, "_isSelect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThySelectComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThySelectComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThySelectComponent.prototype, "thyAllowClear", void 0);
    ThySelectComponent = ThySelectComponent_1 = __decorate([
        Component({
            selector: 'thy-select',
            template: "<select thyInput [thySize]=\"_size\" [disabled]=\"_disabled\" [(ngModel)]=\"_innerValue\" (ngModelChange)=\"ngModelChange()\"> <ng-content></ng-content> </select> <a class=\"thy-select-remove remove-link\" href=\"javascript:;\" (click)=\"clearSelectValue($event)\" *ngIf=\"thyAllowClear && _innerValue\"> <i class=\"wtf wtf-times-circle\"></i> </a> ",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThySelectComponent_1; }),
                    multi: true
                },
                UpdateHostClassService
            ]
        }),
        __metadata("design:paramtypes", [ElementRef,
            UpdateHostClassService])
    ], ThySelectComponent);
    return ThySelectComponent;
}());
export { ThySelectComponent };
export { ɵ0 };
//# sourceMappingURL=select.component.js.map