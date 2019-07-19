var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ElementRef, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
import { UpdateHostClassService } from '../shared/update-host-class.service';
import { ThyAvatarService } from './avatar.service';
var sizeArray = [22, 24, 30, 38, 48, 68, 110, 160];
var sizeMap = {
    xs: 24,
    sm: 30,
    md: 38,
    lg: 48
};
var DEFAULT_SIZE = 38;
var ThyAvatarComponent = /** @class */ (function () {
    function ThyAvatarComponent(updateHostClassService, elementRef, thyAvatarService) {
        this.updateHostClassService = updateHostClassService;
        this.elementRef = elementRef;
        this.thyAvatarService = thyAvatarService;
        this._showRemove = false;
        this._isAvatar = true;
        this.thyOnRemove = new EventEmitter();
        updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    Object.defineProperty(ThyAvatarComponent.prototype, "thySrc", {
        set: function (value) {
            this._setAvatarSrc(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyAvatarComponent.prototype, "thyName", {
        set: function (value) {
            this._name = value;
            this._setAvatarName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyAvatarComponent.prototype, "thySize", {
        set: function (value) {
            if (sizeMap[value]) {
                this._setAvatarSize(sizeMap[value]);
            }
            else {
                this._setAvatarSize(value * 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyAvatarComponent.prototype, "thyShowRemove", {
        set: function (value) {
            this._showRemove = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    ThyAvatarComponent.prototype._setAvatarSize = function (size) {
        if (sizeArray.indexOf(size) > -1) {
            this._size = size;
        }
        else if (size > sizeArray[sizeArray.length - 1]) {
            this._size = sizeArray[sizeArray.length - 1];
        }
        else {
            this._size = DEFAULT_SIZE;
        }
    };
    ThyAvatarComponent.prototype._setAvatarSrc = function (src) {
        if (src && this.thyAvatarService.ignoreAvatarSrcPaths.indexOf(src) < 0) {
            this._src = src;
        }
        else {
            this._src = null;
        }
    };
    ThyAvatarComponent.prototype._setAvatarName = function () {
        this.avatarName = this._name;
    };
    ThyAvatarComponent.prototype.ngOnInit = function () {
        if (!this._size) {
            this._setAvatarSize(DEFAULT_SIZE);
        }
        this.updateHostClassService.updateClass(["thy-avatar-" + this._size]);
    };
    ThyAvatarComponent.prototype.remove = function ($event) {
        this.thyOnRemove.emit($event);
    };
    __decorate([
        HostBinding('class.thy-avatar'),
        __metadata("design:type", Object)
    ], ThyAvatarComponent.prototype, "_isAvatar", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyAvatarComponent.prototype, "thyOnRemove", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyAvatarComponent.prototype, "thyShowName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyAvatarComponent.prototype, "thySrc", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyAvatarComponent.prototype, "thyName", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyAvatarComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyAvatarComponent.prototype, "thyShowRemove", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyAvatarComponent.prototype, "thyImgClass", void 0);
    ThyAvatarComponent = __decorate([
        Component({
            selector: 'thy-avatar',
            template: "<img *ngIf=\"_src\" [src]=\"_src | thyAvatarSrc: _size\" class=\"avatar-avatar\" [ngClass]=\"thyImgClass\" alt=\"{{avatarName || ''}}\" /> <span *ngIf=\"!_src\" class=\"avatar-default\" [ngStyle]=\"avatarName | avatarBgColor\"> <div>{{avatarName | avatarShortName}}</div> </span> <div *ngIf=\"thyShowName\" class=\"avatar-name\">{{avatarName}}</div> <a *ngIf=\"_showRemove\" (click)=\"remove($event)\" href=\"javascript:;\" class=\"remove-link avatar-remove\"><i class=\"wtf wtf-times-circle\"></i></a>",
            providers: [UpdateHostClassService],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [UpdateHostClassService,
            ElementRef,
            ThyAvatarService])
    ], ThyAvatarComponent);
    return ThyAvatarComponent;
}());
export { ThyAvatarComponent };
//# sourceMappingURL=avatar.component.js.map