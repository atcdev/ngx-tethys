import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
export declare class ThyDatepickerNextCalendarHeadComponent implements OnInit, OnDestroy {
    store: ThyDatepickerNextStore;
    preClick: EventEmitter<Event>;
    nextClick: EventEmitter<Event>;
    navigationText: string;
    private ngUnsubscribe$;
    constructor(store: ThyDatepickerNextStore);
    ngOnInit(): void;
    changeViewMode(): void;
    viewPreClick(): void;
    viewNextClick(): void;
    _combinationNavigationText(): void;
    ngOnDestroy(): void;
}
