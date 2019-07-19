import { QueryList, AfterContentInit, Renderer2, ElementRef, OnInit, EventEmitter, OnDestroy, NgZone } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { ThyListOptionComponent, IThyOptionParentComponent } from '../../core/option';
import { ThySelectionListChange } from './selection.interface';
import { ControlValueAccessor } from '@angular/forms';
export declare class ThySelectionListComponent implements OnInit, OnDestroy, AfterContentInit, IThyOptionParentComponent, ControlValueAccessor {
    private renderer;
    private elementRef;
    private ngZone;
    private _keyManager;
    private _selectionChangesUnsubscribe$;
    private _bindKeyEventUnsubscribe;
    private _modelValues;
    /** The currently selected options. */
    selectionModel: SelectionModel<any>;
    disabled: boolean;
    _isList: boolean;
    _isSelectionList: boolean;
    multiple: boolean;
    /** The option components contained within this selection-list. */
    options: QueryList<ThyListOptionComponent>;
    thyMultiple: any;
    thyBindKeyEventContainer: HTMLElement | ElementRef | string;
    thyScrollContainer: HTMLElement | ElementRef | string;
    thyBeforeKeydown: (event?: KeyboardEvent) => boolean;
    thyUniqueKey: string;
    thyCompareWith: ((o1: any, o2: any) => boolean);
    /** Emits a change event whenever the selected state of an option changes. */
    readonly thySelectionChange: EventEmitter<ThySelectionListChange>;
    private _onTouched;
    private _onChange;
    private _emitChangeEvent;
    private _emitModelValueChange;
    private _toggleFocusedOption;
    private _initializeFocusKeyManager;
    private _instanceSelectionModel;
    private _getElementBySelector;
    private _compareValue;
    private _getOptionSelectionValue;
    private _setSelectionByValues;
    private _setAllOptionsSelected;
    private _getOptionByValue;
    private _getActiveOption;
    constructor(renderer: Renderer2, elementRef: ElementRef, ngZone: NgZone);
    ngOnInit(): void;
    writeValue(value: any[] | any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onKeydown(event: KeyboardEvent): void;
    toggleOption(option: ThyListOptionComponent, event?: Event): void;
    setActiveOption(option: ThyListOptionComponent): void;
    scrollIntoView(option: ThyListOptionComponent): void;
    isSelected(option: ThyListOptionComponent): boolean;
    clearActiveItem(): void;
    determineClearActiveItem(): void;
    /** Selects all of the options. */
    selectAll(): void;
    /** Deselects all of the options. */
    deselectAll(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
