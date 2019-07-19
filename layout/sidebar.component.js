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
import { Component, HostBinding, Host, Optional, Input, ViewChild, Renderer2, ElementRef, NgZone } from '@angular/core';
import { ThyLayoutComponent } from './layout.component';
import { inputValueToBoolean } from '../util/helpers';
var ThySidebarComponent = /** @class */ (function () {
    function ThySidebarComponent(thyLayoutComponent, renderer, elementRef, ngZone) {
        this.thyLayoutComponent = thyLayoutComponent;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.thyLayoutSidebarClass = true;
        this.thyLayoutSidebarClearBorderRightClass = false;
    }
    Object.defineProperty(ThySidebarComponent.prototype, "thyWidth", {
        set: function (value) {
            this.thyLayoutSidebarWidth = value;
            this.widthPassive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySidebarComponent.prototype, "thyHasBorderRight", {
        set: function (value) {
            this.thyLayoutSidebarClearBorderRightClass = !inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySidebarComponent.prototype, "thyIsDraggableWidth", {
        set: function (value) {
            if (inputValueToBoolean(value)) {
                this.renderer.setStyle(this.dragRef.nativeElement, 'pointer-events', 'all');
            }
        },
        enumerable: true,
        configurable: true
    });
    ThySidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.thyLayoutComponent) {
            this.thyLayoutComponent.hasSidebar = true;
        }
        this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.widthPassive = _this.elementRef.nativeElement.clientWidth;
                _this.renderer.setStyle(_this.dragRef.nativeElement, 'left', _this.numberConvertToFloor(_this.widthPassive) + 'px');
            }, 0);
        });
    };
    ThySidebarComponent.prototype.dragStartedHandler = function () {
        this.dragStartedX = this.dragRef.nativeElement.getBoundingClientRect().x;
    };
    ThySidebarComponent.prototype.dragEndedHandler = function () {
        var x = this.dragRef.nativeElement.getBoundingClientRect().x;
        this.widthPassive = this.numberConvertToFloor(this.widthPassive * 1 + (x - this.dragStartedX));
        this.thyLayoutSidebarWidth = this.widthPassive;
    };
    ThySidebarComponent.prototype.numberConvertToFloor = function (value) {
        var result = Math.floor(value * 1);
        if (result < 1) {
            result = 1;
        }
        return result;
    };
    __decorate([
        HostBinding('class.thy-layout-sidebar'),
        __metadata("design:type", Object)
    ], ThySidebarComponent.prototype, "thyLayoutSidebarClass", void 0);
    __decorate([
        HostBinding('class.thy-layout-sidebar--clear-border-right'),
        __metadata("design:type", Object)
    ], ThySidebarComponent.prototype, "thyLayoutSidebarClearBorderRightClass", void 0);
    __decorate([
        HostBinding('style.width.px'),
        __metadata("design:type", Number)
    ], ThySidebarComponent.prototype, "thyLayoutSidebarWidth", void 0);
    __decorate([
        Input('thyWidth'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThySidebarComponent.prototype, "thyWidth", null);
    __decorate([
        Input('thyHasBorderRight'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThySidebarComponent.prototype, "thyHasBorderRight", null);
    __decorate([
        Input('thyIsDraggableWidth'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThySidebarComponent.prototype, "thyIsDraggableWidth", null);
    __decorate([
        ViewChild('dragRef'),
        __metadata("design:type", Object)
    ], ThySidebarComponent.prototype, "dragRef", void 0);
    ThySidebarComponent = __decorate([
        Component({
            selector: 'thy-sidebar',
            preserveWhitespaces: false,
            template: "\n        <ng-content></ng-content>\n        <div\n            class=\"sidebar-drag\"\n            #dragRef\n            cdkDrag\n            cdkDragLockAxis=\"x\"\n            cdkDragBoundary=\".thy-layout\"\n            (cdkDragStarted)=\"dragStartedHandler()\"\n            (cdkDragEnded)=\"dragEndedHandler()\"\n        ></div>\n    "
        }),
        __param(0, Optional()), __param(0, Host()),
        __metadata("design:paramtypes", [ThyLayoutComponent,
            Renderer2,
            ElementRef,
            NgZone])
    ], ThySidebarComponent);
    return ThySidebarComponent;
}());
export { ThySidebarComponent };
//# sourceMappingURL=sidebar.component.js.map