var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { skip } from 'rxjs/operators';
var ThyDatepickerContainerComponent = /** @class */ (function () {
    function ThyDatepickerContainerComponent(_config, _elementRef, _renderer, _viewContainerRef, localeService) {
        this._config = _config;
        this.localeService = localeService;
        this.isShowTime = false;
        this.isCanTime = false;
        this.isMeridian = false;
        this._config.containerClass = 'theme-ngx';
        this._config.showWeekNumbers = false;
        this.localeService.use('en');
    }
    ThyDatepickerContainerComponent.prototype.ngOnInit = function () {
        this._initTimeShowMode();
        this._initDataValue();
    };
    ThyDatepickerContainerComponent.prototype.onValueChange = function (value) {
        if (!this.isShowTime) {
            this._sendChangeValueEvent();
        }
    };
    ThyDatepickerContainerComponent.prototype.onTimeOk = function () {
        this._sendChangeValueEvent();
    };
    ThyDatepickerContainerComponent.prototype.onClear = function () {
        this._sendChangeValueEvent({
            date: null,
            with_time: this.initialState.valueRef.with_time
        });
    };
    ThyDatepickerContainerComponent.prototype.hide = function () {
        this.hideLoader();
    };
    ThyDatepickerContainerComponent.prototype.changeTimeShowMode = function (type) {
        switch (type) {
            case 'clear':
                this.isCanTime = false;
                this.isShowTime = false;
                break;
            case 'can':
                this.isCanTime = true;
                this.isShowTime = false;
                break;
            case 'show':
                this.isCanTime = false;
                this.isShowTime = true;
                break;
        }
    };
    ThyDatepickerContainerComponent.prototype._sendChangeValueEvent = function (value) {
        if (value !== undefined) {
            this.initialState.changeValue(value);
        }
        else {
            this.initialState.changeValue({
                date: this.value,
                with_time: this.isShowTime
            });
        }
        this.hide();
    };
    ThyDatepickerContainerComponent.prototype._initDataValue = function () {
        var _this = this;
        this.value = this.initialState.value.date ? new Date(this.initialState.value.date.getTime()) : new Date();
        this._dpContainerRef._effects.init(this._dpContainerRef._store);
        this._dpContainerRef._effects.setValue(this.value);
        this._dpContainerRef._effects.setMinDate(this.initialState.minDate);
        this._dpContainerRef._effects.setMaxDate(this.initialState.maxDate);
        this._dpContainerRef.valueChange.pipe(skip(1)).subscribe(function (result) {
            var nowDate = new Date();
            var value = new Date(result.getFullYear(), result.getMonth(), result.getDate(), nowDate.getHours(), nowDate.getMinutes(), nowDate.getSeconds());
            _this.value = value;
            _this.onValueChange(value);
        });
    };
    ThyDatepickerContainerComponent.prototype._initTimeShowMode = function () {
        if (this.initialState.value.with_time) {
            this.changeTimeShowMode('show');
        }
        else {
            if (this.initialState.withTime) {
                this.changeTimeShowMode('can');
            }
        }
    };
    __decorate([
        ViewChild('dpContainer'),
        __metadata("design:type", Object)
    ], ThyDatepickerContainerComponent.prototype, "_dpContainerRef", void 0);
    ThyDatepickerContainerComponent = __decorate([
        Component({
            selector: 'thy-datepicker-container',
            template: "<div class=\"thy-datepicker\"> <bs-datepicker-container #dpContainer></bs-datepicker-container> <div *ngIf=\"isShowTime || isCanTime\" class=\"timepicker-section\" (click)=\"$event.stopPropagation()\"> <div *ngIf=\"isCanTime\" class=\"timepicker-set\"> <a href=\"javascript:;\" class=\"link-has-icon timepicker-set-btn\" (click)=\"changeTimeShowMode('show')\"> <i class=\"wtf wtf-timeline-o\"></i>Set time</a > </div> <timepicker *ngIf=\"isShowTime\" class=\"timepicker-warp\" [(ngModel)]=\"value\" [showMeridian]=\"isMeridian\"></timepicker> <div class=\"timepicker-btn-warp\"> <button *ngIf=\"!isCanTime\" class=\"timepicker-ok-btn\" thyButton=\"primary\" thySize=\"sm\" (click)=\"onTimeOk()\"> Confirm </button> <button class=\"timepicker-clear-btn\" thyButton=\"link-secondary\" thySize=\"sm\" (click)=\"onClear()\">Clear</button> </div> </div> </div> ",
            providers: [BsDatepickerConfig]
        }),
        __metadata("design:paramtypes", [BsDatepickerConfig,
            ElementRef,
            Renderer2,
            ViewContainerRef,
            BsLocaleService])
    ], ThyDatepickerContainerComponent);
    return ThyDatepickerContainerComponent;
}());
export { ThyDatepickerContainerComponent };
//# sourceMappingURL=datepicker-container.component.js.map