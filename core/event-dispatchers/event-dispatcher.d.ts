import { NgZone, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
export declare abstract class ThyEventDispatcher implements OnDestroy {
    private document;
    private ngZone;
    private eventName;
    private _globalSubscription;
    private _event$;
    private _subscriptionCount;
    private _addGlobalListener;
    private _removeGlobalListener;
    readonly globalSubscription: Subscription;
    constructor(document: any, ngZone: NgZone, eventName: string);
    protected subscribe(auditTimeInMs?: number): Observable<Event>;
    ngOnDestroy(): void;
}