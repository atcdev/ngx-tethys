import { OnInit, Renderer2, ElementRef, NgZone } from '@angular/core';
import { ThyLayoutComponent } from './layout.component';
export declare class ThySidebarComponent implements OnInit {
    private thyLayoutComponent;
    private renderer;
    private elementRef;
    private ngZone;
    thyLayoutSidebarClass: boolean;
    thyLayoutSidebarClearBorderRightClass: boolean;
    thyLayoutSidebarWidth: number;
    thyWidth: any;
    thyHasBorderRight: string;
    thyIsDraggableWidth: any;
    dragRef: any;
    dragStartedX: number;
    widthPassive: number;
    constructor(thyLayoutComponent: ThyLayoutComponent, renderer: Renderer2, elementRef: ElementRef, ngZone: NgZone);
    ngOnInit(): void;
    dragStartedHandler(): void;
    dragEndedHandler(): void;
    private numberConvertToFloor;
}
