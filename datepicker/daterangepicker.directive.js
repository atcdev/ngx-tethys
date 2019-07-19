var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer2, ViewContainerRef, Input, forwardRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { DatepickerValueShowTypesEnum, DatepickerFormatRules } from './i.datepicker';
import { ThyDatepickerService } from './datepicker.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { daterangepickerUtilIdentificationValueType, daterangepickerUtilConvertToDaterangepickerObject } from './util';
import { ThyDaterangepickerContainerComponent } from './daterangepicker-container.component';
import { ThyPositioningService } from '../positioning/positioning.service';
import { ThyDaterangepickerConfig } from './daterangepicker.config';
var DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ThyDaterangepickerDirective; }),
    multi: true
};
var ThyDaterangepickerDirective = /** @class */ (function () {
    // @Output() thyOnChange: EventEmitter<any> = new EventEmitter();
    function ThyDaterangepickerDirective(_elementRef, _renderer, _viewContainerRef, cis, service, thyPositioningService, _config) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this.cis = cis;
        this.service = service;
        this.thyPositioningService = thyPositioningService;
        this._config = _config;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._isAfterContentInit = false;
        this._isFirstShowInputProperty = true;
        this.store = {};
        this.thyPlacement = 'bottom';
        this.thyTriggers = 'click';
        this.thyContainer = 'body';
        this.thyOutsideClick = true;
        this.thyDisabled = false;
        this.thyShowTime = false;
        this.thyFormat = null;
        this._loader = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    ThyDaterangepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._loader.listen({
            outsideClick: this.thyOutsideClick,
            triggers: this.thyTriggers,
            show: function () { return _this.show(); },
            hide: function () {
                _this.hide();
            }
        });
    };
    ThyDaterangepickerDirective.prototype.ngAfterContentInit = function () {
        this._isAfterContentInit = true;
    };
    ThyDaterangepickerDirective.prototype.writeValue = function (value) {
        if (this._isAfterContentInit) {
            this.initValueData(value);
            this._initFormatRule();
            this._setInputProperty();
        }
    };
    ThyDaterangepickerDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ThyDaterangepickerDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    ThyDaterangepickerDirective.prototype.show = function () {
        var _this = this;
        if (this.thyDisabled) {
            return;
        }
        this.service.initLocale();
        var dateRangeContainerRef = this._loader.attach(ThyDaterangepickerContainerComponent)
            .to(this.thyContainer)
            .show({
            hideLoader: function () {
                _this.hide();
            },
            initialState: {
                store: this.store,
                value: this._value,
                // withTime: inputValueToBoolean(this.thyShowTime),
                changeValue: function (result) {
                    _this._initFormatRule();
                    _this._setInputProperty();
                    _this._sendValueToNgModel();
                }
            }
        });
        this._renderer.addClass(this._elementRef.nativeElement, this._config.openedClass);
        this.thyPositioningService.setPosition({
            target: dateRangeContainerRef.location,
            attach: this._elementRef,
            placement: this.thyPlacement,
            offset: 2,
            appendToBody: true
        });
    };
    ThyDaterangepickerDirective.prototype.hide = function () {
        this._renderer.removeClass(this._elementRef.nativeElement, this._config.openedClass);
        this._loader.hide();
    };
    ThyDaterangepickerDirective.prototype.initValueData = function (value, isRefreshType) {
        this.store.originValue = value;
        this.store.originValueType = daterangepickerUtilIdentificationValueType(value);
        // this.store.originWithTime = value && value.begin && value.begin.with_time;
        // this.store.withTime = inputValueToBoolean(this.thyShowTime);
        this.store.value = daterangepickerUtilConvertToDaterangepickerObject(value);
    };
    ThyDaterangepickerDirective.prototype._initFormatRule = function () {
        if (this.thyFormat) {
            this._showFormatRule = this.thyFormat;
        }
        else {
            // if (this.store.withTime) {
            //     this._showFormatRule = DatepickerFormatRules.full;
            // } else {
            //     this._showFormatRule = DatepickerFormatRules.short;
            // }
            this._showFormatRule = DatepickerFormatRules.short;
        }
    };
    ThyDaterangepickerDirective.prototype._setInputProperty = function () {
        var initialDate = this.service.dataPipe.transform(this.store.value[0], this._showFormatRule)
            + ' ~ '
            + this.service.dataPipe.transform(this.store.value[1], this._showFormatRule);
        if (this.store.value[0] == null || this.store.value[1] == null) {
            initialDate = '';
        }
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', initialDate);
    };
    ThyDaterangepickerDirective.prototype._formatBeginTime = function (begin) {
        if (begin) {
            var beginDate = new Date(begin.getFullYear(), begin.getMonth(), begin.getDate());
            return Math.floor(beginDate.getTime() / 1000);
        }
        return 0;
    };
    ThyDaterangepickerDirective.prototype._formatEndTime = function (end) {
        if (end) {
            var endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59);
            return Math.floor(endDate.getTime() / 1000);
        }
        return 0;
    };
    ThyDaterangepickerDirective.prototype._sendValueToNgModel = function () {
        var result;
        switch (this.store.originValueType) {
            case DatepickerValueShowTypesEnum.daterangepickerTime:
                result = {
                    begin: this._formatBeginTime(this.store.value[0]),
                    end: this._formatEndTime(this.store.value[1])
                };
                break;
            case DatepickerValueShowTypesEnum.daterangepickerTimeObject:
                result = {
                    begin: {
                        date: this._formatBeginTime(this.store.value[0]),
                    },
                    end: {
                        date: this._formatEndTime(this.store.value[1]),
                    }
                };
                break;
            default:
                result = {
                    begin: this._formatBeginTime(this.store.value[0]),
                    end: this._formatEndTime(this.store.value[1])
                };
                break;
        }
        this._onChange(result);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyDaterangepickerDirective.prototype, "thyPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDaterangepickerDirective.prototype, "thyTriggers", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDaterangepickerDirective.prototype, "thyContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDaterangepickerDirective.prototype, "thyOutsideClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDaterangepickerDirective.prototype, "thyDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDaterangepickerDirective.prototype, "thyShowTime", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyDaterangepickerDirective.prototype, "thyFormat", void 0);
    ThyDaterangepickerDirective = __decorate([
        Directive({
            selector: '[thyDaterangepicker]',
            providers: [DATEPICKER_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            ViewContainerRef,
            ComponentLoaderFactory,
            ThyDatepickerService,
            ThyPositioningService,
            ThyDaterangepickerConfig])
    ], ThyDaterangepickerDirective);
    return ThyDaterangepickerDirective;
}());
export { ThyDaterangepickerDirective };
//# sourceMappingURL=daterangepicker.directive.js.map