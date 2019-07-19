var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ThyModalService } from './modal.service';
var ModalHeaderComponent = /** @class */ (function () {
    function ModalHeaderComponent(bsModalService, thyModalService) {
        this.bsModalService = bsModalService;
        this.thyModalService = thyModalService;
        this.thyOnClose = new EventEmitter();
    }
    ModalHeaderComponent.prototype.ngOnInit = function () {
        this.isTemplateRef = this.headerTemplate instanceof TemplateRef;
    };
    ModalHeaderComponent.prototype.closeModal = function (event) {
        if (this.thyOnClose.observers.length > 0) {
            this.thyOnClose.emit();
        }
        else {
            this.thyModalService.close();
        }
    };
    __decorate([
        ContentChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], ModalHeaderComponent.prototype, "headerTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalHeaderComponent.prototype, "thyTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalHeaderComponent.prototype, "thyIcon", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ModalHeaderComponent.prototype, "thyOnClose", void 0);
    ModalHeaderComponent = __decorate([
        Component({
            selector: 'thy-modal-header',
            template: "<div class=\"modal-header\"> <ng-container *ngIf=\"!isTemplateRef\"> <h3 class=\"modal-title\"> <i *ngIf=\"thyIcon\" class=\"{{thyIcon}}\"></i> {{thyTitle}} </h3> <button type=\"button\" class=\"close\" (click)=\"closeModal($event)\"> <i class=\"wtf wtf-times\"></i> </button> </ng-container> <ng-container *ngIf=\"isTemplateRef\"> <template [ngTemplateOutlet]=\"headerTemplate\"></template> </ng-container> </div> "
        }),
        __metadata("design:paramtypes", [BsModalService,
            ThyModalService])
    ], ModalHeaderComponent);
    return ModalHeaderComponent;
}());
export { ModalHeaderComponent };
//# sourceMappingURL=modal-header.component.js.map