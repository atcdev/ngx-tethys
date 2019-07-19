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
var ThyListComponent = /** @class */ (function () {
    function ThyListComponent() {
        this._isList = true;
    }
    __decorate([
        HostBinding("class.thy-list"),
        __metadata("design:type", Object)
    ], ThyListComponent.prototype, "_isList", void 0);
    ThyListComponent = __decorate([
        Component({
            selector: 'thy-list',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], ThyListComponent);
    return ThyListComponent;
}());
export { ThyListComponent };
//# sourceMappingURL=list.component.js.map