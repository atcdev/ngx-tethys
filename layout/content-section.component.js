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
var ThyContentSectionComponent = /** @class */ (function () {
    function ThyContentSectionComponent() {
        this.thyLayoutContentSectionClass = true;
    }
    __decorate([
        HostBinding('class.thy-layout-content-section'),
        __metadata("design:type", Object)
    ], ThyContentSectionComponent.prototype, "thyLayoutContentSectionClass", void 0);
    ThyContentSectionComponent = __decorate([
        Component({
            selector: 'thy-content-section',
            preserveWhitespaces: false,
            template: "\n    <ng-content></ng-content>\n    "
        })
    ], ThyContentSectionComponent);
    return ThyContentSectionComponent;
}());
export { ThyContentSectionComponent };
//# sourceMappingURL=content-section.component.js.map