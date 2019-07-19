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
var ThyNotifyContainerComponent = /** @class */ (function () {
    function ThyNotifyContainerComponent() {
        this.className = true;
    }
    ThyNotifyContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initialState.notifyQueue$.subscribe(function (data) {
            _this.notifyQueue = data;
        });
    };
    __decorate([
        HostBinding('class.thy-notify-root'),
        __metadata("design:type", Object)
    ], ThyNotifyContainerComponent.prototype, "className", void 0);
    ThyNotifyContainerComponent = __decorate([
        Component({
            selector: 'thy-notify-container',
            template: "<thy-notify *ngFor=\"let item of notifyQueue\" [thyOption]=\"item\"></thy-notify>"
        }),
        __metadata("design:paramtypes", [])
    ], ThyNotifyContainerComponent);
    return ThyNotifyContainerComponent;
}());
export { ThyNotifyContainerComponent };
//# sourceMappingURL=notify.container.component.js.map