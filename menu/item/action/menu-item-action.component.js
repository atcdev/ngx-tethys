var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, ElementRef, Input, Renderer2 } from '@angular/core';
import { ThyPopBoxService } from '../../../pop-box';
var ThyMenuItemActionComponent = /** @class */ (function () {
    function ThyMenuItemActionComponent(popBoxService, renderer, elementRef) {
        this.popBoxService = popBoxService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._boundEvent = false;
        this.isThyMenuItemIconMore = true;
        this.thyStopPropagation = true;
    }
    Object.defineProperty(ThyMenuItemActionComponent.prototype, "thyActionMenu", {
        set: function (value) {
            this._actionMenu = value;
            if (this._actionMenu) {
                this.bindClickEvent();
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyMenuItemActionComponent.prototype.bindClickEvent = function () {
        var _this = this;
        if (this._boundEvent) {
            return;
        }
        this._boundEvent = true;
        this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) {
            if (_this.thyStopPropagation) {
                event.stopPropagation();
            }
            if (_this._actionMenu) {
                _this.popBoxService.show(_this._actionMenu, {
                    target: event.currentTarget,
                    insideAutoClose: true,
                    stopPropagation: true,
                    placement: 'bottom right'
                });
            }
        });
    };
    ThyMenuItemActionComponent.prototype.ngOnInit = function () { };
    __decorate([
        HostBinding('class.thy-menu-item-action'),
        __metadata("design:type", Object)
    ], ThyMenuItemActionComponent.prototype, "isThyMenuItemIconMore", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyMenuItemActionComponent.prototype, "thyActionMenu", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyMenuItemActionComponent.prototype, "thyStopPropagation", void 0);
    ThyMenuItemActionComponent = __decorate([
        Component({
            selector: 'thy-menu-item-action,[thy-menu-item-action],[thyMenuItemAction]',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [ThyPopBoxService, Renderer2, ElementRef])
    ], ThyMenuItemActionComponent);
    return ThyMenuItemActionComponent;
}());
export { ThyMenuItemActionComponent };
//# sourceMappingURL=menu-item-action.component.js.map