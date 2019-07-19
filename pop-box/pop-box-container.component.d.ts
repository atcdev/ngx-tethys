import { OnInit, ElementRef, Renderer2, NgZone, OnDestroy, DoCheck, AfterViewInit } from '@angular/core';
import { PopBoxRef } from './pop-box-ref.service';
import { PopBoxOptions } from './pop-box-options.class';
import { ThyPositioningService } from '../positioning/positioning.service';
export declare class PopBoxContainerComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit {
    protected elementRef: ElementRef;
    private renderer;
    config: PopBoxOptions;
    private document;
    private ngZone;
    private thyPositioningService;
    _zIndex: number | string;
    popBoxRef: PopBoxRef;
    showMask: boolean;
    private _originHeight;
    _unsubscribe: () => void;
    constructor(elementRef: ElementRef, renderer: Renderer2, config: PopBoxOptions, document: any, ngZone: NgZone, thyPositioningService: ThyPositioningService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    hide(): void;
    clickPopBox(event: Event): void;
    clickMask(event: Event): void;
    onEsc(event: any): void;
    onDocumentClick(event: Event): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
