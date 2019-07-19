import { QueryList, NgZone, OnDestroy, AfterContentInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OptionVisiableChange, ThyOptionComponent } from './option.component';
export declare class ThySelectOptionGroupComponent implements OnDestroy, AfterContentInit {
    private _ngZone;
    _hidden: boolean;
    thyDisabled: boolean;
    _isOptionGroup: boolean;
    readonly hidden: boolean;
    thyGroupLabel: string;
    options: QueryList<ThyOptionComponent>;
    _destroy$: Subject<any>;
    optionVisiableChanges: Observable<OptionVisiableChange>;
    constructor(_ngZone: NgZone);
    ngAfterContentInit(): void;
    _resetOptions(): void;
    ngOnDestroy(): void;
}
