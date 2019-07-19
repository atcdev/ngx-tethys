var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, HostBinding } from '@angular/core';
import { UpdateHostClassService } from '../shared';
var navTypeClassesMap = {
    primary: ['thy-nav', 'nav-primary'],
    secondary: ['thy-nav', 'nav-secondary'],
    thirdly: ['thy-nav', 'nav-thirdly'],
    'secondary-divider': ['thy-nav', 'nav-secondary-divider']
};
var navSizeClassesMap = {
    sm: 'nav-sm'
};
var navHorizontalClassesMap = {
    left: null,
    center: 'justify-content-center',
    right: 'justify-content-end'
};
var ThyNavComponent = /** @class */ (function () {
    function ThyNavComponent(updateHostClass, elementRef) {
        this.updateHostClass = updateHostClass;
        this.elementRef = elementRef;
        this._initialized = false;
        this._isVertical = false;
        this._isFill = false;
        this.updateHostClass.initializeElement(elementRef.nativeElement);
    }
    Object.defineProperty(ThyNavComponent.prototype, "thyType", {
        set: function (type) {
            this._type = type;
            if (this._initialized) {
                this._updateClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyNavComponent.prototype, "thySize", {
        set: function (size) {
            this._size = size;
            if (this._initialized) {
                this._updateClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyNavComponent.prototype, "thyHorizontal", {
        set: function (horizontal) {
            this._horizontal = horizontal;
            if (this._initialized) {
                this._updateClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyNavComponent.prototype, "thyVertical", {
        set: function (value) {
            this._isVertical = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyNavComponent.prototype, "thyFill", {
        set: function (value) {
            this._isFill = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyNavComponent.prototype._updateClasses = function () {
        var classNames = [];
        if (navTypeClassesMap[this._type]) {
            classNames = navTypeClassesMap[this._type].slice();
        }
        if (navTypeClassesMap[this._size]) {
            classNames.push(navSizeClassesMap[this._size]);
        }
        if (navHorizontalClassesMap[this._horizontal]) {
            classNames.push(navHorizontalClassesMap[this._horizontal]);
        }
        this.updateHostClass.updateClass(classNames);
    };
    ThyNavComponent.prototype.ngOnInit = function () {
        this._initialized = true;
        this._updateClasses();
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyNavComponent.prototype, "thyType", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyNavComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyNavComponent.prototype, "thyHorizontal", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyNavComponent.prototype, "thyVertical", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyNavComponent.prototype, "thyFill", null);
    __decorate([
        HostBinding('class.thy-nav--vertical'),
        __metadata("design:type", Object)
    ], ThyNavComponent.prototype, "_isVertical", void 0);
    __decorate([
        HostBinding('class.thy-nav--fill'),
        __metadata("design:type", Object)
    ], ThyNavComponent.prototype, "_isFill", void 0);
    ThyNavComponent = __decorate([
        Component({
            selector: 'thy-nav',
            template: "<ng-content></ng-content>",
            providers: [
                UpdateHostClassService
            ]
        }),
        __metadata("design:paramtypes", [UpdateHostClassService, ElementRef])
    ], ThyNavComponent);
    return ThyNavComponent;
}());
export { ThyNavComponent };
//# sourceMappingURL=nav.component.js.map