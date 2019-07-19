import { OnInit, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ThyDaterangepickerConfig } from './daterangepicker.config';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
export declare class ThyDaterangepickerContainerComponent implements OnInit {
    _config: ThyDaterangepickerConfig;
    _bsConfig: BsDatepickerConfig;
    private localeService;
    initialState: any;
    store: any;
    hideLoader: Function;
    value: Date[];
    isMeridian: boolean;
    private _dpContainerRef;
    constructor(_config: ThyDaterangepickerConfig, _bsConfig: BsDatepickerConfig, _elementRef: ElementRef, _renderer: Renderer2, _viewContainerRef: ViewContainerRef, localeService: BsLocaleService);
    ngOnInit(): void;
    hide(): void;
    private _sendChangeValueEvent;
    private _initDataValue;
}
