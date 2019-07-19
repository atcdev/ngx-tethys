import { Renderer2, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class ThyShowDirective implements OnDestroy {
    private elementRef;
    private renderer;
    thyShowChange: EventEmitter<{}>;
    private unListenEvent;
    private unListenDocument;
    thyShow: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnDestroy(): void;
}
