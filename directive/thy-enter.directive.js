var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Output, EventEmitter, NgZone, ElementRef, Renderer2 } from '@angular/core';
import { keycodes } from '../util';
/**
 * 与 (keydown.enter) 区别是支持组合键，当按 Ctrl + Enter 或者 Command + Enter 也会触发
 */
var ThyEnterDirective = /** @class */ (function () {
    function ThyEnterDirective(ngZone, elementRef, renderer) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.thyEnter = new EventEmitter();
    }
    ThyEnterDirective.prototype.onKeydown = function (event) {
        var _this = this;
        var keyCode = event.which || event.keyCode;
        if (keyCode === keycodes.ENTER) {
            this.ngZone.run(function () {
                _this.thyEnter.emit(event);
            });
        }
    };
    ThyEnterDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.renderer.listen(_this.elementRef.nativeElement, 'keydown', _this.onKeydown.bind(_this));
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyEnterDirective.prototype, "thyEnter", void 0);
    ThyEnterDirective = __decorate([
        Directive({
            selector: '[thyEnter]'
        }),
        __metadata("design:paramtypes", [NgZone, ElementRef, Renderer2])
    ], ThyEnterDirective);
    return ThyEnterDirective;
}());
export { ThyEnterDirective };
//# sourceMappingURL=thy-enter.directive.js.map