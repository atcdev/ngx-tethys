import { OnInit, EventEmitter, Provider, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UpdateHostClassService } from '../shared';
export interface PageChangedEvent {
    itemsPerPage: number;
    page: number;
}
export declare type ThyPaginationMaxSize = 'xs' | 'sm' | 'md';
export declare const PAGINATION_CONTROL_VALUE_ACCESSOR: Provider;
export declare class ThyPaginationComponent implements ControlValueAccessor, OnInit {
    private updateHostClassService;
    private elementRef;
    /** === 以下选项 为兼容 ngx-bootstrap 用； === */
    align: boolean;
    maxSize: number;
    boundaryLinks: boolean;
    directionLinks: boolean;
    firstText: string;
    previousText: string;
    nextText: string;
    lastText: string;
    rotate: boolean;
    pageBtnClass: string;
    /** ===   === */
    _pagination: boolean;
    disabled: boolean;
    thyJump: boolean;
    thySize: ThyPaginationMaxSize;
    protected _page: number;
    protected _itemsPerPage: number;
    protected _totalItems: number;
    protected _totalPages: number;
    reservedNum: number;
    pagerSize: number;
    inited: boolean;
    pagerCount: number;
    private onTouchedCallback;
    private onChangeCallback;
    numPages: EventEmitter<number>;
    pageChanged: EventEmitter<PageChangedEvent>;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    page: number;
    writeValue(page: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    constructor(updateHostClassService: UpdateHostClassService, elementRef: ElementRef);
    ngOnInit(): void;
    nextHandle(step: number): void;
    protected calculateTotalPages(): number;
    protected _setSize(v: ThyPaginationMaxSize): void;
}
