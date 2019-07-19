import { OnInit, OnDestroy } from '@angular/core';
import { ThyDatepickerNextTimeInfo } from '../datepicker-next.interface';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
interface ThyDatepickerNextTime extends ThyDatepickerNextTimeInfo {
    text: string;
    isActive?: boolean;
}
export declare class ThyDatepickerNextTimeAccurateComponent implements OnInit, OnDestroy {
    private store;
    stylesClass: string;
    hours: ThyDatepickerNextTime[];
    minutes: ThyDatepickerNextTime[];
    time: ThyDatepickerNextTimeInfo;
    private ngUnsubscribe$;
    constructor(store: ThyDatepickerNextStore);
    ngOnInit(): void;
    private _combinationHours;
    private _combinationMinutes;
    onSelectHour(hour: ThyDatepickerNextTime): void;
    onSelectMinute(minute: ThyDatepickerNextTime): void;
    private _behaviorTimeDone;
    trackByFn(index: number): number;
    ngOnDestroy(): void;
}
export {};
