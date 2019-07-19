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
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales, defineLocale } from 'ngx-bootstrap/chronos';
import { zhCnLocale, jaLocale, enGbLocale } from 'ngx-bootstrap/locale';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
import { daterangepickerUtilIdentificationValueType, daterangepickerUtilConvertToDaterangepickerObject } from './util';
registerLocaleData(localeZhHans, 'zh-Hans');
var ThyDatepickerService = /** @class */ (function () {
    function ThyDatepickerService(localeService) {
        this.localeService = localeService;
        this.dataPipe = new DatePipe('zh-Hans');
        this.locale = 'zh-cn';
        this.locales = listLocales();
        this.store = {};
    }
    ThyDatepickerService.prototype.initLocale = function (value) {
        if (value) {
            this.locale = value;
            this.localeRef = null;
        }
        if (this.localeRef) {
            return;
        }
        switch (this.locale) {
            case 'zh-cn':
            case 'zh-tw':
                zhCnLocale.week.dow = 0;
                this.localeRef = defineLocale('zh-cn', zhCnLocale);
                break;
            case 'ja-jp':
                this.localeRef = defineLocale('ja-jp', jaLocale);
                break;
            case 'en-us':
                this.localeRef = defineLocale('en-us', enGbLocale);
                break;
        }
        this.localeService.use(this.locale);
    };
    ThyDatepickerService.prototype.initValueData = function (value, isRefreshType) {
        this.store.originValue = value;
        if (this.storeType === 'range') {
            this.store.originValueType = daterangepickerUtilIdentificationValueType(value);
            this.store.originWithTime = value && value.begin && value.begin.with_time;
        }
        if (this.storeType === 'range') {
            this.store.value = daterangepickerUtilConvertToDaterangepickerObject(value);
        }
    };
    ThyDatepickerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [BsLocaleService])
    ], ThyDatepickerService);
    return ThyDatepickerService;
}());
export { ThyDatepickerService };
//# sourceMappingURL=datepicker.service.js.map