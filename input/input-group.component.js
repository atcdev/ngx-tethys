var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, ContentChild, TemplateRef, ElementRef, ViewEncapsulation } from '@angular/core';
import { ThyTranslate, UpdateHostClassService } from '../shared';
var inputGroupSizeMap = {
    'sm': ['input-group-sm'],
    'lg': ['input-group-lg']
};
var ThyInputGroupComponent = /** @class */ (function () {
    function ThyInputGroupComponent(thyTranslate, updateHostClassService, elementRef) {
        this.thyTranslate = thyTranslate;
        this.updateHostClassService = updateHostClassService;
        this.elementRef = elementRef;
        this._isInputGroup = true;
        this.updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    Object.defineProperty(ThyInputGroupComponent.prototype, "thyAppendText", {
        set: function (value) {
            this.appendText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyInputGroupComponent.prototype, "thyAppendTextTranslateKey", {
        set: function (value) {
            if (value) {
                this.appendText = this.thyTranslate.instant(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyInputGroupComponent.prototype, "thyPrependText", {
        set: function (value) {
            this.prependText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyInputGroupComponent.prototype, "thyPrependTextTranslateKey", {
        set: function (value) {
            if (value) {
                this.prependText = this.thyTranslate.instant(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyInputGroupComponent.prototype, "thySize", {
        set: function (size) {
            if (size && inputGroupSizeMap[size]) {
                this.updateHostClassService.updateClass(inputGroupSizeMap[size]);
            }
            else {
                this.updateHostClassService.updateClass([]);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.thy-input-group'),
        __metadata("design:type", Object)
    ], ThyInputGroupComponent.prototype, "_isInputGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputGroupComponent.prototype, "thyAppendText", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputGroupComponent.prototype, "thyAppendTextTranslateKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputGroupComponent.prototype, "thyPrependText", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputGroupComponent.prototype, "thyPrependTextTranslateKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputGroupComponent.prototype, "thySize", null);
    __decorate([
        ContentChild('append'),
        __metadata("design:type", TemplateRef)
    ], ThyInputGroupComponent.prototype, "appendTemplate", void 0);
    __decorate([
        ContentChild('prepend'),
        __metadata("design:type", TemplateRef)
    ], ThyInputGroupComponent.prototype, "prependTemplate", void 0);
    ThyInputGroupComponent = __decorate([
        Component({
            selector: 'thy-input-group',
            template: "<div class=\"input-group-prepend\" *ngIf=\"prependText\"> <span class=\"input-group-text\">{{prependText}}</span> </div> <div class=\"input-group-prepend\" *ngIf=\"prependTemplate\"> <ng-template *ngTemplateOutlet=\"prependTemplate\"></ng-template> </div> <ng-content></ng-content> <div class=\"input-group-append\" *ngIf=\"appendText\"> <span class=\"input-group-text\">{{appendText}}</span> </div> <div class=\"input-group-append\" *ngIf=\"appendTemplate\"> <ng-template *ngTemplateOutlet=\"appendTemplate\"></ng-template> </div>",
            providers: [
                UpdateHostClassService
            ],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ThyTranslate,
            UpdateHostClassService,
            ElementRef])
    ], ThyInputGroupComponent);
    return ThyInputGroupComponent;
}());
export { ThyInputGroupComponent };
//# sourceMappingURL=input-group.component.js.map