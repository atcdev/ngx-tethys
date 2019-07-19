import { ElementRef } from '@angular/core';
export declare class ThyAutofocusDirective {
    private elementRef;
    private _autoSelect;
    thyAutoSelect: boolean;
    thyAutofocus: boolean | string;
    constructor(elementRef: ElementRef);
}
