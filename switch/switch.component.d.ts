import { EventEmitter, OnInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class ThySwitchComponent implements OnInit, ControlValueAccessor, OnChanges {
    model: any;
    type?: String;
    size?: String;
    disabled?: Boolean;
    classNames: string[];
    typeArray: any;
    sizeArray: any;
    switchElementRef: ElementRef;
    thyType: string;
    thySize: string;
    thyDisabled: boolean;
    thyChange: EventEmitter<Event>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onModelChange: Function;
    onModelTouched: Function;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(isDisabled: Boolean): void;
    toggle(event: any): void;
    setClassNames(): void;
}
