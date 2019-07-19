var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Renderer2, Input, ElementRef, Output, EventEmitter } from '@angular/core';
var ThyShowDirective = /** @class */ (function () {
    function ThyShowDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.thyShowChange = new EventEmitter();
    }
    ThyShowDirective.prototype.unListenDocument = function () {
        if (this.unListenEvent) {
            this.unListenEvent();
            this.unListenEvent = null;
        }
    };
    Object.defineProperty(ThyShowDirective.prototype, "thyShow", {
        set: function (condition) {
            var _this = this;
            if (condition) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
                setTimeout(function () {
                    _this.unListenDocument = _this.renderer.listen('document', 'click', function (event) {
                        if (!_this.elementRef.nativeElement.contains(event.target)) {
                            _this.thyShowChange.emit(false);
                            _this.unListenDocument();
                        }
                    });
                });
            }
            else {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
                this.unListenDocument();
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyShowDirective.prototype.ngOnDestroy = function () {
        this.unListenDocument();
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyShowDirective.prototype, "thyShowChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyShowDirective.prototype, "thyShow", null);
    ThyShowDirective = __decorate([
        Directive({ selector: '[thyShow]' }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2])
    ], ThyShowDirective);
    return ThyShowDirective;
}());
export { ThyShowDirective };
//# sourceMappingURL=thy-show.js.map