import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UpdateHostClassService } from '../shared/update-host-class.service';
export declare type InputSize = 'xs' | 'sm' | 'md' | 'lg' | '';
export declare class ThySelectComponent implements ControlValueAccessor, OnInit {
    private elementRef;
    private updateHostClassService;
    _innerValue: any;
    _disabled: boolean;
    _size: InputSize;
    _expandOptions: boolean;
    private onTouchedCallback;
    private onChangeCallback;
    _isSelect: boolean;
    thySize: InputSize;
    name: string;
    thyAllowClear: boolean;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    constructor(elementRef: ElementRef, updateHostClassService: UpdateHostClassService);
    ngModelChange(): void;
    ngOnInit(): void;
    clearSelectValue(event: Event): void;
}