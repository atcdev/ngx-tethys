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
import { Component, HostBinding, Optional, Input, ViewEncapsulation, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { ThyFormDirective } from './form.directive';
import { inputValueToBoolean } from '../util/helpers';
import { TemplateRef } from '@angular/core';
import { ThyTranslate } from '../shared';
var internalIconMap = {
    date: 'wtf wtf-schedule-o'
};
var ThyFormGroupComponent = /** @class */ (function () {
    function ThyFormGroupComponent(thyParentForm, thyTranslate) {
        this.thyParentForm = thyParentForm;
        this.thyTranslate = thyTranslate;
        this.labelRequired = false;
        this.labelPaddingTopClear = false;
        this._rowFill = false;
        this._isFormGroup = true;
        this.isHorizontal = true;
        this.hasFeedback = false;
    }
    Object.defineProperty(ThyFormGroupComponent.prototype, "thyLabelText", {
        set: function (value) {
            this.labelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupComponent.prototype, "thyLabelTextTranslateKey", {
        set: function (value) {
            if (value) {
                this.labelText = this.thyTranslate.instant(value);
            }
            else {
                this.labelText = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupComponent.prototype, "thyLabelRequired", {
        set: function (value) {
            this.labelRequired = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupComponent.prototype, "thyLabelPaddingTopClear", {
        set: function (value) {
            this.labelPaddingTopClear = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupComponent.prototype, "thyFeedbackIcon", {
        set: function (value) {
            this.hasFeedback = true;
            if (internalIconMap[value]) {
                this.feedbackIcon = internalIconMap[value];
            }
            else {
                this.feedbackIcon = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupComponent.prototype, "thyTips", {
        set: function (value) {
            this.tips = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupComponent.prototype, "thyTipsTranslateKey", {
        set: function (value) {
            this.tips = this.thyTranslate.instant(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupComponent.prototype, "thyRowFill", {
        set: function (value) {
            this._rowFill = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    ThyFormGroupComponent.prototype.ngOnInit = function () {
        this.isHorizontal = this.thyParentForm
            ? this.thyParentForm.isHorizontal
            : true;
    };
    __decorate([
        HostBinding('class.row-fill'),
        __metadata("design:type", Object)
    ], ThyFormGroupComponent.prototype, "_rowFill", void 0);
    __decorate([
        HostBinding('class.form-group'),
        __metadata("design:type", Object)
    ], ThyFormGroupComponent.prototype, "_isFormGroup", void 0);
    __decorate([
        HostBinding('class.row'),
        __metadata("design:type", Object)
    ], ThyFormGroupComponent.prototype, "isHorizontal", void 0);
    __decorate([
        HostBinding('class.has-feedback'),
        __metadata("design:type", Object)
    ], ThyFormGroupComponent.prototype, "hasFeedback", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupComponent.prototype, "thyLabelText", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupComponent.prototype, "thyLabelTextTranslateKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupComponent.prototype, "thyLabelRequired", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupComponent.prototype, "thyLabelPaddingTopClear", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupComponent.prototype, "thyFeedbackIcon", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupComponent.prototype, "thyTips", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupComponent.prototype, "thyTipsTranslateKey", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyFormGroupComponent.prototype, "thyRowFill", null);
    __decorate([
        ContentChild('formGroup'),
        __metadata("design:type", TemplateRef)
    ], ThyFormGroupComponent.prototype, "contentTemplateRef", void 0);
    ThyFormGroupComponent = __decorate([
        Component({
            selector: 'thy-form-group',
            template: "<ng-container *ngIf=\"contentTemplateRef; else defaultTpl\"> <ng-container [ngTemplateOutlet]=\"contentTemplateRef\"></ng-container> <span *ngIf=\"feedbackIcon\" class=\"form-control-feedback {{ feedbackIcon }}\"></span> </ng-container> <ng-template #defaultTpl> <label class=\"form-label\" [ngClass]=\"{ 'col-sm-2 col-form-label': isHorizontal, 'label-required': labelRequired, 'pt-0': labelPaddingTopClear }\" >{{ labelText }}</label > <div [ngClass]=\"{ 'col-sm-10 col-form-control': isHorizontal, 'position-relative': !isHorizontal }\"> <ng-content></ng-content> <span *ngIf=\"feedbackIcon\" class=\"form-control-feedback {{ feedbackIcon }}\"></span> <span *ngIf=\"tips\" class=\"form-text text-info\">{{ tips }}</span> </div> </ng-template> ",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [ThyFormDirective,
            ThyTranslate])
    ], ThyFormGroupComponent);
    return ThyFormGroupComponent;
}());
export { ThyFormGroupComponent };
//# sourceMappingURL=form-group.component.js.map