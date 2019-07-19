import { ElementRef, OnInit, Renderer2, OnDestroy, NgZone } from '@angular/core';
import { UpdateHostClassService } from '../shared';
import { NgForm } from '@angular/forms';
import { ThyFormLayout, ThyFormValidatorConfig } from './form.class';
import { ThyFormValidatorService } from './form-validator.service';
export declare enum ThyEnterKeyMode {
    submit = "submit",
    alwaysSubmit = "alwaysSubmit",
    forbidSubmit = "forbidSubmit"
}
export declare class ThyFormDirective implements OnInit, OnDestroy {
    private ngForm;
    private elementRef;
    private renderer;
    private ngZone;
    private updateHostClassService;
    validator: ThyFormValidatorService;
    private _layout;
    thyLayout: ThyFormLayout;
    readonly isHorizontal: boolean;
    thyEnterKeyMode: ThyEnterKeyMode;
    thyFormValidatorConfig: ThyFormValidatorConfig;
    wasValidated: boolean;
    onSubmitSuccess: ($event: any) => void;
    private _unsubscribe;
    constructor(ngForm: NgForm, elementRef: ElementRef, renderer: Renderer2, ngZone: NgZone, updateHostClassService: UpdateHostClassService, validator: ThyFormValidatorService);
    ngOnInit(): void;
    submit($event: any): void;
    submitRunInZone($event: any): void;
    onKeydown($event: KeyboardEvent): void;
    ngOnDestroy(): void;
}
