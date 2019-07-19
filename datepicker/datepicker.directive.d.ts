import { OnInit, ElementRef, Renderer2, ViewContainerRef, AfterContentInit } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ThyDatepickerConfig } from './datepicker.config';
import { DatepickerValueEntry } from './i.datepicker';
import { ThyDatepickerService } from './datepicker.service';
import { DatePipe } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';
import { ThyPositioningService, PlacementTypes } from '../positioning/positioning.service';
export declare class ThyDatepickerDirective implements OnInit, AfterContentInit, ControlValueAccessor {
    _config: ThyDatepickerConfig;
    private _elementRef;
    private _renderer;
    private datepickerService;
    private thyPositioningService;
    dataPipe: DatePipe;
    private _valueRef;
    private _value;
    private _format;
    private _onChange;
    private _onTouched;
    private _isAfterContentInit;
    private _loader;
    private _valueType;
    thyPlacement: PlacementTypes;
    thyAutoAdapt: boolean;
    thyTriggers: string;
    thyContainer: string;
    thyOutsideClick: boolean;
    thyDisabled: boolean;
    thyShowTime: boolean;
    thyFormat: string;
    thyMaxDate: Date | number;
    thyMinDate: Date | number;
    constructor(_config: ThyDatepickerConfig, _elementRef: ElementRef, _renderer: Renderer2, _viewContainerRef: ViewContainerRef, cis: ComponentLoaderFactory, datepickerService: ThyDatepickerService, thyPositioningService: ThyPositioningService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    writeValue(value: DatepickerValueEntry | Date | number): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    show(): void;
    hide(): void;
    private _initValueDate;
    private _saveInitValueClone;
    private _initFormatRule;
    private _setInputProperty;
    private _sendValueToNgModel;
}