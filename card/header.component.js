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
var ThyCardHeaderComponent = /** @class */ (function () {
    function ThyCardHeaderComponent() {
        this.thyLayoutHeaderClass = true;
        this._thySizeSm = false;
        this._thySizeLg = false;
    }
    Object.defineProperty(ThyCardHeaderComponent.prototype, "thySize", {
        set: function (value) {
            this._thySizeSm = (value === 'sm');
            this._thySizeLg = (value === 'lg');
        },
        enumerable: true,
        configurable: true
    });
    ThyCardHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        HostBinding('class.thy-card-header'),
        __metadata("design:type", Object)
    ], ThyCardHeaderComponent.prototype, "thyLayoutHeaderClass", void 0);
    __decorate([
        HostBinding('class.thy-card-header--sm'),
        __metadata("design:type", Object)
    ], ThyCardHeaderComponent.prototype, "_thySizeSm", void 0);
    __decorate([
        HostBinding('class.thy-card-header--lg'),
        __metadata("design:type", Object)
    ], ThyCardHeaderComponent.prototype, "_thySizeLg", void 0);
    __decorate([
        Input('thyTitle'),
        __metadata("design:type", String)
    ], ThyCardHeaderComponent.prototype, "thyTitle", void 0);
    __decorate([
        Input('thyDescription'),
        __metadata("design:type", String)
    ], ThyCardHeaderComponent.prototype, "thyDescription", void 0);
    __decorate([
        Input('thySize'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyCardHeaderComponent.prototype, "thySize", null);
    __decorate([
        ContentChild('headerTitle'),
        __metadata("design:type", TemplateRef)
    ], ThyCardHeaderComponent.prototype, "titleTemplateRef", void 0);
    __decorate([
        ContentChild('headerDescription'),
        __metadata("design:type", TemplateRef)
    ], ThyCardHeaderComponent.prototype, "descriptionTemplateRef", void 0);
    __decorate([
        ContentChild('headerOperation'),
        __metadata("design:type", TemplateRef)
    ], ThyCardHeaderComponent.prototype, "operationTemplateRef", void 0);
    ThyCardHeaderComponent = __decorate([
        Component({
            selector: 'thy-card-header',
            preserveWhitespaces: false,
            template: "<div class=\"card-header-icon\"></div> <div class=\"card-header-title\"> <ng-template [ngTemplateOutlet]=\"titleTemplateRef\"></ng-template> <ng-container *ngIf=\"!titleTemplateRef\"> <span>{{thyTitle}}</span> </ng-container> </div> <div class=\"card-header-description\"> <ng-template [ngTemplateOutlet]=\"descriptionTemplateRef\"></ng-template> <ng-container *ngIf=\"!descriptionTemplateRef\"> <span>{{thyDescription}}</span> </ng-container> </div> <div class=\"card-header-operation\"> <ng-template [ngTemplateOutlet]=\"operationTemplateRef\"></ng-template> </div> "
        }),
        __metadata("design:paramtypes", [])
    ], ThyCardHeaderComponent);
    return ThyCardHeaderComponent;
}());
export { ThyCardHeaderComponent };
//# sourceMappingURL=header.component.js.map