var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding } from '@angular/core';
var ThyMenuComponent = /** @class */ (function () {
    function ThyMenuComponent() {
        this.isThyMenu = true;
    }
    ThyMenuComponent.prototype.ngOnInit = function () { };
    __decorate([
        HostBinding('class.thy-menu'),
        __metadata("design:type", Object)
    ], ThyMenuComponent.prototype, "isThyMenu", void 0);
    ThyMenuComponent = __decorate([
        Component({
            selector: 'thy-menu,[thy-menu],[thyMenu]',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [])
    ], ThyMenuComponent);
    return ThyMenuComponent;
}());
export { ThyMenuComponent };
//# sourceMappingURL=menu.component.js.map