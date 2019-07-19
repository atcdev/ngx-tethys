var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ElementRef, HostBinding, Inject, Renderer2, ViewEncapsulation, HostListener, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PopBoxOptions } from './pop-box-options.class';
import { ThyPositioningService } from '../positioning/positioning.service';
var PopBoxContainerComponent = /** @class */ (function () {
    function PopBoxContainerComponent(elementRef, renderer, config, document, ngZone, thyPositioningService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.config = config;
        this.document = document;
        this.ngZone = ngZone;
        this.thyPositioningService = thyPositioningService;
        this.showMask = false;
        this.showMask = this.config.showMask;
    }
    PopBoxContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._zIndex = this.config.zIndex || '';
        this.ngZone.runOutsideAngular(function () {
            _this._unsubscribe = _this.renderer.listen(_this.document, 'click', _this.onDocumentClick.bind(_this));
        });
    };
    PopBoxContainerComponent.prototype.ngAfterViewInit = function () {
        this._originHeight = (+this.elementRef.nativeElement.clientHeight);
    };
    PopBoxContainerComponent.prototype.hide = function () {
        this.popBoxRef.hide();
    };
    PopBoxContainerComponent.prototype.clickPopBox = function (event) {
        if (this.config.stopPropagation) {
            event.stopPropagation();
        }
        if (this.config.insideAutoClose) {
            this.hide();
        }
    };
    PopBoxContainerComponent.prototype.clickMask = function (event) {
        if (this.config.outsideAutoClose) {
            this.hide();
        }
        else {
            return;
            // this.closePopBox(event);
        }
    };
    PopBoxContainerComponent.prototype.onEsc = function (event) {
        if (this.config.keyboardESCClose) {
            event.preventDefault();
            this.hide();
        }
    };
    // @HostListener('document:click', ['$event'])
    PopBoxContainerComponent.prototype.onDocumentClick = function (event) {
        var _this = this;
        if (this.config.showMask) {
            return;
        }
        // 是否点击了 pop box 内部区域
        var isClickPopBoxInner = this.elementRef.nativeElement.contains(event.target);
        var needClose = false;
        if (this.config.outsideAutoClose) {
            // 没有 target，说明是 直接传入的 position，点击外部元素直接关闭即可
            if (!this.config.target && !isClickPopBoxInner) {
                needClose = true;
            }
            else if (this.config.target && !this.config.target.contains(event.target) && !isClickPopBoxInner) {
                // 点击事件元素不是原来的触发弹出元素，并且不是 pob box 内部元素点击
                needClose = true;
            }
        }
        if (this.config.insideAutoClose && isClickPopBoxInner) {
            needClose = true;
        }
        if (needClose) {
            this.ngZone.run(function () {
                _this.hide();
            });
        }
    };
    PopBoxContainerComponent.prototype.ngDoCheck = function () {
        var height = (+this.elementRef.nativeElement.clientHeight);
        if (height !== this._originHeight) {
            this._originHeight = height;
            this.thyPositioningService.setPosition({
                target: this.elementRef,
                attach: this.config.target,
                placement: this.config.placement,
                offset: this.config.offset,
                appendToBody: true,
                position: this.config.position,
                autoAdapt: true
            });
        }
    };
    PopBoxContainerComponent.prototype.ngOnDestroy = function () {
        if (this._unsubscribe) {
            this._unsubscribe();
            this._unsubscribe = null;
        }
    };
    __decorate([
        HostBinding('style.z-index'),
        __metadata("design:type", Object)
    ], PopBoxContainerComponent.prototype, "_zIndex", void 0);
    __decorate([
        HostListener('window:keydown.esc', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PopBoxContainerComponent.prototype, "onEsc", null);
    PopBoxContainerComponent = __decorate([
        Component({
            selector: 'pop-box-container',
            template: "<div class=\"pop-box-container-mask\" *ngIf=\"showMask\" (click)=\"clickMask($event)\"></div> <div class=\"pop-box\" (click)=\"clickPopBox($event)\"> <div class=\"pop-box-content {{config.containerClass}}\"> <ng-content></ng-content> </div> </div> ",
            encapsulation: ViewEncapsulation.None
        }),
        __param(3, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            PopBoxOptions, Object, NgZone,
            ThyPositioningService])
    ], PopBoxContainerComponent);
    return PopBoxContainerComponent;
}());
export { PopBoxContainerComponent };
//# sourceMappingURL=pop-box-container.component.js.map