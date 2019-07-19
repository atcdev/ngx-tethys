import { ElementRef, EventEmitter, OnInit, NgZone, Renderer2 } from '@angular/core';
export declare class ThyContextMenuDirective implements OnInit {
    private ngZone;
    private elementRef;
    private renderer;
    thyContextMenu: EventEmitter<{}>;
    constructor(ngZone: NgZone, elementRef: ElementRef, renderer: Renderer2);
    rightClick(event: Event): void;
    ngOnInit(): void;
}