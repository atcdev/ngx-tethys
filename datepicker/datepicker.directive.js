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
import { ThyDatepickerContainerComponent } from './datepicker-container.component';
import { ThyDatepickerConfig } from './datepicker.config';
import { DatepickerValueShowTypesEnum } from './i.datepicker';
import { ThyDatepickerService } from './datepicker.service';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { inputValueToBoolean } from '../util/helpers';
import { datepickerUtilIdentificationValueType, datepickerUtilConvertToDatepickerObject } from './util';
import { ThyPositioningService, PlacementTypes } from '../positioning/positioning.service';
registerLocaleData(localeZhHans, 'zh-Hans');
var FORMAT_RULES = {
    default: 'yyyy-MM-dd',
    short: 'yyyy-MM-dd',
    full: 'yyyy-MM-dd HH:mm'
};
var DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ThyDatepickerDirective; }),
    multi: true
};
var ThyDatepickerDirective = /** @class */ (function () {
    // @Output() thyOnChange: EventEmitter<any> = new EventEmitter();
    function ThyDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, datepickerService, thyPositioningService) {
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.datepickerService = datepickerService;
        this.thyPositioningService = thyPositioningService;
        this.dataPipe = new DatePipe('zh-Hans');
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._isAfterContentInit = false;
        this.thyPlacement = PlacementTypes.bottom;
        this.thyAutoAdapt = true;
        this.thyTriggers = 'click';
        this.thyContainer = 'body';
        this.thyOutsideClick = true;
        this.thyDisabled = false;
        this.thyShowTime = false;
        this.thyFormat = null;
        this._loader = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    ThyDatepickerDirective.prototype.ngOnInit = function () {
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
    ThyDatepickerDirective.prototype.ngAfterContentInit = function () {
        this._isAfterContentInit = true;
    };
    ThyDatepickerDirective.prototype.writeValue = function (value) {
        this._initValueDate(value, true);
        if (this._isAfterContentInit) {
            this._saveInitValueClone();
            // this._isFirstInitValueWithNullOnce = true;
        }
    };
    ThyDatepickerDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ThyDatepickerDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    ThyDatepickerDirective.prototype.show = function () {
        var _this = this;
        if (this.thyDisabled) {
            return;
        }
        this.datepickerService.initLocale();
        var a = datepickerUtilConvertToDatepickerObject(this.thyMinDate);
        var dateContainerRef = this._loader
            .provide({ provide: ThyDatepickerConfig, useValue: this._config })
            .attach(ThyDatepickerContainerComponent)
            .to(this.thyContainer)
            // .position({ attachment: this.thyPlacement })
            .show({
            hideLoader: function () {
                _this.hide();
            },
            initialState: {
                withTime: inputValueToBoolean(this.thyShowTime),
                value: this._value,
                valueRef: this._valueRef,
                maxDate: datepickerUtilConvertToDatepickerObject(this.thyMaxDate).date,
                minDate: datepickerUtilConvertToDatepickerObject(this.thyMinDate).date,
                changeValue: function (result) {
                    // this._isFirstInitValueWithNullOnce = false;
                    _this._initFormatRule(result);
                    _this._setInputProperty(result.date);
                    _this._sendValueToNgModel(result);
                    _this._initValueDate(result);
                }
            }
        });
        this._renderer.addClass(this._elementRef.nativeElement, this._config.openedClass);
        this.thyPositioningService.setPosition({
            target: dateContainerRef.location,
            attach: this._elementRef,
            placement: this.thyPlacement,
            autoAdapt: this.thyAutoAdapt,
            offset: 2,
            appendToBody: true
        });
    };
    ThyDatepickerDirective.prototype.hide = function () {
        this._renderer.removeClass(this._elementRef.nativeElement, this._config.openedClass);
        this._loader.hide();
    };
    ThyDatepickerDirective.prototype._initValueDate = function (value, isRefreshType) {
        if (isRefreshType) {
            this._valueType = datepickerUtilIdentificationValueType(value);
            this._value = datepickerUtilConvertToDatepickerObject(value, this._valueType);
        }
        else {
            this._value = datepickerUtilConvertToDatepickerObject(value);
        }
        this._initFormatRule();
        this._setInputProperty(this._value.date);
    };
    ThyDatepickerDirective.prototype._saveInitValueClone = function () {
        if (this._value) {
            this._valueRef = {
                date: this._value.date,
                with_time: this._value.with_time
            };
        }
    };
    ThyDatepickerDirective.prototype._initFormatRule = function (value) {
        if (this.thyFormat) {
            this._format = this.thyFormat;
        }
        else {
            // if (this._isFirstInitValueWithNullOnce) {
            //     this._format = '';
            // } else {
            var _v = value || this._value;
            if (_v.with_time) {
                this._format = FORMAT_RULES.full;
            }
            else {
                this._format = FORMAT_RULES.short;
            }
            // }
        }
    };
    ThyDatepickerDirective.prototype._setInputProperty = function (value) {
        var initialDate = this.dataPipe.transform(value, this._format);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', initialDate);
    };
    ThyDatepickerDirective.prototype._sendValueToNgModel = function (result) {
        switch (this._valueType) {
            case DatepickerValueShowTypesEnum.datepickerTimeObject:
                this._value = {
                    date: result.date && result.date.getTime() / 1000,
                    with_time: result.with_time
                };
                break;
            case DatepickerValueShowTypesEnum.dateTime:
                this._value = result.date && result.date.getTime() / 1000;
                break;
            case DatepickerValueShowTypesEnum.nullValue:
                this._value = result.date && result.date.getTime() / 1000;
                break;
            default:
                this._value = {
                    date: result.date && Math.floor(result.date.getTime() / 1000),
                    with_time: result.with_time
                };
                break;
        }
        this._onChange(this._value);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyDatepickerDirective.prototype, "thyPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerDirective.prototype, "thyAutoAdapt", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerDirective.prototype, "thyTriggers", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerDirective.prototype, "thyContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerDirective.prototype, "thyOutsideClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerDirective.prototype, "thyDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerDirective.prototype, "thyShowTime", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyDatepickerDirective.prototype, "thyFormat", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerDirective.prototype, "thyMaxDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerDirective.prototype, "thyMinDate", void 0);
    ThyDatepickerDirective = __decorate([
        Directive({
            selector: '[thyDatepicker]',
            providers: [DATEPICKER_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [ThyDatepickerConfig,
            ElementRef,
            Renderer2,
            ViewContainerRef,
            ComponentLoaderFactory,
            ThyDatepickerService,
            ThyPositioningService])
    ], ThyDatepickerDirective);
    return ThyDatepickerDirective;
}());
export { ThyDatepickerDirective };
//# sourceMappingURL=datepicker.directive.js.map