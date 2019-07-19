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
var ThySlideBodySectionComponent = /** @class */ (function () {
    function ThySlideBodySectionComponent() {
        this.thySlideBodyItem = true;
        this.hasDivider = true;
    }
    ThySlideBodySectionComponent.prototype.ngOnInit = function () { };
    __decorate([
        HostBinding('class.thy-slide-body-section'),
        __metadata("design:type", Object)
    ], ThySlideBodySectionComponent.prototype, "thySlideBodyItem", void 0);
    __decorate([
        HostBinding('class.thy-slide-body-section-divider'),
        __metadata("design:type", Object)
    ], ThySlideBodySectionComponent.prototype, "hasDivider", void 0);
    ThySlideBodySectionComponent = __decorate([
        Component({
            selector: 'thy-slide-body-section',
            template: '<ng-content></ng-content>'
        })
    ], ThySlideBodySectionComponent);
    return ThySlideBodySectionComponent;
}());
export { ThySlideBodySectionComponent };
//# sourceMappingURL=slide-body-section.component.js.map