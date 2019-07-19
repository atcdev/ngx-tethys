import { TemplateRef, ElementRef, InjectionToken, ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class OptionSelectionChange {
    option: ThyOptionComponent;
    selected: boolean;
}
export declare class OptionVisiableChange {
    option: ThyOptionComponent;
}
export interface IThySelectOptionParentComponent {
    thyMode: 'multiple' | '';
}
/**
 * Injection token used to provide the parent component to options.
 */
export declare const THY_SELECT_OPTION_PARENT_COMPONENT: InjectionToken<IThySelectOptionParentComponent>;
export declare class ThyOptionComponent implements OnDestroy {
    element: ElementRef<HTMLElement>;
    parent: IThySelectOptionParentComponent;
    private cdr;
    private _selected;
    private _hidden;
    thyValue: any;
    thyRawValue: any;
    thyLabelText: string;
    thyShowOptionCustom: boolean;
    thySearchKey: string;
    _isOptionItem: boolean;
    template: TemplateRef<any>;
    thyDisabled: boolean;
    readonly hidden: boolean;
    /** Whether or not the option is currently selected. */
    readonly selected: boolean;
    readonly selectionChange: EventEmitter<OptionSelectionChange>;
    readonly visiableChange: EventEmitter<OptionVisiableChange>;
    constructor(element: ElementRef<HTMLElement>, parent: IThySelectOptionParentComponent, cdr: ChangeDetectorRef);
    onClick(event: Event): void;
    /** Selects the option. */
    select(event?: Event): void;
    /** Deselects the option. */
    deselect(): void;
    hideOption(): void;
    showOption(): void;
    matchSearchText(searchText: string): boolean;
    ngOnDestroy(): void;
}
