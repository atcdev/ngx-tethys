import { ElementRef, ChangeDetectorRef, InjectionToken } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';
export interface IThyOptionParentComponent {
    multiple?: boolean;
    toggleOption(option: ThyListOptionComponent, event?: Event): void;
    setActiveOption(option: ThyListOptionComponent, event?: Event): void;
    scrollIntoView(option: ThyListOptionComponent): void;
    isSelected(option: ThyListOptionComponent): boolean;
}
/**
 * Injection token used to provide the parent component to options.
 */
export declare const THY_OPTION_PARENT_COMPONENT: InjectionToken<IThyOptionParentComponent>;
export declare class ThyListOptionComponent implements Highlightable {
    element: ElementRef<HTMLElement>;
    private changeDetector;
    /** @docs-private */
    parentSelectionList: IThyOptionParentComponent;
    _isListOption: boolean;
    _role: string;
    _tabIndex: number;
    id: string;
    thyValue: any;
    thyDisabled: boolean;
    disabled?: boolean;
    /** Whether the option is selected. */
    readonly selected: boolean;
    constructor(element: ElementRef<HTMLElement>, changeDetector: ChangeDetectorRef, 
    /** @docs-private */
    parentSelectionList: IThyOptionParentComponent);
    onClick(event: Event): void;
    /** Allows for programmatic focusing of the option. */
    setActiveStyles(): void;
    setInactiveStyles(): void;
    /**
     * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
     * @docs-private
     */
    getLabel(): string;
}
