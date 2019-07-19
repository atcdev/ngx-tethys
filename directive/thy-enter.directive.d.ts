import { EventEmitter, OnInit, NgZone, ElementRef, Renderer2 } from '@angular/core';
/**
 * 与 (keydown.enter) 区别是支持组合键，当按 Ctrl + Enter 或者 Command + Enter 也会触发
 */
export declare class ThyEnterDirective implements OnInit {
    private ngZone;
    private elementRef;
    private renderer;
    thyEnter: EventEmitter<{}>;
    onKeydown(event: KeyboardEvent): void;
    constructor(ngZone: NgZone, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}