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
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject } from '@angular/core';
import { ThyDialogRef } from '../dialog-ref';
import { THY_CONFIRM_DEFAULT_OPTIONS } from '../confirm.config';
import { finalize } from 'rxjs/operators';
var ThyConfirmComponent = /** @class */ (function () {
    function ThyConfirmComponent(dialogRef, changeDetectorRef, defaultConfig) {
        this.dialogRef = dialogRef;
        this.changeDetectorRef = changeDetectorRef;
        this.defaultConfig = defaultConfig;
    }
    ThyConfirmComponent.prototype.ngOnInit = function () {
        if (this.options) {
            this.title = this.options.title || this.defaultConfig.title;
            this.content = this.options.content;
            this.okText = this.options.okText || this.defaultConfig.okText;
            this.okType = this.options.okType || this.defaultConfig.okType;
            this.cancelText = this.options.cancelText || this.defaultConfig.cancelText;
            this.okLoadingText = this.options.okLoadingText || this.okText;
            this.options.okLoadingText = this.options.okLoadingText || this.options.okText;
        }
    };
    ThyConfirmComponent.prototype.confirm = function () {
        var _this = this;
        this.loading = true;
        var result = this.options.onOk();
        if (result && result.subscribe) {
            result
                .pipe(finalize(function () {
                _this.loading = false;
                _this.changeDetectorRef.markForCheck();
            }))
                .subscribe(function (success) {
                if (success) {
                    _this.close();
                }
            });
        }
        else {
            this.close();
        }
    };
    ThyConfirmComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ThyConfirmComponent.prototype.ngOnDestroy = function () { };
    ThyConfirmComponent = __decorate([
        Component({
            selector: 'thy-confirm-default',
            template: "<thy-dialog-header thyTitle=\"Install Angular\"> <ng-template #dialogHeader> <h3 class=\"dialog-title\">{{ title }}</h3> <button type=\"button\" class=\"close\" (click)=\"close()\"> <i class=\"wtf wtf-times\"></i> </button> </ng-template> </thy-dialog-header> <thy-dialog-body class=\"thy-form\"> <div class=\"form-group\"> <p [innerHTML]=\"content\"></p> </div> <div class=\"form-group\"> <div class=\"btn-pair\"> <button [thyButton]=\"okType\" (click)=\"confirm()\" [thyLoading]=\"loading\" [thyLoadingText]=\"okLoadingText\"> 确认 </button> <button thyButton=\"link-secondary\" (click)=\"close()\">{{ cancelText }}</button> </div> </div> </thy-dialog-body> ",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __param(2, Inject(THY_CONFIRM_DEFAULT_OPTIONS)),
        __metadata("design:paramtypes", [ThyDialogRef,
            ChangeDetectorRef, Object])
    ], ThyConfirmComponent);
    return ThyConfirmComponent;
}());
export { ThyConfirmComponent };
//# sourceMappingURL=confirm.component.js.map