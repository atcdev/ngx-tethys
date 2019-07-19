var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ThyNotifyContainerComponent } from './notify.container.component';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { Subject } from 'rxjs';
var NOTIFY_OPTION_DEFAULT = {
    duration: 4500,
    pauseOnHover: true,
    maxStack: 8
};
var ThyNotifyService = /** @class */ (function () {
    function ThyNotifyService(clf) {
        this.clf = clf;
        this.notifyQueue$ = new Subject();
        this._notifyQueue = [];
        this._lastNotifyId = 0;
    }
    ThyNotifyService.prototype.show = function (option) {
        this._loadNotifyContainerComponent();
        if (this._notifyQueue.length > NOTIFY_OPTION_DEFAULT.maxStack) {
            this._notifyQueue.shift();
        }
        this._notifyQueue.push(this._formatOption(option));
        this.notifyQueue$.next(this._notifyQueue);
    };
    ThyNotifyService.prototype.success = function (title, content, detail) {
        this.show({
            type: 'success',
            title: title || '成功',
            content: content,
            detail: detail,
        });
    };
    ThyNotifyService.prototype.info = function (title, content, detail) {
        this.show({
            type: 'info',
            title: title || '提示',
            content: content,
            detail: detail,
        });
    };
    ThyNotifyService.prototype.warning = function (title, content, detail) {
        this.show({
            type: 'warning',
            title: title || '警告',
            content: content,
            detail: detail,
        });
    };
    ThyNotifyService.prototype.error = function (title, content, detail) {
        this.show({
            type: 'error',
            title: title || '错误',
            content: content,
            detail: detail,
        });
    };
    ThyNotifyService.prototype.removeItemById = function (id) {
        this._notifyQueue = this._notifyQueue.filter(function (item) {
            return item.id !== id;
        });
        this.notifyQueue$.next(this._notifyQueue);
    };
    ThyNotifyService.prototype._loadNotifyContainerComponent = function () {
        if (!this._notifyLoader) {
            this._notifyLoader = this.clf.createLoader(null, null, null);
            this._notifyLoader
                .attach(ThyNotifyContainerComponent)
                .to('body')
                .show({
                initialState: {
                    notifyQueue$: this.notifyQueue$
                }
            });
        }
    };
    ThyNotifyService.prototype._formatOption = function (option) {
        return Object.assign({}, NOTIFY_OPTION_DEFAULT, { id: this._lastNotifyId++ }, option);
    };
    ThyNotifyService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ComponentLoaderFactory])
    ], ThyNotifyService);
    return ThyNotifyService;
}());
export { ThyNotifyService };
//# sourceMappingURL=notify.service.js.map