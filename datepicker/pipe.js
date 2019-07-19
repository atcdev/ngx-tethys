var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
import { datepickerUtilConvertToDatepickerObject } from './util';
registerLocaleData(localeZhHans, 'zh-Hans');
var ThyDatepickerFormatPipe = /** @class */ (function () {
    function ThyDatepickerFormatPipe() {
        this.dataPipe = new DatePipe('zh-Hans');
    }
    ThyDatepickerFormatPipe.prototype.transform = function (value, exponent) {
        var _res;
        if (value) {
            var _value = datepickerUtilConvertToDatepickerObject(value);
            var _formatRule = ['yyyy-MM-dd'];
            if (_value.with_time) {
                _formatRule.push('HH:mm');
            }
            _res = this.dataPipe.transform(_value.date, _formatRule.join(' '));
        }
        else {
            _res = '';
        }
        return _res;
    };
    ThyDatepickerFormatPipe = __decorate([
        Pipe({ name: 'thyDatepickerFormat' })
    ], ThyDatepickerFormatPipe);
    return ThyDatepickerFormatPipe;
}());
export { ThyDatepickerFormatPipe };
//# sourceMappingURL=pipe.js.map