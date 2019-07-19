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
import { ThyTranslate } from '../shared/translate';
var ThyPropertyOperationGroupComponent = /** @class */ (function () {
    function ThyPropertyOperationGroupComponent(thyTranslate) {
        this.thyTranslate = thyTranslate;
        this._isPropertyOperationGroup = true;
    }
    __decorate([
        HostBinding('class.thy-property-operation-group'),
        __metadata("design:type", Object)
    ], ThyPropertyOperationGroupComponent.prototype, "_isPropertyOperationGroup", void 0);
    ThyPropertyOperationGroupComponent = __decorate([
        Component({
            selector: 'thy-property-operation-group',
            template: "<ng-content></ng-content> "
        }),
        __metadata("design:paramtypes", [ThyTranslate])
    ], ThyPropertyOperationGroupComponent);
    return ThyPropertyOperationGroupComponent;
}());
export { ThyPropertyOperationGroupComponent };
//# sourceMappingURL=property-operation-group.component.js.map