var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding } from '@angular/core';
import { ThyDatepickerNextStore, datepickerNextActions } from '../datepicker-next.store';
import { sliceArray, getTimestamp } from '../util';
import { DatepickerNextCalendarViewModeEnum } from '../datepicker-next.interface';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var monthEnum = {
    0: '一月',
    1: '二月',
    2: '三月',
    3: '四月',
    4: '五月',
    5: '六月',
    6: '七月',
    7: '八月',
    8: '九月',
    9: '十月',
    10: '十一月',
    11: '十二月'
};
var ThyDatepickerNextCalendarMonthComponent = /** @class */ (function () {
    function ThyDatepickerNextCalendarMonthComponent(store) {
        this.store = store;
        this.styleClass = 'calendar-container calendar-month-container';
        this.monthEnum = monthEnum;
        this.ngUnsubscribe$ = new Subject();
    }
    ThyDatepickerNextCalendarMonthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._combinationMonths();
        this.store
            .select(ThyDatepickerNextStore.calendarCurrent)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(function (n) {
            _this._combinationMonths();
        });
    };
    ThyDatepickerNextCalendarMonthComponent.prototype.preYearClick = function () {
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, {
            year: this.store.snapshot.calendarCurrent.year - 1
        });
    };
    ThyDatepickerNextCalendarMonthComponent.prototype.nextYearClick = function () {
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, {
            year: this.store.snapshot.calendarCurrent.year + 1
        });
    };
    ThyDatepickerNextCalendarMonthComponent.prototype.cellClick = function (item) {
        if (item.isDisabled) {
            return;
        }
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, {
            month: item.month,
            viewMode: DatepickerNextCalendarViewModeEnum.day
        });
    };
    ThyDatepickerNextCalendarMonthComponent.prototype._combinationMonths = function () {
        var months = [];
        for (var index = 0; index < 12; index++) {
            var month = {
                month: index
            };
            // active
            if (this.store.snapshot.calendarSelected &&
                this.store.snapshot.calendarCurrent.year === this.store.snapshot.calendarSelected.year &&
                index === this.store.snapshot.calendarSelected.month) {
                month.isActive = true;
            }
            // disabled rules
            var _timestamp = getTimestamp(new Date(this.store.snapshot.calendarCurrent.year, this.store.snapshot.calendarCurrent.month));
            if (this.store.snapshot.disableRules &&
                (_timestamp < this.store.snapshot.disableRules['<'] || _timestamp > this.store.snapshot.disableRules['>'])) {
                month.isDisabled = true;
            }
            months.push(month);
        }
        this.calendarRows = sliceArray(months, 3);
    };
    ThyDatepickerNextCalendarMonthComponent.prototype.trackByFn = function (index) {
        return index;
    };
    ThyDatepickerNextCalendarMonthComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextCalendarMonthComponent.prototype, "styleClass", void 0);
    ThyDatepickerNextCalendarMonthComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-calendar-month',
            template: "<thy-datepicker-next-calendar-head (preClick)=\"preYearClick()\" (nextClick)=\"nextYearClick()\"></thy-datepicker-next-calendar-head> <div class=\"calendar-content\"> <div class=\"calendar-grid\"> <div class=\"calendar-row\" *ngFor=\"let row of calendarRows;let i=index; trackBy:trackByFn\"> <div class=\"calendar-cell\" *ngFor=\"let item of row;let i=index; trackBy:trackByFn\" [ngClass]=\"{'active':item.isActive}\" (click)=\"cellClick(item)\"> <span>{{monthEnum[item.month]}}</span> </div> </div> </div> </div> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore])
    ], ThyDatepickerNextCalendarMonthComponent);
    return ThyDatepickerNextCalendarMonthComponent;
}());
export { ThyDatepickerNextCalendarMonthComponent };
//# sourceMappingURL=calendar-month.component.js.map