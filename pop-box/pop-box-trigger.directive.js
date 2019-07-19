var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener, Input, ElementRef, TemplateRef } from '@angular/core';
import { ThyPopBoxService } from './pop-box.service';
import { PopBoxOptions } from './pop-box-options.class';
var ThyPopBoxTriggerDirective = /** @class */ (function () {
    function ThyPopBoxTriggerDirective(elementRef, thyPopBoxService) {
        this.elementRef = elementRef;
        this.thyPopBoxService = thyPopBoxService;
    }
    Object.defineProperty(ThyPopBoxTriggerDirective.prototype, "thyPopBoxTrigger", {
        set: function (value) {
            this._templateRef = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyPopBoxTriggerDirective.prototype.openPopBox = function ($event) {
        this.thyPopBoxService.show(this._templateRef, Object.assign(this.thyPopBoxOptions || {}, {
            target: this.elementRef.nativeElement
        }));
    };
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef),
        __metadata("design:paramtypes", [TemplateRef])
    ], ThyPopBoxTriggerDirective.prototype, "thyPopBoxTrigger", null);
    __decorate([
        Input(),
        __metadata("design:type", PopBoxOptions)
    ], ThyPopBoxTriggerDirective.prototype, "thyPopBoxOptions", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ThyPopBoxTriggerDirective.prototype, "openPopBox", null);
    ThyPopBoxTriggerDirective = __decorate([
        Directive({
            selector: "[thyPopBoxTrigger]"
        }),
        __metadata("design:paramtypes", [ElementRef,
            ThyPopBoxService])
    ], ThyPopBoxTriggerDirective);
    return ThyPopBoxTriggerDirective;
}());
export { ThyPopBoxTriggerDirective };
//# sourceMappingURL=pop-box-trigger.directive.js.map