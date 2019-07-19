var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ThyConfirmComponent } from './confirm.component';
import { ThyModalService } from '../modal/modal.service';
import { ThyTranslate } from '../shared';
import { isObject } from '../util/helpers';
var ThyConfirmService = /** @class */ (function () {
    function ThyConfirmService(modalService, translate) {
        this.modalService = modalService;
        this.translate = translate;
    }
    ThyConfirmService.prototype.show = function (option) {
        this.modalService.show(ThyConfirmComponent, {
            initialState: this._formatOption(option)
        });
    };
    ThyConfirmService.prototype.delete = function (title, content, action) {
        var _deleteOption;
        _deleteOption = {
            content: content,
            buttons: {
                confirm: {
                    type: 'danger',
                    action: action
                }
            }
        };
        if (title) {
            _deleteOption.title = title;
        }
        this.show(_deleteOption);
    };
    ThyConfirmService.prototype.deleteTranslateKey = function (titleKey, contentKey, action) {
        var title = null, content = null;
        if (titleKey) {
            title = this.translate.instant(titleKey);
        }
        if (isObject(contentKey)) {
            contentKey = contentKey;
            content = this.translate.instant(contentKey.content, contentKey.params);
        }
        else {
            contentKey = contentKey;
            content = this.translate.instant(contentKey);
        }
        this.delete(title, content, action);
    };
    ThyConfirmService.prototype._formatOption = function (option) {
        var _defaultOption;
        _defaultOption = {
            title: this.translate.instant('common.DELETE_CONFIRM'),
            content: this.translate.instant('common.confirm.CONTENT_DEFAULT'),
            buttons: {
                confirm: {
                    text: this.translate.instant('common.OK'),
                    loadingText: this.translate.instant('common.DELETING'),
                },
                decline: {}
            }
        };
        var _res = {
            buttons: {
                confirm: {},
                decline: {}
            }
        };
        _res = Object.assign({}, _defaultOption, option);
        if (option.buttons && option.buttons.confirm) {
            _res.buttons.confirm = Object.assign({}, _res.buttons.confirm, _defaultOption.buttons.confirm, option.buttons.confirm);
        }
        if (option.buttons && option.buttons.decline) {
            _res.buttons.decline = Object.assign({}, _res.buttons.decline, _defaultOption.buttons.decline, option.buttons.decline);
        }
        return Object.assign({}, _defaultOption, option);
    };
    ThyConfirmService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ThyModalService,
            ThyTranslate])
    ], ThyConfirmService);
    return ThyConfirmService;
}());
export { ThyConfirmService };
//# sourceMappingURL=confirm.service.js.map