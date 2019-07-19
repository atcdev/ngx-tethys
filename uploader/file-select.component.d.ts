import { ElementRef, OnInit, OnDestroy, EventEmitter } from '@angular/core';
export declare class ThyFileSelectComponent implements OnInit, OnDestroy {
    private elementRef;
    _multiple: boolean;
    _acceptFolder: boolean;
    acceptType: string;
    thyOnFileSelect: EventEmitter<{}>;
    fileInput: ElementRef<HTMLInputElement>;
    thyMultiple: boolean;
    thyAcceptFolder: boolean;
    thyAcceptType: Array<string> | string;
    click($event: any): void;
    constructor(elementRef: ElementRef);
    _isInputTypeFile(): boolean;
    selectFile($event: Event): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
