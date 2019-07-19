import { ElementRef, OnInit } from '@angular/core';
import { UpdateHostClassService } from '../shared';
import { ThyButtonType } from '.';
export declare type buttonGroupSize = 'sm' | 'lg' | '';
export declare type buttonGroupType = 'outline-primary' | '';
export declare class ThyButtonGroupComponent implements OnInit {
    private updateHostClassService;
    private elementRef;
    private _type;
    private _size;
    thySize: buttonGroupSize;
    thyType: ThyButtonType;
    _isButtonGroup: boolean;
    constructor(updateHostClassService: UpdateHostClassService, elementRef: ElementRef);
    ngOnInit(): void;
    private _setClasses;
}
