var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
import { UpdateHostClassService } from '../shared';
var sizeClassesMap = {
    'lg': ['btn-icon-lg'],
    'sm': ['btn-icon-sm'],
    'xs': ['btn-icon-xs']
};
var shapeClassesMap = {
    'circle-dashed': ['btn-icon-circle', 'circle-dashed'],
    'circle-solid': ['btn-icon-circle', 'circle-solid'],
    'circle-thick-dashed': ['btn-icon-circle', 'circle-dashed', 'border-thick'],
    'circle-thick-solid': ['btn-icon-circle', 'circle-solid', 'border-thick'],
    'self-icon': ['btn-icon-self-circle']
};
var themeClassesMap = {
    'danger-weak': ['btn-icon-danger-weak']
};
var ThyButtonIconComponent = /** @class */ (function () {
    function ThyButtonIconComponent(elementRef, renderer, updateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.updateHostClassService = updateHostClassService;
        this._initialized = false;
        this._iconPrefix = 'wtf';
        this._isBtn = true;
        this._isBtnIcon = true;
        this._isLighted = false;
        this._isActive = false;
        this.updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    ThyButtonIconComponent.prototype._setIconClass = function (icon) {
        if (icon) {
            var classes = icon.split(' ');
            if (classes.length === 1) {
                classes.unshift('wtf');
            }
            this._iconClasses = classes;
        }
        else {
            this._iconClasses = null;
        }
    };
    Object.defineProperty(ThyButtonIconComponent.prototype, "thySize", {
        set: function (size) {
            this._size = size;
            if (this._initialized) {
                this._setClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonIconComponent.prototype, "thyIcon", {
        // 字体前缀，默认 wtf
        set: function (icon) {
            this._setIconClass(icon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonIconComponent.prototype, "thyButtonIcon", {
        set: function (icon) {
            this._setIconClass(icon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonIconComponent.prototype, "thyShape", {
        set: function (value) {
            this._shape = value;
            if (this._initialized) {
                this._setClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonIconComponent.prototype, "thyLight", {
        set: function (value) {
            this._isLighted = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonIconComponent.prototype, "thyActive", {
        set: function (value) {
            this._isActive = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonIconComponent.prototype, "thyTheme", {
        set: function (value) {
            this._theme = value;
            if (this._initialized) {
                this._setClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyButtonIconComponent.prototype._setClasses = function () {
        var classes = sizeClassesMap[this._size] ? sizeClassesMap[this._size].slice() : [];
        if (this._shape && shapeClassesMap[this._shape]) {
            shapeClassesMap[this._shape].forEach(function (className) {
                classes.push(className);
            });
        }
        if (this._theme && themeClassesMap[this._theme]) {
            themeClassesMap[this._theme].forEach(function (className) {
                classes.push(className);
            });
        }
        this.updateHostClassService.updateClass(classes);
    };
    ThyButtonIconComponent.prototype.ngOnInit = function () {
        this._setClasses();
        this._initialized = true;
    };
    __decorate([
        HostBinding('class.btn'),
        __metadata("design:type", Object)
    ], ThyButtonIconComponent.prototype, "_isBtn", void 0);
    __decorate([
        HostBinding('class.btn-icon'),
        __metadata("design:type", Object)
    ], ThyButtonIconComponent.prototype, "_isBtnIcon", void 0);
    __decorate([
        HostBinding('class.btn-icon-light'),
        __metadata("design:type", Object)
    ], ThyButtonIconComponent.prototype, "_isLighted", void 0);
    __decorate([
        HostBinding('class.btn-icon-active'),
        __metadata("design:type", Object)
    ], ThyButtonIconComponent.prototype, "_isActive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonIconComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonIconComponent.prototype, "thyIcon", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonIconComponent.prototype, "thyButtonIcon", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonIconComponent.prototype, "thyShape", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyButtonIconComponent.prototype, "thyLight", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyButtonIconComponent.prototype, "thyActive", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonIconComponent.prototype, "thyTheme", null);
    ThyButtonIconComponent = __decorate([
        Component({
            selector: '[thy-button-icon],[thyButtonIcon]',
            template: "<i [ngClass]=\"_iconClasses\" *ngIf=\"_iconClasses\"></i><ng-content></ng-content>",
            providers: [
                UpdateHostClassService
            ],
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            UpdateHostClassService])
    ], ThyButtonIconComponent);
    return ThyButtonIconComponent;
}());
export { ThyButtonIconComponent };
//# sourceMappingURL=button-icon.component.js.map