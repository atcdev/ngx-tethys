import { ElementRef, OnInit } from '@angular/core';
import { UpdateHostClassService } from '../shared';
export declare type ThyNavType = 'primary' | 'secondary' | 'thirdly';
export declare type ThyNavSize = '' | 'sm';
export declare type ThyNavHorizontal = '' | 'left' | 'center' | 'right';
export declare class ThyNavComponent implements OnInit {
    private updateHostClass;
    private elementRef;
    private _type;
    private _size;
    private _horizontal;
    private _initialized;
    thyType: ThyNavType;
    thySize: ThyNavSize;
    thyHorizontal: ThyNavHorizontal;
    thyVertical: boolean;
    thyFill: boolean;
    _isVertical: boolean;
    _isFill: boolean;
    private _updateClasses;
    constructor(updateHostClass: UpdateHostClassService, elementRef: ElementRef);
    ngOnInit(): void;
}
