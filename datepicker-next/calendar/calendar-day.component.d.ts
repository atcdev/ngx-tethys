import { OnInit, OnDestroy } from '@angular/core';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
import { ThyDatepickerNextContainerComponent } from '../datepicker-container.component';
interface DatepickerNextCalendarDayInfo {
    week: number;
    year: number;
    month: number;
    day: number;
    isActive?: boolean;
    isDisabled?: boolean;
    isToday?: boolean;
    isCurrentMonth?: boolean;
    isPreMonth?: boolean;
    isNextMonth?: boolean;
}
export declare class ThyDatepickerNextCalendarDayComponent implements OnInit, OnDestroy {
    store: ThyDatepickerNextStore;
    parentComponent: ThyDatepickerNextContainerComponent;
    styleClass: string;
    today: Date;
    weeks: string[];
    days: DatepickerNextCalendarDayInfo[];
    calendarHeadNavigation: {
        text: string;
        year: number;
        month: number;
    };
    calendarRows: (DatepickerNextCalendarDayInfo[])[];
    private ngUnsubscribe$;
    constructor(store: ThyDatepickerNextStore, parentComponent: ThyDatepickerNextContainerComponent);
    ngOnInit(): void;
    _combinationMonthDays(): void;
    private _getMonthFirstDayWeek;
    private _getMonthLastDayWeek;
    private _getMonthCountDays;
    private _getPreMonthLastDate;
    _setBeginWeek(allDays: DatepickerNextCalendarDayInfo[]): DatepickerNextCalendarDayInfo[];
    calendarCellStyleClass(calendarItem: DatepickerNextCalendarDayInfo): {
        'pre-month': boolean;
        'next-month': boolean;
        today: boolean;
        active: boolean;
        disabled: boolean;
    };
    trackByFn(index: number): number;
    preMonthClick(): void;
    nextMonthClick(): void;
    cellClick(item: DatepickerNextCalendarDayInfo): void;
    ngOnDestroy(): void;
}
export {};
