import { ElementRef, OnInit, QueryList, EventEmitter, TemplateRef, Renderer2, OnDestroy, ChangeDetectorRef, NgZone, AfterContentInit } from '@angular/core';
import { UpdateHostClassService } from '../shared/update-host-class.service';
import { ControlValueAccessor } from '@angular/forms';
import { ThyOptionComponent, OptionSelectionChange, IThySelectOptionParentComponent } from './option.component';
import { ScrollStrategy, Overlay, ViewportRuler, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { ThySelectOptionGroupComponent } from './option-group.component';
import { SelectionModel } from '@angular/cdk/collections';
export declare type InputSize = 'xs' | 'sm' | 'md' | 'lg' | '';
export declare type SelectMode = 'multiple' | '';
export declare type ThyCustomSelectTriggerType = 'click' | 'hover';
export interface OptionValue {
    thyLabelText?: string;
    thyValue?: string;
    thyDisabled?: boolean;
    thyShowOptionCustom?: boolean;
    thySearchKey?: string;
}
export declare class ThySelectCustomComponent implements ControlValueAccessor, IThySelectOptionParentComponent, OnInit, AfterContentInit, OnDestroy {
    private _ngZone;
    private elementRef;
    private updateHostClassService;
    private renderer;
    private overlay;
    private viewportRuler;
    private changeDetectorRef;
    searchText: string;
    _disabled: boolean;
    _size: InputSize;
    _mode: SelectMode;
    _emptyStateText: string;
    _classNames: any;
    _viewContentInitialized: boolean;
    _loadingDone: boolean;
    _scrollStrategy: ScrollStrategy;
    _modalValue: any;
    dropDownPosition: string;
    _selectionModel: SelectionModel<ThyOptionComponent>;
    positions: ConnectionPositionPair[];
    /** The last measured value for the trigger's client bounding rect. */
    triggerRect: ClientRect;
    /** Emits whenever the component is destroyed. */
    private readonly _destroy$;
    private onTouchedCallback;
    private onChangeCallback;
    _isSelectCustom: boolean;
    _isSelect: boolean;
    _panelOpen: boolean;
    readonly panelOpen: boolean;
    thyOnSearch: EventEmitter<any>;
    thyShowSearch: boolean;
    thyPlaceHolder: string;
    thyServerSearch: boolean;
    thyHoverTriggerAction: boolean;
    thyMode: SelectMode;
    thySize: InputSize;
    thyEmptyStateText: string;
    thyAllowClear: boolean;
    thyLoadingDone: boolean;
    thyDisabled: string;
    /** Whether the select has a value. */
    readonly empty: boolean;
    /** The currently selected option. */
    readonly selected: ThyOptionComponent | ThyOptionComponent[];
    /** The currently selected option. */
    readonly firstSelected: ThyOptionComponent;
    readonly selectedDisplayContext: any;
    readonly optionSelectionChanges: Observable<OptionSelectionChange>;
    selectedValueDisplayRef: TemplateRef<any>;
    trigger: ElementRef<any>;
    options: QueryList<ThyOptionComponent>;
    optionGroups: QueryList<ThySelectOptionGroupComponent>;
    constructor(_ngZone: NgZone, elementRef: ElementRef, updateHostClassService: UpdateHostClassService, renderer: Renderer2, overlay: Overlay, viewportRuler: ViewportRuler, changeDetectorRef: ChangeDetectorRef);
    trggleHover($event: Event): void;
    onSelectContainerMouseleave(event: Event): void;
    writeValue(value: any): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    _resetOptions(): void;
    _initializeSelection(): void;
    _setSelecttionByModelValue(modalValue: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private _emitModelValueChange;
    remove(item: ThyOptionComponent, event?: Event): void;
    clearSelectValue(event?: Event): void;
    toggle(): void;
    open(): void;
    close(): void;
    onSearchFilter(): void;
    private _instanceSelectionModel;
    _onSelect(option: ThyOptionComponent, event?: Event): void;
    ngOnDestroy(): void;
}
