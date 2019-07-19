var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Output, ElementRef, EventEmitter, NgZone, Renderer2 } from '@angular/core';
var ThyContextMenuDirective = /** @class */ (function () {
    function ThyContextMenuDirective(ngZone, elementRef, renderer) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.thyContextMenu = new EventEmitter();
    }
    ThyContextMenuDirective.prototype.rightClick = function (event) {
        var _this = this;
        event.preventDefault();
        this.ngZone.run(function () {
            _this.thyContextMenu.emit(event);
        });
    };
    ThyContextMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.renderer.listen(_this.elementRef.nativeElement, 'contextmenu', _this.rightClick.bind(_this));
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyContextMenuDirective.prototype, "thyContextMenu", void 0);
    ThyContextMenuDirective = __decorate([
        Directive({
            selector: '[thyContextMenu]'
        }),
        __metadata("design:paramtypes", [NgZone,
            ElementRef,
            Renderer2])
    ], ThyContextMenuDirective);
    return ThyContextMenuDirective;
}());
export { ThyContextMenuDirective };
//# sourceMappingURL=thy-contextmenu.directive.js.map