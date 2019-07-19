import { ControlValueAccessor } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { ThyTranslate } from './translate';
export declare class ThyFormCheckBaseComponent implements ControlValueAccessor {
    protected thyTranslate: ThyTranslate;
    protected changeDetectorRef?: ChangeDetectorRef;
    _innerValue: boolean;
    _disabled: boolean;
    private onTouchedCallback;
    private onChangeCallback;
    _labelText: string;
    _isFormCheck: boolean;
    _isFormCheckInline: boolean;
    _isChecked: boolean;
    thyInline: boolean;
    thyLabelText: string;
    thyLabelTextTranslateKey: string;
    thyDisabled: boolean;
    writeValue(obj: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    updateValue(value: boolean): void;
    constructor(thyTranslate: ThyTranslate, changeDetectorRef?: ChangeDetectorRef);
    change(): void;
    markForCheck(): void;
}