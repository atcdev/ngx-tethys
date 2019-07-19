import { OnInit, ElementRef, Renderer2 } from '@angular/core';
export declare class ThyMenuItemIconComponent implements OnInit {
    private elementRef;
    private renderer;
    isThyMenuItemIcon: boolean;
    thyColor: string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
