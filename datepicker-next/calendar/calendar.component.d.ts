import { OnInit } from '@angular/core';
import { DatepickerNextCalendarViewModeEnum } from '../datepicker-next.interface';
import { ThyDatepickerNextCalendarDayComponent } from './calendar-day.component';
import { ThyDatepickerNextCalendarMonthComponent } from './calendar-month.component';
import { ThyDatepickerNextCalendarYearComponent } from './calendar-year.component';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
export declare class ThyDatepickerNextCalendarComponent implements OnInit {
    store: ThyDatepickerNextStore;
    calendarViewModeComponentEnum: {
        [DatepickerNextCalendarViewModeEnum.day]: typeof ThyDatepickerNextCalendarDayComponent;
        [DatepickerNextCalendarViewModeEnum.month]: typeof ThyDatepickerNextCalendarMonthComponent;
        [DatepickerNextCalendarViewModeEnum.year]: typeof ThyDatepickerNextCalendarYearComponent;
    };
    constructor(store: ThyDatepickerNextStore);
    ngOnInit(): void;
}
