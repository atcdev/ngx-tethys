var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, Output, ViewEncapsulation, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { UpdateHostClassService } from '../shared';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_SEARCH_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ThyInputSearchComponent; }),
    multi: true
};
var noop = function () { };
var ɵ0 = noop;
var ThyInputSearchComponent = /** @class */ (function () {
    function ThyInputSearchComponent(cdr) {
        this.cdr = cdr;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.disabled = false;
        this.autoFocus = false;
        this._isSearchContainer = true;
        this._isSearchEllipse = false;
        this.name = '';
        this.placeholder = '';
        this.clear = new EventEmitter();
    }
    Object.defineProperty(ThyInputSearchComponent.prototype, "thyTheme", {
        set: function (value) {
            if (value === 'ellipse') {
                this._isSearchEllipse = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyInputSearchComponent.prototype, "thySearchFocus", {
        set: function (value) {
            this.autoFocus = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyInputSearchComponent.prototype.writeValue = function (value) {
        this.searchText = value;
        this.cdr.markForCheck();
    };
    ThyInputSearchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ThyInputSearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ThyInputSearchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    ThyInputSearchComponent.prototype.searchModelChange = function () {
        this.onChangeCallback(this.searchText);
    };
    ThyInputSearchComponent.prototype.clearSearchText = function (event) {
        event.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.searchText = '';
        this.onChangeCallback(this.searchText);
        this.clear.emit(event);
    };
    __decorate([
        HostBinding('class.input-search-container'),
        __metadata("design:type", Object)
    ], ThyInputSearchComponent.prototype, "_isSearchContainer", void 0);
    __decorate([
        HostBinding('class.input-search-ellipse'),
        __metadata("design:type", Object)
    ], ThyInputSearchComponent.prototype, "_isSearchEllipse", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyInputSearchComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyInputSearchComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputSearchComponent.prototype, "thyTheme", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyInputSearchComponent.prototype, "thySearchFocus", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyInputSearchComponent.prototype, "clear", void 0);
    ThyInputSearchComponent = __decorate([
        Component({
            selector: 'thy-input-search',
            template: "<i class=\"wtf wtf-search-o input-prefix-icon\"></i> <input class=\"input-search-control\" thyInput [name]=\"name\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" [thyAutofocus]=\"autoFocus\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchModelChange()\"> <a *ngIf=\"searchText\" class=\"close input-suffix-icon\" href=\"javascript:;\" (click)=\"clearSearchText($event)\"> <i class=\"wtf wtf-close\"></i> </a>",
            providers: [UpdateHostClassService, CUSTOM_INPUT_SEARCH_CONTROL_VALUE_ACCESSOR],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], ThyInputSearchComponent);
    return ThyInputSearchComponent;
}());
export { ThyInputSearchComponent };
export { ɵ0 };
//# sourceMappingURL=input-search.component.js.map