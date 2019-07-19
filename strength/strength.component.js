var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThyTranslate } from '../shared/translate';
var ThyStrengthEnum;
(function (ThyStrengthEnum) {
    ThyStrengthEnum[ThyStrengthEnum["highest"] = 4] = "highest";
    ThyStrengthEnum[ThyStrengthEnum["high"] = 3] = "high";
    ThyStrengthEnum[ThyStrengthEnum["average"] = 2] = "average";
    ThyStrengthEnum[ThyStrengthEnum["low"] = 1] = "low";
})(ThyStrengthEnum || (ThyStrengthEnum = {}));
var strengthMap = (_a = {},
    _a[ThyStrengthEnum.highest] = {
        level: 'highest',
        text: '最高'
    },
    _a[ThyStrengthEnum.high] = {
        level: 'high',
        text: '高'
    },
    _a[ThyStrengthEnum.average] = {
        level: 'average',
        text: '中'
    },
    _a[ThyStrengthEnum.low] = {
        level: 'low',
        text: '低'
    },
    _a);
var ThyStrengthComponent = /** @class */ (function () {
    function ThyStrengthComponent(translate) {
        this.translate = translate;
        this.styleClass = true;
        this.strengthMap = strengthMap;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
    }
    ThyStrengthComponent_1 = ThyStrengthComponent;
    Object.defineProperty(ThyStrengthComponent.prototype, "titleKey", {
        set: function (value) {
            this.strengthTitle = this.translate.instant(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyStrengthComponent.prototype, "highestKey", {
        set: function (value) {
            this.strengthMap[ThyStrengthEnum.highest].text = this.translate.instant(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyStrengthComponent.prototype, "highKey", {
        set: function (value) {
            this.strengthMap[ThyStrengthEnum.high].text = this.translate.instant(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyStrengthComponent.prototype, "averageKey", {
        set: function (value) {
            this.strengthMap[ThyStrengthEnum.average].text = this.translate.instant(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyStrengthComponent.prototype, "lowKey", {
        set: function (value) {
            this.strengthMap[ThyStrengthEnum.low].text = this.translate.instant(value);
        },
        enumerable: true,
        configurable: true
    });
    ThyStrengthComponent.prototype.ngOnInit = function () { };
    ThyStrengthComponent.prototype.writeValue = function (value) {
        this.strength = value;
    };
    ThyStrengthComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ThyStrengthComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    var ThyStrengthComponent_1;
    __decorate([
        HostBinding('class.password-strength-container'),
        __metadata("design:type", Object)
    ], ThyStrengthComponent.prototype, "styleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyStrengthComponent.prototype, "titleKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyStrengthComponent.prototype, "highestKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyStrengthComponent.prototype, "highKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyStrengthComponent.prototype, "averageKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyStrengthComponent.prototype, "lowKey", null);
    ThyStrengthComponent = ThyStrengthComponent_1 = __decorate([
        Component({
            selector: 'thy-strength',
            template: "<div>{{strengthTitle}} <span class=\"strength-text strength-text-{{strengthMap[strength]?.level}}\">{{strengthMap[strength]?.text}}</span></div> <div class=\"strength-level strength-level-{{strengthMap[strength]?.level}}\"> <span></span> </div> ",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyStrengthComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ThyTranslate])
    ], ThyStrengthComponent);
    return ThyStrengthComponent;
}());
export { ThyStrengthComponent };
//# sourceMappingURL=strength.component.js.map