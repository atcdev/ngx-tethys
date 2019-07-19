var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
var ThyPopBoxHeader = /** @class */ (function () {
    function ThyPopBoxHeader() {
        this.isPopBoxHeader = true;
    }
    __decorate([
        HostBinding('class.pop-box-header'),
        __metadata("design:type", Object)
    ], ThyPopBoxHeader.prototype, "isPopBoxHeader", void 0);
    ThyPopBoxHeader = __decorate([
        Component({
            selector: 'thy-pop-box-header',
            template: '<ng-content></ng-content>',
            encapsulation: ViewEncapsulation.None
        })
    ], ThyPopBoxHeader);
    return ThyPopBoxHeader;
}());
export { ThyPopBoxHeader };
//# sourceMappingURL=pop-box-header.component.js.map