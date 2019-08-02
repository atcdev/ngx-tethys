var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ThyModalService } from '../modal/modal.service';
var ThyConfirmComponent = /** @class */ (function () {
    function ThyConfirmComponent(modalService) {
        this.modalService = modalService;
    }
    ThyConfirmComponent.prototype.ngOnInit = function () {
        if (this.contentValues) {
            for (var key in this.contentValues) {
                if (this.contentValues.hasOwnProperty(key)) {
                    var _value = this.contentValues[key];
                    this.content = this.content.replace('{{' + key + '}}', _value);
                }
            }
        }
    };
    ThyConfirmComponent.prototype.confirm = function () {
        var _this = this;
        var _action = this.buttons.confirm.action();
        if (_action && _action.subscribe) {
            this.loading = true;
            this._confirmAction$ = _action.subscribe({
                next: function () {
                    _this.closeModal();
                },
                complete: function () {
                    _this.loading = false;
                }
            });
        }
        else {
            this.closeModal();
        }
    };
    ThyConfirmComponent.prototype.closeModal = function () {
        this.modalService.close();
    };
    ThyConfirmComponent.prototype.ngOnDestroy = function () {
        if (this._confirmAction$) {
            this._confirmAction$.unsubscribe();
        }
    };
    ThyConfirmComponent = __decorate([
        Component({
            template: "<thy-modal> <thy-modal-header thyTitle=\"{{title}}\"></thy-modal-header> <thy-modal-body class=\"thy-form\"> <div class=\"form-group\"> <p [innerHtml]=\"content\"></p> </div> <div class=\"form-group\"> <div class=\"btn-pair\"> <button thyButton=\"{{buttons.confirm.type}}\" (click)=\"confirm()\" [thyLoading]=\"loading\" [thyLoadingText]=\"buttons.confirm.loadingText\">{{buttons.confirm.text}}</button> <button thyButton=\"link-secondary\" (click)=\"closeModal()\">Cancel</button> </div> </div> </thy-modal-body> </thy-modal>"
        }),
        __metadata("design:paramtypes", [ThyModalService])
    ], ThyConfirmComponent);
    return ThyConfirmComponent;
}());
export { ThyConfirmComponent };
//# sourceMappingURL=confirm.component.js.map