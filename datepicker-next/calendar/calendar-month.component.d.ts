import { OnInit, OnDestroy } from '@angular/core';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
interface DatepickerNextCalendarMonthInfo {
    month: number;
    isActive?: boolean;
    isDisabled?: boolean;
}
export declare class ThyDatepickerNextCalendarMonthComponent implements OnInit, OnDestroy {
    store: ThyDatepickerNextStore;
    styleClass: string;
    calendarRows: any;
    monthEnum: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
    };
    private ngUnsubscribe$;
    constructor(store: ThyDatepickerNextStore);
    ngOnInit(): void;
    preYearClick(): void;
    nextYearClick(): void;
    cellClick(item: DatepickerNextCalendarMonthInfo): void;
    _combinationMonths(): void;
    trackByFn(index: number): number;
    ngOnDestroy(): void;
}
export {};
