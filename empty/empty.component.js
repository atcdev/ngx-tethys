var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, ElementRef, Input, Renderer2, NgZone } from '@angular/core';
import { ThyTranslate } from '../shared';
import { ThyEmptyConfig } from './empty.config';
import { inputValueToBoolean } from '../util/helpers';
var sizeClassMap = {
    'lg': ['empty-state', 'empty-state--lg'],
    'md': ['empty-state'],
    'sm': ['empty-state', 'empty-state--sm']
};
var sizeMap = {
    'lg': {
        height: 164,
        offsetTop: 30,
        defaultMarginTop: 120 // 不自动计算默认的 top 距离
    },
    'md': {
        height: 91,
        offsetTop: 20,
        defaultMarginTop: 10
    },
    'sm': {
        height: 50,
        offsetTop: 10,
        defaultMarginTop: 0
    }
};
var ThyEmptyComponent = /** @class */ (function () {
    function ThyEmptyComponent(thyTranslate, thyEmptyConfig, elementRef, renderer, ngZone) {
        this.thyTranslate = thyTranslate;
        this.thyEmptyConfig = thyEmptyConfig;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.sizeClass = sizeClassMap['md'].join(' ');
    }
    Object.defineProperty(ThyEmptyComponent.prototype, "thySize", {
        set: function (value) {
            var classList = sizeClassMap[value || 'md'];
            if (classList) {
                this.sizeClass = classList.join(' ');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyEmptyComponent.prototype, "displayText", {
        get: function () {
            if (this.thyMessage) {
                return this.thyMessage;
            }
            else if (this.thyTranslationKey) {
                return this.thyTranslate.instant(this.thyTranslationKey, this.thyTranslationValues);
            }
            else if (this.thyEntityName) {
                return this.thyTranslate.instant(this.thyEmptyConfig.noResultWithTargetTranslateKey, {
                    target: this.thyEntityName
                });
            }
            else if (this.thyEntityNameTranslateKey) {
                return this.thyTranslate.instant(this.thyEmptyConfig.noResultWithTargetTranslateKey, {
                    target: this.thyTranslate.instant(this.thyEntityNameTranslateKey)
                });
            }
            else {
                return this.thyTranslate.instant(this.thyEmptyConfig.noResultTranslateKey);
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyEmptyComponent.prototype._calculatePosition = function () {
        var sizeOptions = sizeMap[this.thySize || 'md'];
        var topAuto = inputValueToBoolean(this.thyTopAuto);
        var marginTop = null;
        if (topAuto) {
            // 选择参考父容器居中
            var containerElement = this.thyContainer ? this.thyContainer.nativeElement : this.elementRef.nativeElement.parentElement;
            // containerElement.height;
            var emptyStateHeight = this.elementRef.nativeElement.offsetHeight;
            // 高度没有自动计算出来使用默认值
            if (emptyStateHeight <= 10) {
                emptyStateHeight = sizeOptions.height;
            }
            marginTop = (containerElement.offsetHeight - emptyStateHeight) / 2 - sizeOptions.offsetTop;
            if (marginTop < 0) {
                marginTop = 0; // sizeOptions.defaultMarginTop;
            }
        }
        else {
            if (this.thyMarginTop) {
                marginTop = this.thyMarginTop;
            }
            else {
                marginTop = 0; // sizeOptions.defaultMarginTop;
            }
        }
        if (marginTop) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'marginTop', marginTop + 'px');
        }
    };
    ThyEmptyComponent.prototype.ngOnInit = function () {
    };
    ThyEmptyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
                _this._calculatePosition();
            }, 50);
        });
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyEmptyComponent.prototype, "sizeClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyEmptyComponent.prototype, "thyMessage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyEmptyComponent.prototype, "thyTranslationKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyEmptyComponent.prototype, "thyTranslationValues", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyEmptyComponent.prototype, "thyEntityName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyEmptyComponent.prototype, "thyEntityNameTranslateKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyEmptyComponent.prototype, "thyIconClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyEmptyComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyEmptyComponent.prototype, "thyMarginTop", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyEmptyComponent.prototype, "thyTopAuto", void 0);
    __decorate([
        Input(),
        __metadata("design:type", ElementRef)
    ], ThyEmptyComponent.prototype, "thyContainer", void 0);
    ThyEmptyComponent = __decorate([
        Component({
            selector: 'thy-empty',
            template: "<span class=\"empty-icon\"><i [class]=\"thyIconClass || 'wtf wtf-empty-o'\"></i></span> <p class=\"empty-text\">{{displayText}}</p>"
        }),
        __metadata("design:paramtypes", [ThyTranslate,
            ThyEmptyConfig,
            ElementRef,
            Renderer2,
            NgZone])
    ], ThyEmptyComponent);
    return ThyEmptyComponent;
}());
export { ThyEmptyComponent };
//# sourceMappingURL=empty.component.js.map