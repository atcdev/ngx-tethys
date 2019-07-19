var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, TemplateRef, ContentChild } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var ThyHeaderComponent = /** @class */ (function () {
    function ThyHeaderComponent() {
        this.thyLayoutHeaderClass = true;
        this._thyHasBorder = false;
        this._thySizeSm = false;
        this.thyIconPrefix = 'wtf';
    }
    Object.defineProperty(ThyHeaderComponent.prototype, "thyHasBorder", {
        set: function (value) {
            this._thyHasBorder = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyHeaderComponent.prototype, "thySize", {
        set: function (value) {
            this._thySizeSm = (value === 'sm');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyHeaderComponent.prototype, "thyIcon", {
        set: function (value) {
            if (value) {
                this.iconClass = this.thyIconPrefix + " " + value;
            }
            else {
                this.iconClass = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        HostBinding('class.thy-layout-header'),
        __metadata("design:type", Object)
    ], ThyHeaderComponent.prototype, "thyLayoutHeaderClass", void 0);
    __decorate([
        HostBinding('class.header-has-border'),
        __metadata("design:type", Object)
    ], ThyHeaderComponent.prototype, "_thyHasBorder", void 0);
    __decorate([
        HostBinding('class.thy-layout-header-sm'),
        __metadata("design:type", Object)
    ], ThyHeaderComponent.prototype, "_thySizeSm", void 0);
    __decorate([
        Input('thyHasBorder'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyHeaderComponent.prototype, "thyHasBorder", null);
    __decorate([
        Input('thySize'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyHeaderComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyHeaderComponent.prototype, "thyTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyHeaderComponent.prototype, "thyIconPrefix", void 0);
    __decorate([
        Input('thyIcon'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyHeaderComponent.prototype, "thyIcon", null);
    __decorate([
        ContentChild('headerTitle'),
        __metadata("design:type", TemplateRef)
    ], ThyHeaderComponent.prototype, "titleTemplateRef", void 0);
    __decorate([
        ContentChild('headerContent'),
        __metadata("design:type", TemplateRef)
    ], ThyHeaderComponent.prototype, "contentTemplateRef", void 0);
    __decorate([
        ContentChild('headerOperation'),
        __metadata("design:type", TemplateRef)
    ], ThyHeaderComponent.prototype, "operationTemplateRef", void 0);
    ThyHeaderComponent = __decorate([
        Component({
            selector: 'thy-header',
            preserveWhitespaces: false,
            template: "<div class=\"layout-header-title\"> <ng-template [ngTemplateOutlet]=\"titleTemplateRef\"></ng-template> <ng-container *ngIf=\"!titleTemplateRef\"><i *ngIf=\"iconClass\" class=\"prefix-icon\" [ngClass]=\"iconClass\"></i><a href=\"javascript:;\">{{thyTitle}}</a></ng-container> </div> <div class=\"layout-header-content\"> <ng-template [ngTemplateOutlet]=\"contentTemplateRef\"></ng-template> </div> <div class=\"layout-header-operation\"> <ng-template [ngTemplateOutlet]=\"operationTemplateRef\"></ng-template> </div>"
        }),
        __metadata("design:paramtypes", [])
    ], ThyHeaderComponent);
    return ThyHeaderComponent;
}());
export { ThyHeaderComponent };
//# sourceMappingURL=header.component.js.map