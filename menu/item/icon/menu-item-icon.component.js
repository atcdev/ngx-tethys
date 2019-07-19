var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';
var ThyMenuItemIconComponent = /** @class */ (function () {
    function ThyMenuItemIconComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isThyMenuItemIcon = true;
    }
    Object.defineProperty(ThyMenuItemIconComponent.prototype, "thyColor", {
        set: function (value) {
            if (value) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'color', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyMenuItemIconComponent.prototype.ngOnInit = function () { };
    __decorate([
        HostBinding('class.thy-menu-item-icon'),
        __metadata("design:type", Object)
    ], ThyMenuItemIconComponent.prototype, "isThyMenuItemIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyMenuItemIconComponent.prototype, "thyColor", null);
    ThyMenuItemIconComponent = __decorate([
        Component({
            selector: 'thy-menu-item-icon,[thy-menu-item-icon],[thyMenuItemIcon]',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], ThyMenuItemIconComponent);
    return ThyMenuItemIconComponent;
}());
export { ThyMenuItemIconComponent };
//# sourceMappingURL=menu-item-icon.component.js.map