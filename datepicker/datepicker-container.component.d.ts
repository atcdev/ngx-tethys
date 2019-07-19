import { OnInit, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
export declare class ThyDatepickerContainerComponent implements OnInit {
    private _config;
    private localeService;
    initialState: any;
    hideLoader: Function;
    value: Date;
    maxDate: Date;
    minDate: Date;
    isShowTime: boolean;
    isCanTime: boolean;
    isMeridian: boolean;
    private _dpContainerRef;
    constructor(_config: BsDatepickerConfig, _elementRef: ElementRef, _renderer: Renderer2, _viewContainerRef: ViewContainerRef, localeService: BsLocaleService);
    ngOnInit(): void;
    onValueChange(value: Date): void;
    onTimeOk(): void;
    onClear(): void;
    hide(): void;
    changeTimeShowMode(type: string): void;
    private _sendChangeValueEvent;
    private _initDataValue;
    private _initTimeShowMode;
}
