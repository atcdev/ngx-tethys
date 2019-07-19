var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, } from '@angular/core';
import { inputValueToBoolean } from '../../util/helpers';
var DialogFooterComponent = /** @class */ (function () {
    function DialogFooterComponent() {
        this._isDialogFooter = true;
        this.showBorderTop = false;
    }
    Object.defineProperty(DialogFooterComponent.prototype, "thyShowBorderTop", {
        set: function (value) {
            this.showBorderTop = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding("class.dialog-footer"),
        __metadata("design:type", Object)
    ], DialogFooterComponent.prototype, "_isDialogFooter", void 0);
    __decorate([
        HostBinding("class.dialog-footer-border-top"),
        __metadata("design:type", Object)
    ], DialogFooterComponent.prototype, "showBorderTop", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogFooterComponent.prototype, "thyShowBorderTop", null);
    DialogFooterComponent = __decorate([
        Component({
            selector: 'thy-dialog-footer',
            template: '<ng-content></ng-content>',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            exportAs: 'thyDialogFooter'
        })
    ], DialogFooterComponent);
    return DialogFooterComponent;
}());
export { DialogFooterComponent };
//# sourceMappingURL=dialog-footer.component.js.map