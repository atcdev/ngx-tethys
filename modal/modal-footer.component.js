var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, TemplateRef, ContentChild } from '@angular/core';
import { ModalComponent } from './modal.component';
var ModalFooterComponent = /** @class */ (function () {
    function ModalFooterComponent(modalComponent) {
        this.modalComponent = modalComponent;
        this.savingText = '确定...';
        this.thyOnSave = new EventEmitter();
        this.thyOnCancel = new EventEmitter();
    }
    Object.defineProperty(ModalFooterComponent.prototype, "thySaving", {
        set: function (value) {
            this.savingStatus = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalFooterComponent.prototype, "thySavingText", {
        set: function (value) {
            this.savingText = value;
        },
        enumerable: true,
        configurable: true
    });
    ModalFooterComponent.prototype.ngOnInit = function () {
        this.isTemplateRef = this.footerTemplate instanceof TemplateRef;
        this.modalComponent.hasFooter = true;
    };
    ModalFooterComponent.prototype.saveFn = function () {
        this.thyOnSave.emit();
    };
    ModalFooterComponent.prototype.cancelFn = function () {
        this.thyOnCancel.emit();
    };
    __decorate([
        ContentChild('thyModalFooterTemplate'),
        __metadata("design:type", TemplateRef)
    ], ModalFooterComponent.prototype, "footerTemplate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ModalFooterComponent.prototype, "thyOnSave", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ModalFooterComponent.prototype, "thyOnCancel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ModalFooterComponent.prototype, "thySaving", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ModalFooterComponent.prototype, "thySavingText", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalFooterComponent.prototype, "thySaveText", void 0);
    ModalFooterComponent = __decorate([
        Component({
            selector: 'thy-modal-footer',
            template: "<div class=\"modal-footer\"> <ng-container *ngIf=\"!isTemplateRef\"> <div class=\"btn-pair\"> <button thyButton=\"primary\" (click)=\"saveFn()\" [thyLoading]=\"savingStatus\" [thyLoadingText]=\"savingText\">{{thySaveText ? thySaveText : '确认'}}</button> <button thyButton=\"link-secondary\" (click)=\"cancelFn()\">Cancel</button> </div> </ng-container> <ng-container *ngIf=\"isTemplateRef\"> <template [ngTemplateOutlet]=\"footerTemplate\"></template> </ng-container> </div> "
        }),
        __metadata("design:paramtypes", [ModalComponent])
    ], ModalFooterComponent);
    return ModalFooterComponent;
}());
export { ModalFooterComponent };
//# sourceMappingURL=modal-footer.component.js.map