import { OnInit, OnDestroy } from '@angular/core';
import { ThyDatepickerNextTimeInfo } from '../datepicker-next.interface';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
interface ThyDatepickerNextTime extends ThyDatepickerNextTimeInfo {
    text: string;
    isActive?: boolean;
}
export declare class ThyDatepickerNextTimeSimplyComponent implements OnInit, OnDestroy {
    private store;
    stylesClass: string;
    times: ThyDatepickerNextTime[];
    private ngUnsubscribe$;
    constructor(store: ThyDatepickerNextStore);
    ngOnInit(): void;
    private _combinationTimes;
    onSelectTime(time: ThyDatepickerNextTime): void;
    trackByFn(index: number): number;
    ngOnDestroy(): void;
}
export {};
