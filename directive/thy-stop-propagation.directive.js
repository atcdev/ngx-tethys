var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Renderer2, Input, ElementRef } from '@angular/core';
/**
 * 将来会移动到 thy 组件库中
 */
var ThyStopPropagationDirective = /** @class */ (function () {
    function ThyStopPropagationDirective(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._eventName = 'click';
    }
    Object.defineProperty(ThyStopPropagationDirective.prototype, "thyStopPropagation", {
        set: function (value) {
            this._eventName = value || 'click';
        },
        enumerable: true,
        configurable: true
    });
    ThyStopPropagationDirective.prototype.ngOnInit = function () {
        this._listener = this._renderer.listen(this._elementRef.nativeElement, this._eventName, function ($event) {
            $event.stopPropagation();
        });
    };
    ThyStopPropagationDirective.prototype.ngOnDestroy = function () {
        if (this._listener) {
            this._listener();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyStopPropagationDirective.prototype, "thyStopPropagation", null);
    ThyStopPropagationDirective = __decorate([
        Directive({
            selector: '[thyStopPropagation]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], ThyStopPropagationDirective);
    return ThyStopPropagationDirective;
}());
export { ThyStopPropagationDirective };
//# sourceMappingURL=thy-stop-propagation.directive.js.map