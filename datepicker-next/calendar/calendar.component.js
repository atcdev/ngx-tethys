var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { Component } from '@angular/core';
import { DatepickerNextCalendarViewModeEnum } from '../datepicker-next.interface';
import { ThyDatepickerNextCalendarDayComponent } from './calendar-day.component';
import { ThyDatepickerNextCalendarMonthComponent } from './calendar-month.component';
import { ThyDatepickerNextCalendarYearComponent } from './calendar-year.component';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
var CalendarViewModeComponentEnum = (_a = {},
    _a[DatepickerNextCalendarViewModeEnum.day] = ThyDatepickerNextCalendarDayComponent,
    _a[DatepickerNextCalendarViewModeEnum.month] = ThyDatepickerNextCalendarMonthComponent,
    _a[DatepickerNextCalendarViewModeEnum.year] = ThyDatepickerNextCalendarYearComponent,
    _a);
var ThyDatepickerNextCalendarComponent = /** @class */ (function () {
    function ThyDatepickerNextCalendarComponent(store) {
        this.store = store;
        this.calendarViewModeComponentEnum = CalendarViewModeComponentEnum;
    }
    ThyDatepickerNextCalendarComponent.prototype.ngOnInit = function () { };
    ThyDatepickerNextCalendarComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-calendar',
            template: "<div class=\"thy-datepicker-next-calendar-container\"> <ng-container [ngComponentOutlet]=\"calendarViewModeComponentEnum[store.snapshot.calendarViewMode]\"></ng-container> </div> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore])
    ], ThyDatepickerNextCalendarComponent);
    return ThyDatepickerNextCalendarComponent;
}());
export { ThyDatepickerNextCalendarComponent };
//# sourceMappingURL=calendar.component.js.map