import { OnInit } from '@angular/core';
import { ThyFormDirective } from './form.directive';
import { TemplateRef } from '@angular/core';
import { ThyTranslate } from '../shared';
export declare class ThyFormGroupComponent implements OnInit {
    private thyParentForm;
    private thyTranslate;
    labelText: string;
    labelRequired: boolean;
    labelPaddingTopClear: boolean;
    feedbackIcon: string;
    tips: string;
    _rowFill: boolean;
    _isFormGroup: boolean;
    isHorizontal: boolean;
    hasFeedback: boolean;
    thyLabelText: string;
    thyLabelTextTranslateKey: string;
    thyLabelRequired: string;
    thyLabelPaddingTopClear: string;
    thyFeedbackIcon: string;
    thyTips: string;
    thyTipsTranslateKey: string;
    thyRowFill: boolean;
    contentTemplateRef: TemplateRef<any>;
    constructor(thyParentForm: ThyFormDirective, thyTranslate: ThyTranslate);
    ngOnInit(): void;
}
