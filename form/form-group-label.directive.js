var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, Input } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
import { ThyTranslate } from '../shared';
var ThyFormGroupLabelDirective = /** @class */ (function () {
    function ThyFormGroupLabelDirective(thyTranslate) {
        this.thyTranslate = thyTranslate;
        this.labelRequired = false;
        this._isFormGroupLabel = true;
    }
    Object.defineProperty(ThyFormGroupLabelDirective.prototype, "thyLabelText", {
        set: function (value) {
            this.labelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupLabelDirective.prototype, "thyLabelTranslateKey", {
        set: function (translateKey) {
            this.labelText = this.thyTranslate.instant(translateKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormGroupLabelDirective.prototype, "thyLabelRequired", {
        set: function (value) {
            this.labelRequired = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.label-required'),
        __metadata("design:type", Object)
    ], ThyFormGroupLabelDirective.prototype, "labelRequired", void 0);
    __decorate([
        HostBinding('class.col-form-label'),
        __metadata("design:type", Object)
    ], ThyFormGroupLabelDirective.prototype, "_isFormGroupLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupLabelDirective.prototype, "thyLabelText", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupLabelDirective.prototype, "thyLabelTranslateKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormGroupLabelDirective.prototype, "thyLabelRequired", null);
    ThyFormGroupLabelDirective = __decorate([
        Directive({
            selector: '[thyFormGroupLabel]'
        }),
        __metadata("design:paramtypes", [ThyTranslate])
    ], ThyFormGroupLabelDirective);
    return ThyFormGroupLabelDirective;
}());
export { ThyFormGroupLabelDirective };
//# sourceMappingURL=form-group-label.directive.js.map