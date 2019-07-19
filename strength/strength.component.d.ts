import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ThyTranslate } from '../shared/translate';
declare enum ThyStrengthEnum {
    highest = 4,
    high = 3,
    average = 2,
    low = 1
}
export declare class ThyStrengthComponent implements OnInit, ControlValueAccessor {
    translate: ThyTranslate;
    styleClass: boolean;
    strengthTitle: string;
    strength: ThyStrengthEnum;
    strengthMap: {
        [ThyStrengthEnum.highest]: {
            level: string;
            text: string;
        };
        [ThyStrengthEnum.high]: {
            level: string;
            text: string;
        };
        [ThyStrengthEnum.average]: {
            level: string;
            text: string;
        };
        [ThyStrengthEnum.low]: {
            level: string;
            text: string;
        };
    };
    titleKey: string;
    highestKey: string;
    highKey: string;
    averageKey: string;
    lowKey: string;
    private _onChange;
    private _onTouched;
    constructor(translate: ThyTranslate);
    ngOnInit(): void;
    writeValue(value: ThyStrengthEnum): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
}
export {};
