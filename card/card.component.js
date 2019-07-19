var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var ThyCardComponent = /** @class */ (function () {
    function ThyCardComponent() {
        this.thyCardClass = true;
        this.clearLeftRightPadding = false;
    }
    Object.defineProperty(ThyCardComponent.prototype, "thyHasLeftRightPadding", {
        set: function (value) {
            this.clearLeftRightPadding = !inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.thy-card'),
        __metadata("design:type", Object)
    ], ThyCardComponent.prototype, "thyCardClass", void 0);
    __decorate([
        HostBinding('class.thy-card--clear-left-right-padding'),
        __metadata("design:type", Object)
    ], ThyCardComponent.prototype, "clearLeftRightPadding", void 0);
    __decorate([
        Input('thyHasLeftRightPadding'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyCardComponent.prototype, "thyHasLeftRightPadding", null);
    ThyCardComponent = __decorate([
        Component({
            selector: 'thy-card',
            template: "\n    <ng-content></ng-content>\n  "
        })
    ], ThyCardComponent);
    return ThyCardComponent;
}());
export { ThyCardComponent };
//# sourceMappingURL=card.component.js.map