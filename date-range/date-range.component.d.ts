import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DateRangeItemInfo } from './date-range.class';
export declare class ThyDateRangeComponent implements OnInit, ControlValueAccessor {
    private _currentDayTime;
    selectedDate?: DateRangeItemInfo;
    optionalDateRange: DateRangeItemInfo[];
    selectedDateRange: {
        begin: {
            date: number;
        };
        end: {
            date: number;
        };
    };
    dateRanges: DateRangeItemInfo[];
    hiddenMenu: Boolean;
    constructor();
    onModelChange: Function;
    onModelTouched: Function;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    private _setSelectedDateRange;
    private _getNewDate;
    private _calculateNewTime;
    private _setPreviousOrNextDate;
    previous(): void;
    next(): void;
    selectDateRange(dateRange: DateRangeItemInfo): void;
    changeDate(): void;
}
