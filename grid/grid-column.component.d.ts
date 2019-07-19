import { ElementRef, TemplateRef, InjectionToken } from '@angular/core';
import { OnInit } from '@angular/core';
export interface IThyGridColumnParentComponent {
    updateColumnSelections(key: string, selections: any): void;
}
/**
 * Injection token used to provide the parent component to options.
 */
export declare const THY_GRID_COLUMN_PARENT_COMPONENT: InjectionToken<IThyGridColumnParentComponent>;
export declare class ThyGridColumnComponent implements OnInit {
    private el;
    parent: IThyGridColumnParentComponent;
    thyModelKey: string;
    thyTitle: string;
    thyType: string;
    thyWidth: string | number;
    thyClassName: string;
    thyHeaderClassName: string;
    thyDisabled: boolean;
    thySelections: any;
    thyDefaultText: string;
    headerTemplateRef: TemplateRef<any>;
    cellTemplateRef: TemplateRef<any>;
    templateRef: TemplateRef<any>;
    key?: string;
    model: string;
    title: string;
    type: string;
    selections: any;
    width: string | number;
    className: string;
    headerClassName: string;
    disabled: boolean;
    defaultText: string;
    private _firstChange;
    constructor(el: ElementRef, parent: IThyGridColumnParentComponent);
    ngOnInit(): void;
    private _generateKey;
}
