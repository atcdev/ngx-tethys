import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { ThySlideRef } from './slide-ref.service';
import { ThySlideOption } from './slide-options.class';
import { UpdateHostClassService } from '../shared';
export declare class ThySlideContainerComponent implements OnInit {
    private thySlideRef;
    private elementRef;
    private thySlideOption;
    private renderer;
    private updateHostClassService;
    slideClass: boolean;
    private _nativeElement;
    flyInOut: string;
    thySlideClass: string;
    thycontainerClass: string;
    isShow: boolean;
    isHide: boolean;
    thySlideService: any;
    private _setClasses;
    constructor(thySlideRef: ThySlideRef, elementRef: ElementRef, thySlideOption: ThySlideOption, renderer: Renderer2, updateHostClassService: UpdateHostClassService);
    ngOnInit(): void;
    onClick(event: any): void;
}
