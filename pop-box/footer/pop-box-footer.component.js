var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { inputValueToBoolean } from '../../util/helpers';
var ThyPopBoxFooter = /** @class */ (function () {
    function ThyPopBoxFooter() {
        this.isPopBoxFooter = true;
        this._hasNoPaddingTop = true;
    }
    Object.defineProperty(ThyPopBoxFooter.prototype, "thyNoPaddingTop", {
        set: function (value) {
            this._hasNoPaddingTop = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.pop-box-footer'),
        __metadata("design:type", Object)
    ], ThyPopBoxFooter.prototype, "isPopBoxFooter", void 0);
    __decorate([
        HostBinding('class.no-padding-top'),
        __metadata("design:type", Object)
    ], ThyPopBoxFooter.prototype, "_hasNoPaddingTop", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyPopBoxFooter.prototype, "thyNoPaddingTop", null);
    ThyPopBoxFooter = __decorate([
        Component({
            selector: 'thy-pop-box-footer',
            template: '<ng-content></ng-content>',
            encapsulation: ViewEncapsulation.None
        })
    ], ThyPopBoxFooter);
    return ThyPopBoxFooter;
}());
export { ThyPopBoxFooter };
//# sourceMappingURL=pop-box-footer.component.js.map