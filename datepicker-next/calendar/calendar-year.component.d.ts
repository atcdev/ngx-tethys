import { OnInit, OnDestroy } from '@angular/core';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
export declare const CALENDAR_YEAR_CONSTANT: {
    yearInterval: number;
    currentReciprocalPosition: number;
};
interface DatepickerNextCalendarYearInfo {
    year: number;
    isActive?: boolean;
    isDisabled?: boolean;
}
export declare class ThyDatepickerNextCalendarYearComponent implements OnInit, OnDestroy {
    store: ThyDatepickerNextStore;
    styleClass: string;
    yearRows: any;
    private ngUnsubscribe$;
    constructor(store: ThyDatepickerNextStore);
    ngOnInit(): void;
    preClick(): void;
    nextClick(): void;
    cellClick(item: DatepickerNextCalendarYearInfo): void;
    _combinationYears(): void;
    trackByFn(index: number): number;
    ngOnDestroy(): void;
}
export {};
