var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { UpdateHostClassService } from '../shared';
var buttonGroupSizeMap = {
    sm: ['btn-group-sm'],
    lg: ['btn-group-lg']
};
var buttonGroupTypeMap = {
    'outline-primary': ['btn-group-outline-primary'],
    'outline-default': ['btn-group-outline-default'],
};
var ThyButtonGroupComponent = /** @class */ (function () {
    function ThyButtonGroupComponent(updateHostClassService, elementRef) {
        this.updateHostClassService = updateHostClassService;
        this.elementRef = elementRef;
        this._isButtonGroup = true;
        this.updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    Object.defineProperty(ThyButtonGroupComponent.prototype, "thySize", {
        set: function (size) {
            this._size = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonGroupComponent.prototype, "thyType", {
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    ThyButtonGroupComponent.prototype.ngOnInit = function () {
        this._setClasses();
    };
    ThyButtonGroupComponent.prototype._setClasses = function () {
        var classNames = [];
        if (buttonGroupTypeMap[this._type]) {
            classNames = buttonGroupTypeMap[this._type].slice();
        }
        if (buttonGroupSizeMap[this._size]) {
            classNames.push(buttonGroupSizeMap[this._size]);
        }
        this.updateHostClassService.updateClass(classNames);
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonGroupComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonGroupComponent.prototype, "thyType", null);
    __decorate([
        HostBinding('class.btn-group'),
        __metadata("design:type", Object)
    ], ThyButtonGroupComponent.prototype, "_isButtonGroup", void 0);
    ThyButtonGroupComponent = __decorate([
        Component({
            selector: 'thy-button-group',
            template: '<ng-content></ng-content>',
            providers: [
                UpdateHostClassService
            ],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [UpdateHostClassService,
            ElementRef])
    ], ThyButtonGroupComponent);
    return ThyButtonGroupComponent;
}());
export { ThyButtonGroupComponent };
//# sourceMappingURL=button-group.component.js.map