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
import { ThyDaterangepickerConfig } from './daterangepicker.config';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { skip } from 'rxjs/operators';
var ThyDaterangepickerContainerComponent = /** @class */ (function () {
    function ThyDaterangepickerContainerComponent(_config, _bsConfig, _elementRef, _renderer, _viewContainerRef, localeService) {
        this._config = _config;
        this._bsConfig = _bsConfig;
        this.localeService = localeService;
        this.isMeridian = false;
        _bsConfig.containerClass = 'theme-ngx';
        _bsConfig.showWeekNumbers = false;
        _bsConfig.displayMonths = 2;
        this.localeService.use('en');
    }
    // 开始时间默认0:0 结束时间默认23:59，所以屏蔽掉了时间相关
    ThyDaterangepickerContainerComponent.prototype.ngOnInit = function () {
        this.store = this.initialState.store;
        this._initDataValue();
    };
    ThyDaterangepickerContainerComponent.prototype.hide = function () {
        this.hideLoader();
    };
    ThyDaterangepickerContainerComponent.prototype._sendChangeValueEvent = function (result) {
        if (result && result.length > 1) {
            this.store.value = result;
            this.initialState.changeValue();
            this.hide();
        }
    };
    ThyDaterangepickerContainerComponent.prototype._initDataValue = function () {
        var _this = this;
        this.value = this.store.value;
        this._dpContainerRef._effects.init(this._dpContainerRef._store);
        this._dpContainerRef._effects.setRangeValue(this.value);
        this._dpContainerRef.valueChange.pipe(skip(1)).subscribe(function (result) {
            _this._sendChangeValueEvent(result);
        });
    };
    __decorate([
        ViewChild('dpContainer'),
        __metadata("design:type", Object)
    ], ThyDaterangepickerContainerComponent.prototype, "_dpContainerRef", void 0);
    ThyDaterangepickerContainerComponent = __decorate([
        Component({
            selector: 'thy-daterangepicker-container',
            template: "<div class=\"thy-datepicker\"> <bs-daterangepicker-container #dpContainer></bs-daterangepicker-container> </div> ",
            providers: [BsDatepickerConfig]
        }),
        __metadata("design:paramtypes", [ThyDaterangepickerConfig,
            BsDatepickerConfig,
            ElementRef,
            Renderer2,
            ViewContainerRef,
            BsLocaleService])
    ], ThyDaterangepickerContainerComponent);
    return ThyDaterangepickerContainerComponent;
}());
export { ThyDaterangepickerContainerComponent };
//# sourceMappingURL=daterangepicker-container.component.js.map