var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { helpers } from '../util';
var allDayTimestamp = 24 * 60 * 60;
var INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ThyDateRangeComponent; }),
    multi: true
};
var ThyDateRangeComponent = /** @class */ (function () {
    function ThyDateRangeComponent() {
        this._currentDayTime = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
        this.optionalDateRange = [{
                key: 'week',
                text: '本周',
                begin: helpers.formatDate(this._currentDayTime) - (this._currentDayTime.getDay() - 1) * allDayTimestamp,
                end: helpers.formatDate(this._currentDayTime) + (7 - this._currentDayTime.getDay()) * allDayTimestamp,
                timestamp: {
                    interval: 7,
                    unit: 'day'
                }
            }, {
                key: 'month',
                text: '本月',
                begin: helpers.formatDate(new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1)),
                end: helpers.formatDate(new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0)),
                timestamp: {
                    interval: 1,
                    unit: 'month'
                }
            }];
        this.hiddenMenu = false;
        this.onModelChange = function () {
        };
        this.onModelTouched = function () {
        };
    }
    Object.defineProperty(ThyDateRangeComponent.prototype, "dateRanges", {
        set: function (value) {
            this.optionalDateRange = value.length > 0 ? value : this.optionalDateRange;
        },
        enumerable: true,
        configurable: true
    });
    ThyDateRangeComponent.prototype.writeValue = function (value) {
        if (value) {
            this.selectedDate = value;
        }
        else if (this.optionalDateRange.length > 0) {
            this.selectedDate = this.optionalDateRange[0];
            this.onModelChange(this.selectedDate);
        }
        this._setSelectedDateRange();
    };
    ThyDateRangeComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ThyDateRangeComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    ThyDateRangeComponent.prototype.ngOnInit = function () {
    };
    ThyDateRangeComponent.prototype._setSelectedDateRange = function () {
        this.selectedDateRange = {
            begin: { date: this.selectedDate.begin },
            end: { date: this.selectedDate.end }
        };
    };
    ThyDateRangeComponent.prototype._getNewDate = function (fullDate, timestamp) {
        if (timestamp === void 0) { timestamp = {}; }
        var newYear = fullDate.getFullYear() + (timestamp.year || 0);
        var newMonth = fullDate.getMonth() + (timestamp.month || 0);
        var newDate = fullDate.getDate() + (timestamp.day || 0);
        return helpers.formatDate(new Date(newYear, newMonth, newDate));
    };
    ThyDateRangeComponent.prototype._calculateNewTime = function (type) {
        if (this.selectedDate.timestamp) {
            var beginDate = new Date(this.selectedDate.begin * 1000);
            var endDate = new Date(this.selectedDate.end * 1000);
            if (this.selectedDate.timestamp.unit === 'day') {
                if (type === 'previous') {
                    return {
                        begin: this._getNewDate(beginDate, { day: -this.selectedDate.timestamp.interval }),
                        end: this._getNewDate(beginDate, { day: -1 }),
                        key: 'custom'
                    };
                }
                else {
                    return {
                        begin: this._getNewDate(endDate, { day: 1 }),
                        end: this._getNewDate(endDate, { day: this.selectedDate.timestamp.interval }),
                        key: 'custom'
                    };
                }
            }
            else if (this.selectedDate.timestamp.unit === 'month') {
                if (type === 'previous') {
                    return {
                        begin: this._getNewDate(beginDate, { month: -this.selectedDate.timestamp.interval }),
                        end: this._getNewDate(endDate, { month: -this.selectedDate.timestamp.interval + 1, day: -endDate.getDate() }),
                        key: 'custom'
                    };
                }
                else {
                    return {
                        begin: this._getNewDate(beginDate, { month: this.selectedDate.timestamp.interval }),
                        end: this._getNewDate(endDate, { month: this.selectedDate.timestamp.interval + 1, day: -endDate.getDate() }),
                        key: 'custom'
                    };
                }
            }
            else if (this.selectedDate.timestamp.unit === 'year') {
                if (type === 'previous') {
                    return {
                        begin: this._getNewDate(beginDate, { year: -this.selectedDate.timestamp.interval }),
                        end: this._getNewDate(endDate, { year: -this.selectedDate.timestamp.interval }),
                        key: 'custom'
                    };
                }
                else {
                    return {
                        begin: this._getNewDate(beginDate, { year: this.selectedDate.timestamp.interval }),
                        end: this._getNewDate(endDate, { year: this.selectedDate.timestamp.interval }),
                        key: 'custom'
                    };
                }
            }
        }
        else {
            var interval = this.selectedDate.end - this.selectedDate.begin + allDayTimestamp;
            return {
                begin: this.selectedDate.begin - interval,
                end: this.selectedDate.end - interval,
                key: 'custom'
            };
        }
    };
    ThyDateRangeComponent.prototype._setPreviousOrNextDate = function (type) {
        this.selectedDate = Object.assign({}, this.selectedDate, this._calculateNewTime(type));
        this._setSelectedDateRange();
        this.onModelChange(this.selectedDate);
    };
    ThyDateRangeComponent.prototype.previous = function () {
        this._setPreviousOrNextDate('previous');
    };
    ThyDateRangeComponent.prototype.next = function () {
        this._setPreviousOrNextDate('next');
    };
    ThyDateRangeComponent.prototype.selectDateRange = function (dateRange) {
        this.selectedDate = dateRange;
        this._setSelectedDateRange();
        this.onModelChange(this.selectedDate);
    };
    ThyDateRangeComponent.prototype.changeDate = function () {
        this.selectedDate = {
            begin: this.selectedDateRange.begin.date,
            end: this.selectedDateRange.end.date,
            key: 'custom',
        };
        this.onModelChange(this.selectedDate);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ThyDateRangeComponent.prototype, "dateRanges", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyDateRangeComponent.prototype, "hiddenMenu", void 0);
    ThyDateRangeComponent = __decorate([
        Component({
            selector: 'thy-date-range',
            template: "<div class=\"thy-date-range\" [ngClass]=\"{'thy-date-range-hidden-menu': hiddenMenu}\"> <span href=\"javascript:;\" class=\"btn btn-icon\" (click)=\"previous()\"> <i class=\"wtf wtf-angle-left\"></i> </span> <span href=\"javascript:;\" [thyActionMenuToggle]=\"dateMenu\" class=\"thy-date-text\" [ngClass]=\"{'not-down':!selectedDate}\"> <ng-container *ngIf=\"selectedDate?.key === 'custom'\"> {{selectedDate?.begin | thyDatepickerFormat}} ~ {{selectedDate?.end | thyDatepickerFormat}} </ng-container> <ng-container *ngIf=\"selectedDate?.key !== 'custom'\">{{selectedDate?.text}}</ng-container> <i *ngIf=\"!hiddenMenu\" class=\"wtf wtf-angle-down thy-date-text-caret-down\"></i> </span> <span href=\"javascript:;\" class=\"btn btn-icon\" (click)=\"next()\"> <i class=\"wtf wtf-angle-right\"></i> </span> </div> <ng-template  #dateMenu > <thy-action-menu *ngIf=\"!hiddenMenu\"> <a thyActionMenuItem href=\"javascript:;\" *ngFor=\"let dateRange of optionalDateRange\" (click)=\"selectDateRange(dateRange)\"> <span thyActionMenuItemName>{{dateRange?.text}}</span> <span thyActionMenuItemExtendIcon *ngIf=\"dateRange.key === selectedDate?.key\"> <i class=\"wtf wtf-checked\"></i> </span> </a> <thy-action-menu-divider></thy-action-menu-divider> <input type=\"text\" readonly=\"readonly\" thyDaterangepicker [(ngModel)]=\"selectedDateRange\" (ngModelChange)=\"changeDate()\" class=\"action-menu-item thy-date-range-menu-item\" placeholder=\"开始日期~结束日期\"  name=\"setDate\" thyStopPropagation/> </thy-action-menu> </ng-template>",
            providers: [INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [])
    ], ThyDateRangeComponent);
    return ThyDateRangeComponent;
}());
export { ThyDateRangeComponent };
//# sourceMappingURL=date-range.component.js.map