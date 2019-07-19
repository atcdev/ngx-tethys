import { OnInit, ElementRef, Renderer2, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class ThyFileDropComponent implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private ngZone;
    _state: {
        isDragOver: boolean;
        isCustomClassName: boolean;
        acceptType: string;
        isNeedCheckTypeAccept: boolean;
    };
    thyFileDropClassName: string;
    thyAcceptType: Array<string> | string;
    thyOnDrop: EventEmitter<{}>;
    readonly isDragOver: boolean;
    private ngUnsubscribe$;
    constructor(elementRef: ElementRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    private checkRejectFolderAndHtmlElement;
    private checkOptionAcceptType;
    private _toggleDropOverClassName;
    private _backToDefaultState;
    ngOnDestroy(): void;
}
