import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare type InputSearchTheme = 'ellipse' | '';
export declare const CUSTOM_INPUT_SEARCH_CONTROL_VALUE_ACCESSOR: any;
export declare class ThyInputSearchComponent implements ControlValueAccessor {
    private cdr;
    private onTouchedCallback;
    private onChangeCallback;
    disabled: boolean;
    autoFocus: boolean;
    _isSearchContainer: boolean;
    _isSearchEllipse: boolean;
    searchText: string;
    name: string;
    placeholder: string;
    thyTheme: InputSearchTheme;
    thySearchFocus: boolean;
    clear: EventEmitter<Event>;
    constructor(cdr: ChangeDetectorRef);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    searchModelChange(): void;
    clearSearchText(event: Event): void;
}
