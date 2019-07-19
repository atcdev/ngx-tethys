var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var ModalBodyComponent = /** @class */ (function () {
    function ModalBodyComponent() {
        this.thyClearPaddingClassName = false;
    }
    Object.defineProperty(ModalBodyComponent.prototype, "thyClearPadding", {
        set: function (value) {
            this.thyClearPaddingClassName = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ModalBodyComponent.prototype, "thyClearPadding", null);
    ModalBodyComponent = __decorate([
        Component({
            selector: 'thy-modal-body',
            template: "<div class=\"modal-body\" [ngClass]=\"{'modal-body--clear-padding':thyClearPaddingClassName}\"><ng-content></ng-content></div>"
        }),
        __metadata("design:paramtypes", [])
    ], ModalBodyComponent);
    return ModalBodyComponent;
}());
export { ModalBodyComponent };
//# sourceMappingURL=modal-body.component.js.map