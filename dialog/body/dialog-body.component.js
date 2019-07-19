var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding } from '@angular/core';
import { ThyDialog } from '../dialog.service';
import { inputValueToBoolean } from '../../util/helpers';
var DialogBodyComponent = /** @class */ (function () {
    function DialogBodyComponent(dialog) {
        this.dialog = dialog;
        this._isDialogBody = true;
        this.thyClearPaddingClassName = false;
    }
    Object.defineProperty(DialogBodyComponent.prototype, "thyClearPadding", {
        set: function (value) {
            this.thyClearPaddingClassName = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    DialogBodyComponent.prototype.ngOnInit = function () { };
    __decorate([
        HostBinding("class.dialog-body"),
        __metadata("design:type", Object)
    ], DialogBodyComponent.prototype, "_isDialogBody", void 0);
    __decorate([
        HostBinding("class.dialog-body-clear-padding"),
        __metadata("design:type", Object)
    ], DialogBodyComponent.prototype, "thyClearPaddingClassName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogBodyComponent.prototype, "thyClearPadding", null);
    DialogBodyComponent = __decorate([
        Component({
            selector: 'thy-dialog-body',
            template: '<ng-content></ng-content>',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            exportAs: 'thyDialogBody'
        }),
        __metadata("design:paramtypes", [ThyDialog])
    ], DialogBodyComponent);
    return DialogBodyComponent;
}());
export { DialogBodyComponent };
//# sourceMappingURL=dialog-body.component.js.map