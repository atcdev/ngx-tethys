var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
var ThyBreadcrumbComponent = /** @class */ (function () {
    function ThyBreadcrumbComponent() {
        this._isBreadcrumb = true;
        this.isSlash = false;
        this.isBackslash = false;
    }
    Object.defineProperty(ThyBreadcrumbComponent.prototype, "thyIcon", {
        set: function (icon) {
            this.setIconClass(icon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyBreadcrumbComponent.prototype, "thySeparator", {
        set: function (type) {
            if (type === 'slash') {
                this.isSlash = true;
            }
            ;
            if (type === 'backslash') {
                this.isBackslash = true;
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    ThyBreadcrumbComponent.prototype.setIconClass = function (icon) {
        if (icon) {
            var classes = icon.split(' ');
            if (classes.length === 1) {
                classes.unshift('wtf');
            }
            this.iconClasses = classes;
        }
        else {
            this.iconClasses = null;
        }
    };
    __decorate([
        HostBinding("class.thy-breadcrumb"),
        __metadata("design:type", Object)
    ], ThyBreadcrumbComponent.prototype, "_isBreadcrumb", void 0);
    __decorate([
        HostBinding("class.separator-slash"),
        __metadata("design:type", Object)
    ], ThyBreadcrumbComponent.prototype, "isSlash", void 0);
    __decorate([
        HostBinding("class.separator-backslash"),
        __metadata("design:type", Object)
    ], ThyBreadcrumbComponent.prototype, "isBackslash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyBreadcrumbComponent.prototype, "thyIcon", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyBreadcrumbComponent.prototype, "thySeparator", null);
    ThyBreadcrumbComponent = __decorate([
        Component({
            selector: 'thy-breadcrumb',
            template: '<div class="thy-breadcrumb-icon" *ngIf="iconClasses"><i [ngClass]="iconClasses"></i></div><ng-content></ng-content>',
            exportAs: 'ThyBreadcrumb',
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ThyBreadcrumbComponent);
    return ThyBreadcrumbComponent;
}());
export { ThyBreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map