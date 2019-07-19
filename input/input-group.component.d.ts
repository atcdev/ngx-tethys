import { TemplateRef, ElementRef } from '@angular/core';
import { ThyTranslate, UpdateHostClassService } from '../shared';
export declare type InputGroupSize = 'sm' | 'lg' | '';
export declare class ThyInputGroupComponent {
    private thyTranslate;
    private updateHostClassService;
    private elementRef;
    appendText: string;
    prependText: string;
    _isInputGroup: boolean;
    thyAppendText: string;
    thyAppendTextTranslateKey: string;
    thyPrependText: string;
    thyPrependTextTranslateKey: string;
    thySize: InputGroupSize;
    appendTemplate: TemplateRef<any>;
    prependTemplate: TemplateRef<any>;
    constructor(thyTranslate: ThyTranslate, updateHostClassService: UpdateHostClassService, elementRef: ElementRef);
}
