import { ElementRef } from '@angular/core';
import { UpdateHostClassService } from '../shared';
export declare type InputSize = 'xs' | 'sm' | 'md' | 'lg' | '';
export declare class ThyInputDirective {
    private updateHostClassService;
    private elementRef;
    _isFormControl: boolean;
    thySize: InputSize;
    constructor(updateHostClassService: UpdateHostClassService, elementRef: ElementRef);
}
