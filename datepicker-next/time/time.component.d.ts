import { OnInit, OnDestroy, InjectionToken, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { PortalInjector } from '@angular/cdk/portal';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
export declare const CONTAINER_DATA: InjectionToken<{}>;
export declare class ThyDatepickerNextTimeComponent implements OnInit, OnDestroy {
    private injector;
    private overlay;
    store: ThyDatepickerNextStore;
    stylesClass: string;
    timeInput: any;
    overlayRef: OverlayRef;
    isEdit: boolean;
    timeText: string;
    private _timeOverlayComponent;
    private ngUnsubscribe$;
    constructor(injector: Injector, overlay: Overlay, store: ThyDatepickerNextStore);
    ngOnInit(): void;
    private _combinationTimeText;
    behaviorEdit(): void;
    behaviorPopTimeSelect(): void;
    createInjector(dataToPass: any): PortalInjector;
    private _combinationOverlayRef;
    private _detachTimePop;
    onTimeChange(): void;
    ngOnDestroy(): void;
}
