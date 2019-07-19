import { OnInit, ChangeDetectorRef } from '@angular/core';
import { ThyTranslate } from '../../shared';
import { ThyRadioGroupComponent } from './../group/radio-group.component';
import { ThyRadioComponent } from '../radio.component';
export declare class ThyRadioButtonComponent extends ThyRadioComponent implements OnInit {
    isButton: boolean;
    isActive: boolean;
    name: string;
    thyValue: string;
    thyChecked: boolean;
    constructor(thyTranslate: ThyTranslate, thyRadioGroupComponent: ThyRadioGroupComponent, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    click($event: MouseEvent): void;
}
