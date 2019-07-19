import { OnInit, TemplateRef } from '@angular/core';
export declare class ThyHeaderComponent implements OnInit {
    iconClass: string;
    thyLayoutHeaderClass: boolean;
    _thyHasBorder: boolean;
    _thySizeSm: boolean;
    thyHasBorder: string;
    thySize: string;
    thyTitle: string;
    thyIconPrefix: string;
    thyIcon: string;
    titleTemplateRef: TemplateRef<any>;
    contentTemplateRef: TemplateRef<any>;
    operationTemplateRef: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
}
