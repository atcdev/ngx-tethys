var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer2, ViewContainerRef, Input, forwardRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { DatePipe } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThyPositioningService, PlacementTypes } from '../positioning/positioning.service';
var FORMAT_RULES = {
    default: 'yyyy-MM-dd',
    short: 'yyyy-MM-dd',
    full: 'yyyy-MM-dd HH:mm'
};
var ThyDatepickerNextDirective = /** @class */ (function () {
    function ThyDatepickerNextDirective(elementRef, renderer, _viewContainerRef, cis, thyPositioningService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.thyPositioningService = thyPositioningService;
        this.dataPipe = new DatePipe('zh-Hans');
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this.thyPlacement = PlacementTypes.bottom;
        this.thyAutoAdapt = true;
        this.thyTriggers = 'click';
        this.thyContainer = 'body';
        this.thyOutsideClick = true;
        this.thyDisabled = false;
        this.thyShowTime = false;
        this.thyFormat = null;
    }
    ThyDatepickerNextDirective_1 = ThyDatepickerNextDirective;
    ThyDatepickerNextDirective.prototype.ngOnInit = function () {
        this.renderer.listen(this.elementRef.nativeElement, 'keydown', function () {
            alert();
        });
    };
    ThyDatepickerNextDirective.prototype.ngAfterContentInit = function () { };
    ThyDatepickerNextDirective.prototype.writeValue = function (value) { };
    ThyDatepickerNextDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ThyDatepickerNextDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    ThyDatepickerNextDirective.prototype.show = function () { };
    ThyDatepickerNextDirective.prototype.hide = function () { };
    var ThyDatepickerNextDirective_1;
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyDatepickerNextDirective.prototype, "thyPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextDirective.prototype, "thyAutoAdapt", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextDirective.prototype, "thyTriggers", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextDirective.prototype, "thyContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextDirective.prototype, "thyOutsideClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextDirective.prototype, "thyDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextDirective.prototype, "thyShowTime", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyDatepickerNextDirective.prototype, "thyFormat", void 0);
    ThyDatepickerNextDirective = ThyDatepickerNextDirective_1 = __decorate([
        Directive({
            selector: '[thyDatepickerNextAction]',
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyDatepickerNextDirective_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            ViewContainerRef,
            ComponentLoaderFactory,
            ThyPositioningService])
    ], ThyDatepickerNextDirective);
    return ThyDatepickerNextDirective;
}());
export { ThyDatepickerNextDirective };
//# sourceMappingURL=datepicker-next.directive.js.map