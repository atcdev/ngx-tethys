var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { mixinDisabled, AnonymousClass } from '../behaviors';
var ThyOptionGroupComponent = /** @class */ (function (_super) {
    __extends(ThyOptionGroupComponent, _super);
    function ThyOptionGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ThyOptionGroupComponent.prototype, "thyDisabled", {
        set: function (value) {
            this.thyDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyOptionGroupComponent = __decorate([
        Component({
            selector: 'thy-list-option-group,[thy-list-option-group]',
            template: '<ng-content></ng-content>',
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    ], ThyOptionGroupComponent);
    return ThyOptionGroupComponent;
}(mixinDisabled(AnonymousClass)));
export { ThyOptionGroupComponent };
//# sourceMappingURL=option-group.component.js.map