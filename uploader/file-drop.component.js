var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer2, Output, EventEmitter, HostBinding, Input, NgZone } from '@angular/core';
import { mimeTypeConvert } from './util';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, filter, tap } from 'rxjs/operators';
var ThyFileDropComponent = /** @class */ (function () {
    function ThyFileDropComponent(elementRef, renderer, ngZone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this._state = {
            isDragOver: false,
            isCustomClassName: false,
            acceptType: '',
            isNeedCheckTypeAccept: false
        };
        this.thyOnDrop = new EventEmitter();
        this.ngUnsubscribe$ = new Subject();
    }
    Object.defineProperty(ThyFileDropComponent.prototype, "thyAcceptType", {
        set: function (value) {
            this._state.acceptType = mimeTypeConvert(value);
            this._state.isNeedCheckTypeAccept = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFileDropComponent.prototype, "isDragOver", {
        get: function () {
            return this._state.isDragOver;
        },
        enumerable: true,
        configurable: true
    });
    ThyFileDropComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._state.isCustomClassName = !!this.thyFileDropClassName;
        this.ngZone.runOutsideAngular(function () {
            fromEvent(_this.elementRef.nativeElement, 'dragenter')
                .pipe(takeUntil(_this.ngUnsubscribe$), tap(function (event) {
                event.preventDefault();
            }), filter(function (event) { return event.dataTransfer.items && event.dataTransfer.items.length > 0; }), filter(_this.checkRejectFolderAndHtmlElement.bind(_this)), filter(_this.checkOptionAcceptType.bind(_this)))
                .subscribe(function () {
                _this.ngZone.run(function () {
                    _this._state.isDragOver = true;
                    _this._toggleDropOverClassName();
                });
            });
            fromEvent(_this.elementRef.nativeElement, 'dragover')
                .pipe(takeUntil(_this.ngUnsubscribe$))
                .subscribe(function (event) {
                event.preventDefault();
            });
            fromEvent(_this.elementRef.nativeElement, 'dragleave')
                .pipe(takeUntil(_this.ngUnsubscribe$))
                .subscribe(function (event) {
                _this.ngZone.run(function () {
                    if (!_this.elementRef.nativeElement.contains(event.fromElement)) {
                        _this._backToDefaultState();
                        _this._toggleDropOverClassName();
                    }
                });
            });
            fromEvent(_this.elementRef.nativeElement, 'drop')
                .pipe(takeUntil(_this.ngUnsubscribe$), tap(function (event) {
                event.preventDefault();
            }), filter(function (event) { return event.dataTransfer.files && event.dataTransfer.files.length > 0; }), filter(_this.checkRejectFolderAndHtmlElement.bind(_this)), filter(_this.checkOptionAcceptType.bind(_this)))
                .subscribe(function (event) {
                _this.ngZone.run(function () {
                    if (!_this._state.isDragOver) {
                        console.error('ngx-tethys Error: Uploaded files that do not support extensions.');
                        return;
                    }
                    _this.thyOnDrop.emit({
                        files: event.dataTransfer.files,
                        nativeEvent: event
                    });
                    _this._backToDefaultState();
                    _this._toggleDropOverClassName();
                });
            });
        });
    };
    ThyFileDropComponent.prototype.checkRejectFolderAndHtmlElement = function (event) {
        // 排除文件夹和HTML元素拖拽
        var items = event.dataTransfer.items;
        var res = true;
        for (var index = 0; index < items.length; index++) {
            var element = items[index];
            if (element.kind !== 'file' || element.type === '') {
                res = false;
            }
        }
        return res;
    };
    ThyFileDropComponent.prototype.checkOptionAcceptType = function (event) {
        var items = event.dataTransfer.items;
        var res = true;
        if (this._state.isNeedCheckTypeAccept) {
            for (var index = 0; index < items.length; index++) {
                var element = items[index];
                if (this._state.acceptType.indexOf(element.type) === -1) {
                    res = false;
                }
            }
        }
        return res;
    };
    ThyFileDropComponent.prototype._toggleDropOverClassName = function () {
        if (this._state.isCustomClassName) {
            if (this._state.isDragOver) {
                this.renderer.addClass(this.elementRef.nativeElement, this.thyFileDropClassName);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, this.thyFileDropClassName);
            }
        }
    };
    ThyFileDropComponent.prototype._backToDefaultState = function () {
        this._state.isDragOver = false;
    };
    ThyFileDropComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyFileDropComponent.prototype, "thyFileDropClassName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyFileDropComponent.prototype, "thyAcceptType", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyFileDropComponent.prototype, "thyOnDrop", void 0);
    __decorate([
        HostBinding('class.drop-over'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ThyFileDropComponent.prototype, "isDragOver", null);
    ThyFileDropComponent = __decorate([
        Component({
            selector: '[thyFileDrop]',
            template: "\n        <ng-content></ng-content>\n    "
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2, NgZone])
    ], ThyFileDropComponent);
    return ThyFileDropComponent;
}());
export { ThyFileDropComponent };
//# sourceMappingURL=file-drop.component.js.map