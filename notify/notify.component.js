var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { ThyNotifyService } from './notify.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
var ThyNotifyComponent = /** @class */ (function () {
    function ThyNotifyComponent(notifyService) {
        this.notifyService = notifyService;
        this.className = true;
        this.flyInOut = 'in';
        this.notifyIconType = {};
        this.notifyIconClass = {};
        this.extendContentClass = false;
        this.isShowDetail = false;
    }
    Object.defineProperty(ThyNotifyComponent.prototype, "thyOption", {
        set: function (value) {
            this.option = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyNotifyComponent.prototype.ngOnInit = function () {
        this.notifyIconType = {
            'thy-notify-icon-success': this.option.type === 'success',
            'thy-notify-icon-info': this.option.type === 'info',
            'thy-notify-icon-warning': this.option.type === 'warning',
            'thy-notify-icon-error': this.option.type === 'error'
        };
        this.notifyIconClass = {
            'wtf-checked': this.option.type === 'success',
            'wtf-level-low': this.option.type === 'info',
            'wtf-bulletin': this.option.type === 'warning',
            'wtf-times-lg': this.option.type === 'error',
        };
        this._creatCloseTimer();
    };
    ThyNotifyComponent.prototype.ngOnDestroy = function () {
        this._clearCloseTimer();
    };
    ThyNotifyComponent.prototype.extendContent = function () {
        this.extendContentClass = true;
    };
    ThyNotifyComponent.prototype.showDetailToggle = function () {
        this.isShowDetail = !this.isShowDetail;
    };
    ThyNotifyComponent.prototype.closeNotify = function () {
        this.notifyService.removeItemById(this.option.id);
    };
    ThyNotifyComponent.prototype.mouseenter = function () {
        if (this.option.pauseOnHover) {
            this._clearCloseTimer();
        }
    };
    ThyNotifyComponent.prototype.mouseleave = function () {
        if (this.option.pauseOnHover) {
            this._creatCloseTimer();
        }
    };
    ThyNotifyComponent.prototype._creatCloseTimer = function () {
        var _this = this;
        if (this.option.duration) {
            this.closeTimer = setInterval(function () {
                clearInterval(_this.closeTimer);
                _this.closeNotify();
            }, this.option.duration);
        }
    };
    ThyNotifyComponent.prototype._clearCloseTimer = function () {
        clearInterval(this.closeTimer);
    };
    __decorate([
        HostBinding('class.thy-notify'),
        __metadata("design:type", Object)
    ], ThyNotifyComponent.prototype, "className", void 0);
    __decorate([
        HostBinding('@flyInOut'),
        __metadata("design:type", Object)
    ], ThyNotifyComponent.prototype, "flyInOut", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyNotifyComponent.prototype, "thyOption", null);
    __decorate([
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ThyNotifyComponent.prototype, "mouseenter", null);
    __decorate([
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ThyNotifyComponent.prototype, "mouseleave", null);
    ThyNotifyComponent = __decorate([
        Component({
            selector: 'thy-notify',
            template: "<ng-container *ngIf=\"!option.html\"> <a href=\"javascript:;\" class=\"thy-notify-close\"> <i class=\"wtf wtf-times\" (click)=\"closeNotify()\"></i> </a> <div [ngClass]=\"notifyIconType\"> <i class=\"wtf\" [ngClass]=\"notifyIconClass\"></i> </div> <div class=\"thy-notify-main\"> <div class=\"thy-notify-title\">{{option.title}}</div> <div class=\"thy-notify-content\" [ngClass]=\"{'thy-notify-content--extend':extendContentClass===true}\" (click)=\"extendContent()\">{{option.content}} <a href=\"javascript:;\" target=\"_blank\" class=\"link-secondary\" *ngIf=\"option.detail\" (click)=\"showDetailToggle()\">[详细]</a> </div> <div class=\"thy-notify-detail\" *ngIf=\"isShowDetail\">{{option.detail}}</div> </div> </ng-container> <ng-container *ngIf=\"option.html\"> <a href=\"javascript:;\" class=\"thy-notify-close\"> <i class=\"wtf wtf-times\" (click)=\"closeNotify()\"></i> </a> <div class=\"thy-notify-main\"> <template [ngTemplateOutlet]=\"option.html\"></template> </div> </ng-container> ",
            animations: [
                trigger('flyInOut', [
                    state('in', style({ transform: 'translateX(0)', opacity: 1 })),
                    transition('void => *', [
                        style({ transform: 'translateX(100%)', opacity: 0 }),
                        animate(100)
                    ]),
                    transition('* => void', [
                        animate(100, style({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [ThyNotifyService])
    ], ThyNotifyComponent);
    return ThyNotifyComponent;
}());
export { ThyNotifyComponent };
//# sourceMappingURL=notify.component.js.map