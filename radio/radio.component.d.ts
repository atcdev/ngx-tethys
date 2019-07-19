import { OnInit, ChangeDetectorRef } from '@angular/core';
import { ThyTranslate } from '../shared';
import { ThyFormCheckBaseComponent } from '../shared';
import { ThyRadioGroupComponent } from './group/radio-group.component';
export declare class ThyRadioComponent extends ThyFormCheckBaseComponent implements OnInit {
    thyTranslate: ThyTranslate;
    thyRadioGroupComponent: ThyRadioGroupComponent;
    name: string;
    thyValue: string;
    thyChecked: boolean;
    constructor(thyTranslate: ThyTranslate, thyRadioGroupComponent: ThyRadioGroupComponent, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    change(): void;
}
