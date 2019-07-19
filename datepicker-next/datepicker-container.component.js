var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ThyDatepickerNextStore, datepickerNextActions } from './datepicker-next.store';
import { ThyDatepickerNextEventsEnum, DatepickerNextTimeModeType } from './datepicker-next.interface';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { exploreValueTypePipe, combiningDataAccordingToDatepickerType, combiningDataAccordingToOriginalDataType, getTimestamp } from './util';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var ThyDatepickerNextContainerComponent = /** @class */ (function () {
    function ThyDatepickerNextContainerComponent(store) {
        this.store = store;
        this.loadingDone = false;
        this.styleClass = true;
        this.thyShortcut = true;
        this.thyWithTime = false;
        this.thyOperation = false;
        this.thyTimeType = DatepickerNextTimeModeType.simply;
        this.thyModeType = DatepickerNextTimeModeType.simply;
        this.thyNgModelChange = new EventEmitter();
        this._isAfterContentInit = false;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
    }
    ThyDatepickerNextContainerComponent_1 = ThyDatepickerNextContainerComponent;
    Object.defineProperty(ThyDatepickerNextContainerComponent.prototype, "thyNgModel", {
        set: function (value) {
            this._initViewComponent(value);
            if (this._isAfterContentInit) {
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyDatepickerNextContainerComponent.prototype, "thyMaxDate", {
        set: function (value) {
            var _this = this;
            of(value)
                .pipe(map(exploreValueTypePipe), map(combiningDataAccordingToDatepickerType))
                .subscribe(function (result) {
                var _date = new Date(result.value.year, result.value.month, result.value.day, result.value.hour || 23, result.value.minute || 59);
                _this.store.dispatch(datepickerNextActions.setDisableRules, {
                    '>': getTimestamp(_date)
                });
            })
                .unsubscribe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyDatepickerNextContainerComponent.prototype, "thyMinDate", {
        set: function (value) {
            var _this = this;
            of(value)
                .pipe(map(exploreValueTypePipe), map(combiningDataAccordingToDatepickerType))
                .subscribe(function (result) {
                var _date = new Date(result.value.year, result.value.month, result.value.day, result.value.hour || 0, result.value.minute || 0);
                _this.store.dispatch(datepickerNextActions.setDisableRules, {
                    '<': getTimestamp(_date)
                });
            })
                .unsubscribe();
        },
        enumerable: true,
        configurable: true
    });
    ThyDatepickerNextContainerComponent.prototype.ngOnInit = function () {
        this._initViewFeature();
        this.loadingDone = true;
    };
    ThyDatepickerNextContainerComponent.prototype.ngAfterContentInit = function () {
        this._isAfterContentInit = true;
    };
    //#region init view feature
    ThyDatepickerNextContainerComponent.prototype._initViewFeature = function () {
        var payload = {
            shortcut: this.thyShortcut,
            time: this.thyWithTime,
            timeComponentType: this.thyTimeType,
            operation: this.thyWithTime
        };
        this.store.dispatch(datepickerNextActions.changeViewFeatureConfig, payload);
    };
    //#endregion
    ThyDatepickerNextContainerComponent.prototype.writeValue = function (value) {
        this._initViewComponent(value);
    };
    ThyDatepickerNextContainerComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ThyDatepickerNextContainerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    ThyDatepickerNextContainerComponent.prototype._initViewComponent = function (value) {
        var _this = this;
        this._originValue = value;
        if (this._originValue && this._originValue.with_time) {
            this.store.dispatch(datepickerNextActions.changeViewFeatureConfig, {
                time: true,
                operation: true
            });
        }
        of(value)
            .pipe(map(exploreValueTypePipe), map(combiningDataAccordingToDatepickerType))
            .subscribe(function (result) {
            var payload = {};
            if (result.value.year !== undefined) {
                payload.calendarDate = {
                    year: result.value.year,
                    month: result.value.month,
                    day: result.value.day
                };
            }
            if (result.value.hour !== undefined) {
                payload.calendarTime = {
                    hour: result.value.hour,
                    minute: result.value.minute
                };
            }
            _this._originValueType = result.type;
            _this.store.dispatch(datepickerNextActions.initState, payload);
        })
            .unsubscribe();
    };
    ThyDatepickerNextContainerComponent.prototype.behaviorValueChange = function (event) {
        var _this = this;
        var result = {};
        switch (event) {
            case ThyDatepickerNextEventsEnum.done:
                result = this._getCalendarSelected();
                break;
            case ThyDatepickerNextEventsEnum.calendarDone:
            case ThyDatepickerNextEventsEnum.shortcutDone:
                if (!this.store.snapshot.viewFeatureConfig.operation) {
                    result = this._getCalendarSelected();
                }
                break;
            case ThyDatepickerNextEventsEnum.clean:
                result = null;
                break;
        }
        console.log(result);
        var value$ = of({
            value: result
        });
        var subscribe = value$
            .pipe(map(function (n) {
            n.originType = _this._originValueType;
            return n;
        }), map(combiningDataAccordingToOriginalDataType))
            .subscribe(function (res) {
            _this.thyNgModelChange.emit(res);
            if (event === ThyDatepickerNextEventsEnum.done) {
                _this._onChange(res);
                _this._onTouched(res);
            }
            else {
                if (_this.store.snapshot.viewFeatureConfig.time === false) {
                    _this._onChange(res);
                    _this._onTouched(res);
                }
            }
        });
        subscribe.unsubscribe();
    };
    ThyDatepickerNextContainerComponent.prototype._getCalendarSelected = function () {
        var result = {
            year: this.store.snapshot.calendarSelected.year,
            month: this.store.snapshot.calendarSelected.month,
            day: this.store.snapshot.calendarSelected.day
        };
        if (this.store.snapshot.timeSelected) {
            Object.assign(result, {
                hour: this.store.snapshot.timeSelected.hour,
                minute: this.store.snapshot.timeSelected.minute
            });
        }
        return result;
    };
    ThyDatepickerNextContainerComponent.prototype.ngOnDestroy = function () { };
    var ThyDatepickerNextContainerComponent_1;
    __decorate([
        HostBinding('class.thy-datepicker-next-container'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextContainerComponent.prototype, "styleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyDatepickerNextContainerComponent.prototype, "thyNgModel", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextContainerComponent.prototype, "thyShortcut", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextContainerComponent.prototype, "thyWithTime", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextContainerComponent.prototype, "thyOperation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyDatepickerNextContainerComponent.prototype, "thyTimeType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyDatepickerNextContainerComponent.prototype, "thyMaxDate", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyDatepickerNextContainerComponent.prototype, "thyMinDate", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyDatepickerNextContainerComponent.prototype, "thyModeType", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyDatepickerNextContainerComponent.prototype, "thyNgModelChange", void 0);
    ThyDatepickerNextContainerComponent = ThyDatepickerNextContainerComponent_1 = __decorate([
        Component({
            selector: 'thy-datepicker-next-container',
            template: "<ng-container *ngIf=\"loadingDone\"> <thy-datepicker-next-calendar></thy-datepicker-next-calendar> <ng-container *ngIf=\"store.snapshot.viewFeatureConfig.shortcut\"> <thy-datepicker-next-shortcut></thy-datepicker-next-shortcut> </ng-container> <ng-container *ngIf=\"store.snapshot.viewFeatureConfig.time\"> <thy-datepicker-next-time></thy-datepicker-next-time> </ng-container> <ng-container *ngIf=\"store.snapshot.viewFeatureConfig.operation\"> <thy-datepicker-next-operation></thy-datepicker-next-operation> </ng-container> </ng-container> ",
            providers: [
                ThyDatepickerNextStore,
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyDatepickerNextContainerComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore])
    ], ThyDatepickerNextContainerComponent);
    return ThyDatepickerNextContainerComponent;
}());
export { ThyDatepickerNextContainerComponent };
//# sourceMappingURL=datepicker-container.component.js.map