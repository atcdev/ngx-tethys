import { TemplateRef, ElementRef, AfterContentInit, EventEmitter } from '@angular/core';
import { ThyTranslate } from '../shared/translate';
export declare class ThyPropertyOperationComponent implements AfterContentInit {
    private thyTranslate;
    _labelText: string;
    _icon: string;
    _value: string;
    _onlyHasTips: boolean;
    _showClose: boolean;
    _initialized: boolean;
    thyOnRemove: EventEmitter<{}>;
    _isPropertyOperation: boolean;
    operationIcon: TemplateRef<any>;
    contentElement: ElementRef;
    thyLabelText: string;
    thyValue: string;
    thyLabelTranslateKey: string;
    thyIcon: string;
    thyShowClose: boolean;
    thyLabelHasValue: boolean;
    _setOnlyHasTips(): void;
    constructor(thyTranslate: ThyTranslate);
    ngAfterContentInit(): void;
    remove($event: Event): void;
}
