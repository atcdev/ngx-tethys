import { Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';
/**
 * 将来会移动到 thy 组件库中
 */
export declare class ThyStopPropagationDirective implements OnInit, OnDestroy {
    private _elementRef;
    private _renderer;
    private _listener;
    private _eventName;
    thyStopPropagation: string;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
