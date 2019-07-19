import { ElementRef, OnInit, AfterViewInit, Renderer2, NgZone } from '@angular/core';
import { ThyTranslate } from '../shared';
import { ThyEmptyConfig } from './empty.config';
export declare class ThyEmptyComponent implements OnInit, AfterViewInit {
    private thyTranslate;
    private thyEmptyConfig;
    private elementRef;
    private renderer;
    private ngZone;
    sizeClass: any;
    thyMessage: string;
    thyTranslationKey: string;
    thyTranslationValues: any;
    thyEntityName: string;
    thyEntityNameTranslateKey: string;
    thyIconClass: string;
    thySize: string;
    thyMarginTop: number | string;
    thyTopAuto: boolean;
    thyContainer: ElementRef;
    readonly displayText: any;
    _calculatePosition(): void;
    constructor(thyTranslate: ThyTranslate, thyEmptyConfig: ThyEmptyConfig, elementRef: ElementRef, renderer: Renderer2, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
