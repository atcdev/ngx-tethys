import { OnInit, TemplateRef } from '@angular/core';
export declare class ThyCardHeaderComponent implements OnInit {
    iconClass: string;
    thyLayoutHeaderClass: boolean;
    _thySizeSm: boolean;
    _thySizeLg: boolean;
    thyTitle: string;
    thyDescription: string;
    thySize: string;
    titleTemplateRef: TemplateRef<any>;
    descriptionTemplateRef: TemplateRef<any>;
    operationTemplateRef: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
}
