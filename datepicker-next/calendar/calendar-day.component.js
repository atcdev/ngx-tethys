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
import { sliceArray, calendarDateConvert, getTimestamp } from '../util';
import { ThyDatepickerNextStore, datepickerNextActions } from '../datepicker-next.store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThyDatepickerNextContainerComponent } from '../datepicker-container.component';
import { ThyDatepickerNextEventsEnum } from '../datepicker-next.interface';
var weeks = ['日', '一', '二', '三', '四', '五', '六'];
var ThyDatepickerNextCalendarDayComponent = /** @class */ (function () {
    function ThyDatepickerNextCalendarDayComponent(store, parentComponent) {
        this.store = store;
        this.parentComponent = parentComponent;
        this.styleClass = 'calendar-container calendar-day-container';
        this.today = new Date();
        this.weeks = weeks;
        this.days = [];
        this.calendarRows = [];
        this.ngUnsubscribe$ = new Subject();
    }
    ThyDatepickerNextCalendarDayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store
            .select(ThyDatepickerNextStore.calendarCurrent)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(function (n) {
            _this._combinationMonthDays();
        });
        this.store
            .select(ThyDatepickerNextStore.disableRules)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(function (n) {
            _this._combinationMonthDays();
        });
    };
    ThyDatepickerNextCalendarDayComponent.prototype._combinationMonthDays = function () {
        var allDays = [];
        var nowDate = new Date(this.store.snapshot.calendarCurrent.year, this.store.snapshot.calendarCurrent.month);
        var nowMonthCountDays = this._getMonthCountDays();
        var nowMonthFirstDateWeek = this._getMonthFirstDayWeek();
        var nowMonthLastDateWeek = this._getMonthLastDayWeek();
        var _preMonthDays = [];
        var _nowMonthDays = [];
        var _nextMonthDays = [];
        // _nowMonthDays
        for (var index = 1; index <= nowMonthCountDays; index++) {
            var item = {
                year: this.store.snapshot.calendarCurrent.year,
                month: this.store.snapshot.calendarCurrent.month,
                day: index,
                week: (index - 1 + nowMonthFirstDateWeek) % 7,
                isCurrentMonth: true
            };
            // today
            if (index === this.today.getDate() && item.month === this.today.getMonth() && item.year === this.today.getFullYear()) {
                item.isToday = true;
            }
            // active
            if (this.store.snapshot.calendarSelected &&
                index === this.store.snapshot.calendarSelected.day &&
                item.month === this.store.snapshot.calendarSelected.month &&
                item.year === this.store.snapshot.calendarSelected.year) {
                item.isActive = true;
            }
            // disabled rules
            var _timestamp = getTimestamp(new Date(item.year, item.month, item.day));
            if (this.store.snapshot.disableRules &&
                (_timestamp < this.store.snapshot.disableRules['<'] || _timestamp > this.store.snapshot.disableRules['>'])) {
                item.isDisabled = true;
            }
            _nowMonthDays.push(item);
        }
        console.log(_nowMonthDays);
        // _preMonthDays
        var preMonthLastDate = this._getPreMonthLastDate();
        var preDateObject = calendarDateConvert(this.store.snapshot.calendarCurrent.year, this.store.snapshot.calendarCurrent.month - 1);
        for (var index = 0; index < 6; index++) {
            _preMonthDays.push({
                year: preDateObject.year,
                month: preDateObject.month,
                day: preMonthLastDate - index,
                week: nowMonthFirstDateWeek - 1 - index,
                isPreMonth: true
            });
        }
        _preMonthDays = _preMonthDays.reverse();
        // _nextMonthDays
        var nextDateObject = calendarDateConvert(this.store.snapshot.calendarCurrent.year, this.store.snapshot.calendarCurrent.month + 1);
        for (var index = 1; index <= 6; index++) {
            _nextMonthDays.push({
                year: nextDateObject.year,
                month: nextDateObject.month,
                day: index,
                week: (nowMonthLastDateWeek + index) % 7,
                isNextMonth: true
            });
        }
        // combination
        allDays = _preMonthDays.concat(_nowMonthDays, _nextMonthDays);
        allDays = this._setBeginWeek(allDays);
        this.calendarRows = sliceArray(allDays, 7);
    };
    ThyDatepickerNextCalendarDayComponent.prototype._getMonthFirstDayWeek = function () {
        var date = new Date(this.store.snapshot.calendarCurrent.year, this.store.snapshot.calendarCurrent.month);
        return date.getDay();
    };
    ThyDatepickerNextCalendarDayComponent.prototype._getMonthLastDayWeek = function () {
        var date = new Date(this.store.snapshot.calendarCurrent.year, this.store.snapshot.calendarCurrent.month + 1, 0);
        return date.getDay();
    };
    ThyDatepickerNextCalendarDayComponent.prototype._getMonthCountDays = function () {
        var date = new Date(this.store.snapshot.calendarCurrent.year, this.store.snapshot.calendarCurrent.month + 1, 0);
        return date.getDate();
    };
    ThyDatepickerNextCalendarDayComponent.prototype._getPreMonthLastDate = function () {
        var date = new Date(this.store.snapshot.calendarCurrent.year, this.store.snapshot.calendarCurrent.month, 0);
        return date.getDate();
    };
    ThyDatepickerNextCalendarDayComponent.prototype._setBeginWeek = function (allDays) {
        if (allDays.length === 28) {
            return allDays;
        }
        var beginIndex, endIndex;
        for (var index = 0; index < allDays.length; index++) {
            if (beginIndex === undefined && allDays[index].week === 0) {
                beginIndex = index;
            }
            if (allDays[index].week === 0) {
                endIndex = index - 1;
            }
        }
        return allDays.filter(function (value, index) {
            return index >= beginIndex && index <= endIndex;
        });
    };
    ThyDatepickerNextCalendarDayComponent.prototype.calendarCellStyleClass = function (calendarItem) {
        return {
            'pre-month': calendarItem.isPreMonth,
            'next-month': calendarItem.isNextMonth,
            today: calendarItem.isToday,
            active: calendarItem.isActive,
            disabled: calendarItem.isDisabled
        };
    };
    ThyDatepickerNextCalendarDayComponent.prototype.trackByFn = function (index) {
        return index;
    };
    ThyDatepickerNextCalendarDayComponent.prototype.preMonthClick = function () {
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, {
            month: this.store.snapshot.calendarCurrent.month - 1
        });
    };
    ThyDatepickerNextCalendarDayComponent.prototype.nextMonthClick = function () {
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, {
            month: this.store.snapshot.calendarCurrent.month + 1
        });
    };
    ThyDatepickerNextCalendarDayComponent.prototype.cellClick = function (item) {
        if (item.isDisabled) {
            return;
        }
        this.store.dispatch(datepickerNextActions.changeCalendarSelected, {
            year: item.year,
            month: item.month,
            day: item.day
        });
        if (item.isPreMonth) {
            this.preMonthClick();
        }
        else if (item.isNextMonth) {
            this.nextMonthClick();
        }
        else {
            this.calendarRows.forEach(function (n) {
                n.forEach(function (nn) {
                    nn.isActive = false;
                });
            });
            item.isActive = true;
        }
        this.parentComponent.behaviorValueChange(ThyDatepickerNextEventsEnum.calendarDone);
    };
    ThyDatepickerNextCalendarDayComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextCalendarDayComponent.prototype, "styleClass", void 0);
    ThyDatepickerNextCalendarDayComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-date-day',
            template: "<thy-datepicker-next-calendar-head (preClick)=\"preMonthClick()\" (nextClick)=\"nextMonthClick()\"></thy-datepicker-next-calendar-head> <div class=\"calendar-content\"> <div class=\"calendar-grid\"> <div class=\"calendar-row\"> <div class=\"calendar-cell\" *ngFor=\"let item of weeks\">{{item}}</div> </div> <div class=\"calendar-row\" *ngFor=\"let row of calendarRows;let i=index; trackBy:trackByFn\"> <div class=\"calendar-cell\" *ngFor=\"let item of row;let i=index; trackBy:trackByFn\" [ngClass]=\"calendarCellStyleClass(item)\" (click)=\"cellClick(item)\"> <span *ngIf=\"!item.isToday\">{{item.day}}</span> <ng-container *ngIf=\"item.isToday\" [ngTemplateOutlet]=\"todayTemplate\"></ng-container> </div> </div> </div> </div> <ng-template #todayTemplate> <span>今</span> </ng-template> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore, ThyDatepickerNextContainerComponent])
    ], ThyDatepickerNextCalendarDayComponent);
    return ThyDatepickerNextCalendarDayComponent;
}());
export { ThyDatepickerNextCalendarDayComponent };
//# sourceMappingURL=calendar-day.component.js.map