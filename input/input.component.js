var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, Output, ContentChild, TemplateRef, ViewEncapsulation, EventEmitter, forwardRef, ViewChild, Renderer2 } from '@angular/core';
import { UpdateHostClassService } from '../shared';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ThyInputComponent; }),
    multi: true
};
var noop = function () { };
var ɵ0 = noop;
var password = 'password';
var ThyInputComponent = /** @class */ (function () {
    function ThyInputComponent(renderer) {
        this.renderer = renderer;
        this.placeholder = '';
        this.thyAutofocus = false;
        this.readonly = false;
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this._type = 'text';
        this.disabled = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this._isSearchContainer = true;
        this._isFormControl = true;
        this._isFocus = false;
    }
    Object.defineProperty(ThyInputComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            if (this.isPassword(value)) {
                this.appendTemplate = this.eyeTemplate;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyInputComponent.prototype, "thyType", {
        set: function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyInputComponent.prototype.ngAfterViewInit = function () { };
    ThyInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    ThyInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ThyInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ThyInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    ThyInputComponent.prototype.onModelChange = function () {
        this.onChangeCallback(this.value);
    };
    ThyInputComponent.prototype.onInputFocus = function (event) {
        this._isFocus = true;
        this.showLabel = true;
        this.focus.emit(event);
    };
    ThyInputComponent.prototype.onInputBlur = function (event) {
        this._isFocus = false;
        this.showLabel = false;
        this.blur.emit(event);
    };
    ThyInputComponent.prototype.isPassword = function (value) {
        return value === password;
    };
    ThyInputComponent.prototype.togglePasswordType = function () {
        this.type = this.isPassword(this.type) ? 'text' : 'password';
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyInputComponent.prototype, "thySize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyInputComponent.prototype, "thyAutofocus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputComponent.prototype, "type", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputComponent.prototype, "thyType", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyInputComponent.prototype, "thyLabelText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyInputComponent.prototype, "readonly", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyInputComponent.prototype, "focus", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyInputComponent.prototype, "blur", void 0);
    __decorate([
        ContentChild('append'),
        __metadata("design:type", TemplateRef)
    ], ThyInputComponent.prototype, "appendTemplate", void 0);
    __decorate([
        ContentChild('prepend'),
        __metadata("design:type", TemplateRef)
    ], ThyInputComponent.prototype, "prependTemplate", void 0);
    __decorate([
        ViewChild('eye'),
        __metadata("design:type", TemplateRef)
    ], ThyInputComponent.prototype, "eyeTemplate", void 0);
    __decorate([
        HostBinding('class.thy-input'),
        __metadata("design:type", Object)
    ], ThyInputComponent.prototype, "_isSearchContainer", void 0);
    __decorate([
        HostBinding('class.form-control'),
        __metadata("design:type", Object)
    ], ThyInputComponent.prototype, "_isFormControl", void 0);
    __decorate([
        HostBinding('class.form-control-active'),
        __metadata("design:type", Object)
    ], ThyInputComponent.prototype, "_isFocus", void 0);
    ThyInputComponent = __decorate([
        Component({
            selector: 'thy-input',
            template: "<div #prepend class=\"input-prepend\" *ngIf=\"prependTemplate\"> <ng-template *ngTemplateOutlet=\"prependTemplate\"></ng-template> </div> <span class=\"input-label input-label-{{thySize}}\" [class.active]=\"showLabel\">{{ thyLabelText }}</span> <input #input thyInput [thySize]=\"thySize\" [thyAutofocus]=\"thyAutofocus\" [type]=\"type\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" [(ngModel)]=\"value\" (ngModelChange)=\"onModelChange()\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\"> <div #append class=\"input-append\" *ngIf=\"appendTemplate\"> <ng-template *ngTemplateOutlet=\"appendTemplate\"></ng-template> </div> <ng-template #eye> <a href=\"javascript:;\" class=\"link-secondary input-password-icon\" (click)=\"togglePasswordType()\"> <i *ngIf=\"isPassword(type)\" href=\"javascript:;\" class=\"wtf wtf-pwd-invisible\"></i> <i *ngIf=\"!isPassword(type)\" href=\"javascript:;\" class=\"wtf wtf-pwd-visible\"></i> </a> </ng-template> ",
            providers: [UpdateHostClassService, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Renderer2])
    ], ThyInputComponent);
    return ThyInputComponent;
}());
export { ThyInputComponent };
export { ɵ0 };
//# sourceMappingURL=input.component.js.map