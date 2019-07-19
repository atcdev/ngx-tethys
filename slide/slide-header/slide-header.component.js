var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, TemplateRef, Input, HostBinding } from '@angular/core';
import { ThySlideService } from '../slide.service';
var ThySlideHeaderComponent = /** @class */ (function () {
    function ThySlideHeaderComponent(thySlideService) {
        this.thySlideService = thySlideService;
        this.slideLayoutHeader = true;
    }
    ThySlideHeaderComponent.prototype.ngOnInit = function () { };
    ThySlideHeaderComponent.prototype.closeModal = function (event) {
        this.thySlideService.hide();
    };
    __decorate([
        HostBinding('class.thy-slide-header'),
        __metadata("design:type", Object)
    ], ThySlideHeaderComponent.prototype, "slideLayoutHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThySlideHeaderComponent.prototype, "thyTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThySlideHeaderComponent.prototype, "thyIcon", void 0);
    __decorate([
        ContentChild('thyHeader'),
        __metadata("design:type", TemplateRef)
    ], ThySlideHeaderComponent.prototype, "headerTemplate", void 0);
    __decorate([
        ContentChild('thyHeaderOperate'),
        __metadata("design:type", TemplateRef)
    ], ThySlideHeaderComponent.prototype, "headerOperateTemplate", void 0);
    ThySlideHeaderComponent = __decorate([
        Component({
            selector: 'thy-slide-header',
            template: "<ng-container> <ng-template *ngIf=\"headerTemplate; else default\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template> <ng-template #default> <h3 class=\"thy-slide-header-title\"> <i *ngIf=\"thyIcon\" class=\"{{ thyIcon }}\"></i> {{ thyTitle }} </h3> <div class=\"thy-slide-header-main\"> <ng-container> <ng-template *ngIf=\"headerOperateTemplate\" [ngTemplateOutlet]=\"headerOperateTemplate\"> </ng-template> </ng-container> </div> <button type=\"button\" class=\"close\" (click)=\"closeModal($event)\"> <i class=\"wtf wtf-times\"></i> </button> </ng-template> </ng-container> "
        }),
        __metadata("design:paramtypes", [ThySlideService])
    ], ThySlideHeaderComponent);
    return ThySlideHeaderComponent;
}());
export { ThySlideHeaderComponent };
//# sourceMappingURL=slide-header.component.js.map