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
var ThyCardContentComponent = /** @class */ (function () {
    function ThyCardContentComponent() {
        this.thyCardContentClass = true;
        this.alignmentClass = false;
        this.scrollClassName = false;
        this._thySizeSm = false;
    }
    Object.defineProperty(ThyCardContentComponent.prototype, "thyAlign", {
        set: function (value) {
            this.alignmentClass = value === 'title';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCardContentComponent.prototype, "thyScroll", {
        set: function (value) {
            this.scrollClassName = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCardContentComponent.prototype, "thySize", {
        set: function (value) {
            this._thySizeSm = (value === 'sm');
        },
        enumerable: true,
        configurable: true
    });
    ThyCardContentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        HostBinding('class.thy-card-content'),
        __metadata("design:type", Object)
    ], ThyCardContentComponent.prototype, "thyCardContentClass", void 0);
    __decorate([
        HostBinding('class.thy-card-content--alignment-title'),
        __metadata("design:type", Object)
    ], ThyCardContentComponent.prototype, "alignmentClass", void 0);
    __decorate([
        Input('thyAlign'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyCardContentComponent.prototype, "thyAlign", null);
    __decorate([
        HostBinding('class.thy-card-content--scroll'),
        __metadata("design:type", Object)
    ], ThyCardContentComponent.prototype, "scrollClassName", void 0);
    __decorate([
        Input('thyScroll'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyCardContentComponent.prototype, "thyScroll", null);
    __decorate([
        HostBinding('class.thy-card-content--sm'),
        __metadata("design:type", Object)
    ], ThyCardContentComponent.prototype, "_thySizeSm", void 0);
    __decorate([
        Input('thySize'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyCardContentComponent.prototype, "thySize", null);
    ThyCardContentComponent = __decorate([
        Component({
            selector: 'thy-card-content',
            preserveWhitespaces: false,
            template: "\n    <ng-content></ng-content>\n    "
        })
    ], ThyCardContentComponent);
    return ThyCardContentComponent;
}());
export { ThyCardContentComponent };
//# sourceMappingURL=content.component.js.map