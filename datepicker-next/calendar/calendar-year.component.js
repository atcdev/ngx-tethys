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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export var CALENDAR_YEAR_CONSTANT = {
    yearInterval: 16,
    currentReciprocalPosition: 6
};
var ThyDatepickerNextCalendarYearComponent = /** @class */ (function () {
    function ThyDatepickerNextCalendarYearComponent(store) {
        this.store = store;
        this.styleClass = 'calendar-container calendar-year-container';
        this.ngUnsubscribe$ = new Subject();
    }
    ThyDatepickerNextCalendarYearComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store
            .select(ThyDatepickerNextStore.calendarCurrent)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(function (n) {
            _this._combinationYears();
        });
    };
    ThyDatepickerNextCalendarYearComponent.prototype.preClick = function () {
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, {
            year: this.store.snapshot.calendarCurrent.year - CALENDAR_YEAR_CONSTANT.yearInterval
        });
    };
    ThyDatepickerNextCalendarYearComponent.prototype.nextClick = function () {
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, {
            year: this.store.snapshot.calendarCurrent.year + CALENDAR_YEAR_CONSTANT.yearInterval
        });
    };
    ThyDatepickerNextCalendarYearComponent.prototype.cellClick = function (item) {
        if (item.isDisabled) {
            return;
        }
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, {
            year: item.year,
            viewMode: DatepickerNextCalendarViewModeEnum.month
        });
    };
    ThyDatepickerNextCalendarYearComponent.prototype._combinationYears = function () {
        var years = [];
        var lastYear = this.store.snapshot.calendarCurrent.year + CALENDAR_YEAR_CONSTANT.currentReciprocalPosition;
        for (var index = 1; index <= CALENDAR_YEAR_CONSTANT.yearInterval; index++) {
            var year = {
                year: lastYear - index
            };
            // active
            if (this.store.snapshot.calendarSelected && year.year === this.store.snapshot.calendarSelected.year) {
                year.isActive = true;
            }
            // disabled rules
            var _timestamp = getTimestamp(new Date(this.store.snapshot.calendarCurrent.year));
            if (this.store.snapshot.disableRules &&
                (_timestamp < this.store.snapshot.disableRules['<'] || _timestamp > this.store.snapshot.disableRules['>'])) {
                year.isDisabled = true;
            }
            years.push(year);
        }
        years.reverse();
        this.yearRows = sliceArray(years, 4);
    };
    ThyDatepickerNextCalendarYearComponent.prototype.trackByFn = function (index) {
        return index;
    };
    ThyDatepickerNextCalendarYearComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextCalendarYearComponent.prototype, "styleClass", void 0);
    ThyDatepickerNextCalendarYearComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-calendar-year',
            template: "<thy-datepicker-next-calendar-head (preClick)=\"preClick()\" (nextClick)=\"nextClick()\"></thy-datepicker-next-calendar-head> <div class=\"calendar-content\"> <div class=\"calendar-grid\"> <div class=\"calendar-row\" *ngFor=\"let row of yearRows;let i=index; trackBy:trackByFn\"> <div class=\"calendar-cell\" *ngFor=\"let item of row;let i=index; trackBy:trackByFn\" (click)=\"cellClick(item)\" [ngClass]=\"{'active':item.isActive}\"> <span *ngIf=\"!item.isToday\">{{item.year}}</span> </div> </div> </div> </div> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore])
    ], ThyDatepickerNextCalendarYearComponent);
    return ThyDatepickerNextCalendarYearComponent;
}());
export { ThyDatepickerNextCalendarYearComponent };
//# sourceMappingURL=calendar-year.component.js.map