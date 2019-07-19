import { OnInit } from '@angular/core';
import { CascaderOption } from './cascader.component';
export declare class ThyCascaderOptionComponent implements OnInit {
    option: CascaderOption;
    item: boolean;
    active: boolean;
    readonly disabled: boolean;
    readonly expand: boolean;
    thyLabelProperty: string;
    constructor();
    getOptionLabel(): any;
    ngOnInit(): void;
}
