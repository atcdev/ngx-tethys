var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef, HostBinding, Optional, ElementRef } from '@angular/core';
import { ThyDialog } from '../dialog.service';
import { ThyDialogContainerComponent } from '../dialog-container.component';
import { ThyTranslate } from '../../shared';
var DialogHeaderComponent = /** @class */ (function () {
    function DialogHeaderComponent(elementRef, dialog, translate, dialogContainer) {
        this.elementRef = elementRef;
        this.dialog = dialog;
        this.translate = translate;
        this.dialogContainer = dialogContainer;
        this._isDialogHeader = true;
        this.thyOnClose = new EventEmitter();
    }
    Object.defineProperty(DialogHeaderComponent.prototype, "thyTitleTranslationKey", {
        set: function (key) {
            if (key && !this.thyTitle) {
                this.thyTitle = this.translate.instant(key);
            }
        },
        enumerable: true,
        configurable: true
    });
    DialogHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dialogContainer) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the ThyDialogContainerComponent isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the ThyDialogContainerComponent by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            var dialogRef = this.dialog.getClosestDialog(this.elementRef.nativeElement);
            this.dialogContainer = dialogRef.containerInstance;
        }
        // change in next microtask avoid throw ExpressionChangedAfterItHasBeenCheckedError
        // because sub component change parent's HostBinding property (ariaLabelledBy)
        Promise.resolve().then(function () {
            if (_this.dialogContainer) {
                _this.dialogContainer.ariaLabelledBy = _this.thyTitle;
            }
        });
    };
    DialogHeaderComponent.prototype.close = function (event) {
        if (this.thyOnClose.observers.length > 0) {
            this.thyOnClose.emit(event);
        }
        else {
            this.dialog.close();
        }
    };
    __decorate([
        HostBinding("class.dialog-header"),
        __metadata("design:type", Object)
    ], DialogHeaderComponent.prototype, "_isDialogHeader", void 0);
    __decorate([
        ContentChild('dialogHeader'),
        __metadata("design:type", TemplateRef)
    ], DialogHeaderComponent.prototype, "headerTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DialogHeaderComponent.prototype, "thyTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogHeaderComponent.prototype, "thyTitleTranslationKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DialogHeaderComponent.prototype, "thyIcon", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DialogHeaderComponent.prototype, "thyOnClose", void 0);
    DialogHeaderComponent = __decorate([
        Component({
            selector: 'thy-dialog-header',
            template: "<ng-container *ngIf=\"headerTemplate; else: defaultHeader\"> <template [ngTemplateOutlet]=\"headerTemplate\"></template> </ng-container> <ng-template #defaultHeader> <h3 class=\"modal-title\"> <i *ngIf=\"thyIcon\" class=\"{{thyIcon}}\"></i> {{ thyTitle }} </h3> <button type=\"button\" class=\"close\" (click)=\"close($event)\"> <i class=\"wtf wtf-times\"></i> </button> </ng-template> ",
            // changeDetection: ChangeDetectionStrategy.OnPush,
            exportAs: 'thyDialogHeader'
        }),
        __param(3, Optional()),
        __metadata("design:paramtypes", [ElementRef,
            ThyDialog,
            ThyTranslate,
            ThyDialogContainerComponent])
    ], DialogHeaderComponent);
    return DialogHeaderComponent;
}());
export { DialogHeaderComponent };
//# sourceMappingURL=dialog-header.component.js.map