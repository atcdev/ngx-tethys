var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { ThySlideRef } from './slide-ref.service';
import { ThySlideOption } from './slide-options.class';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UpdateHostClassService } from '../shared';
var ThySlideContainerComponent = /** @class */ (function () {
    function ThySlideContainerComponent(thySlideRef, elementRef, thySlideOption, renderer, updateHostClassService) {
        this.thySlideRef = thySlideRef;
        this.elementRef = elementRef;
        this.thySlideOption = thySlideOption;
        this.renderer = renderer;
        this.updateHostClassService = updateHostClassService;
        this.slideClass = true;
        this.isShow = false;
        this._nativeElement = this.elementRef.nativeElement;
        this.updateHostClassService.initializeElement(this._nativeElement);
    }
    ThySlideContainerComponent.prototype._setClasses = function () {
        if (this.thycontainerClass) {
            var classNames = [this.thycontainerClass];
            this.updateHostClassService.updateClass(classNames);
        }
    };
    ThySlideContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideClass = this.thySlideOption.hasBackdrop;
        this.flyInOut = this.thySlideOption.from;
        this.thySlideClass = this.thySlideOption.class;
        this.thycontainerClass = this.thySlideOption.containerClass;
        this._setClasses();
        setTimeout(function () {
            _this.isShow = true;
        }, 200);
    };
    ThySlideContainerComponent.prototype.onClick = function (event) {
        if (this.thySlideService._isHide || event.target === this.elementRef.nativeElement) {
            this.flyInOut = 'void';
            this.thySlideRef.hide();
        }
    };
    __decorate([
        HostBinding('class.slide'),
        __metadata("design:type", Object)
    ], ThySlideContainerComponent.prototype, "slideClass", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThySlideContainerComponent.prototype, "onClick", null);
    ThySlideContainerComponent = __decorate([
        Component({
            selector: 'thy-slide-container',
            template: "\n        <div [class]=\"'slide-dialog' + (thySlideClass ? ' ' + thySlideClass : '')\" [@flyInOut]=\"flyInOut\">\n            <ng-container *ngIf=\"isShow\"><ng-content></ng-content></ng-container>\n        </div>\n    ",
            providers: [UpdateHostClassService],
            animations: [
                trigger('flyInOut', [
                    state('left', style({ transform: '*' })),
                    state('right', style({ transform: '*' })),
                    state('top', style({ transform: '*' })),
                    state('bottom', style({ transform: '*' })),
                    transition('void => left', [style({ transform: 'translateX(-100%)' }), animate('0.2s ease-in')]),
                    transition('left => void', [animate('0.2s', style({ transform: 'translateX(-100%)' }))]),
                    transition('void => right', [style({ transform: 'translateX(100%)' }), animate('0.2s ease-in')]),
                    transition('right => void', [animate('0.2s', style({ transform: 'translateX(100%)' }))]),
                    transition('void => top', [style({ transform: 'translateY(-100%)' }), animate('0.2s ease-in')]),
                    transition('top => void', [animate('0.2s', style({ transform: 'translateY(-100%)' }))]),
                    transition('void => bottom', [style({ transform: 'translateY(100%)' }), animate('0.2s ease-in')]),
                    transition('bottom => void', [animate('0.2s', style({ transform: 'translateY(100%)' }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [ThySlideRef,
            ElementRef,
            ThySlideOption,
            Renderer2,
            UpdateHostClassService])
    ], ThySlideContainerComponent);
    return ThySlideContainerComponent;
}());
export { ThySlideContainerComponent };
//# sourceMappingURL=slide-container.component.js.map