var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, HostBinding } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var ThyNavLinkDirective = /** @class */ (function () {
    function ThyNavLinkDirective() {
        this.navLinkActive = false;
        this.navLinkClass = true;
        // @HostBinding('attr.href') navLinkHref = 'javascript:;';
    }
    Object.defineProperty(ThyNavLinkDirective.prototype, "thyNavLinkActive", {
        set: function (active) {
            this.navLinkActive = inputValueToBoolean(active);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyNavLinkDirective.prototype, "thyNavLinkActive", null);
    __decorate([
        HostBinding('class.active'),
        __metadata("design:type", Object)
    ], ThyNavLinkDirective.prototype, "navLinkActive", void 0);
    __decorate([
        HostBinding('class.nav-link'),
        __metadata("design:type", Object)
    ], ThyNavLinkDirective.prototype, "navLinkClass", void 0);
    ThyNavLinkDirective = __decorate([
        Directive({
            selector: '[thyNavLink]',
        })
    ], ThyNavLinkDirective);
    return ThyNavLinkDirective;
}());
export { ThyNavLinkDirective };
//# sourceMappingURL=nav-link.directive.js.map