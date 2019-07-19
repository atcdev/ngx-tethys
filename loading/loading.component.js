var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var ThyLoadingComponent = /** @class */ (function () {
    function ThyLoadingComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.loadingClassName = true;
    }
    Object.defineProperty(ThyLoadingComponent.prototype, "thyDone", {
        set: function (value) {
            this.isDone = inputValueToBoolean(value);
            this.changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyLoadingComponent.prototype, "thyTip", {
        set: function (value) {
            this.tip = value;
            this.changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyLoadingComponent.prototype, "thyIsMask", {
        // 不传或穿false,没有遮罩层，加载完成出现内容
        set: function (value) {
            this.isMask = inputValueToBoolean(value);
            this.changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyLoadingComponent.prototype, "thyDone", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyLoadingComponent.prototype, "thyTip", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyLoadingComponent.prototype, "thyIsMask", null);
    __decorate([
        HostBinding('class.thy-loading'),
        __metadata("design:type", Object)
    ], ThyLoadingComponent.prototype, "loadingClassName", void 0);
    ThyLoadingComponent = __decorate([
        Component({
            selector: 'thy-loading',
            template: "<div [class.thy-loading-mask]=\"isMask && !isDone\"> <div class=\"thy-loading-indicator\" *ngIf=\"!isDone\"> <h4> <span [style.display]=\"tip ? 'inline' : 'none'\">{{tip}}</span> <div class=\"thy-loading-ellipsis\"> <span class=\"thy-spot\"></span> </div> </h4> </div> <ng-content *ngIf=\"isMask || isDone\"></ng-content> </div> ",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], ThyLoadingComponent);
    return ThyLoadingComponent;
}());
export { ThyLoadingComponent };
//# sourceMappingURL=loading.component.js.map