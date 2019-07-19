import { ElementRef, EventEmitter, OnInit, NgZone, Renderer2 } from '@angular/core';
export declare class ThyCtrlEnterDirective implements OnInit {
    private ngZone;
    private elementRef;
    private renderer;
    thyCtrlEnter: EventEmitter<{}>;
    constructor(ngZone: NgZone, elementRef: ElementRef, renderer: Renderer2);
    onKeydown(event: KeyboardEvent): void;
    ngOnInit(): void;
}