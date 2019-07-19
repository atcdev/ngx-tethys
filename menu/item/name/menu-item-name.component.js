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
var ThyMenuItemNameComponent = /** @class */ (function () {
    function ThyMenuItemNameComponent() {
        this.isThyMenuItemName = true;
        this.thyOverflowEllipsis = true;
    }
    ThyMenuItemNameComponent.prototype.ngOnInit = function () { };
    __decorate([
        HostBinding('class.thy-menu-item-name'),
        __metadata("design:type", Object)
    ], ThyMenuItemNameComponent.prototype, "isThyMenuItemName", void 0);
    __decorate([
        HostBinding('class.thy-menu-item-name-ellipsis'),
        Input(),
        __metadata("design:type", Object)
    ], ThyMenuItemNameComponent.prototype, "thyOverflowEllipsis", void 0);
    ThyMenuItemNameComponent = __decorate([
        Component({
            selector: 'thy-menu-item-name,[thy-menu-item-name],[thyMenuItemName]',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [])
    ], ThyMenuItemNameComponent);
    return ThyMenuItemNameComponent;
}());
export { ThyMenuItemNameComponent };
//# sourceMappingURL=menu-item-name.component.js.map