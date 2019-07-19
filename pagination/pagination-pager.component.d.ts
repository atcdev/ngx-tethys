import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class ThyPaginationPagerComponent implements OnInit, OnChanges {
    current: number;
    count: number;
    reservedNum: number;
    pagerSize: number;
    mini: boolean;
    clickPage: EventEmitter<number>;
    pagers: number[];
    showPrevMore: Boolean;
    showNextMore: Boolean;
    constructor();
    pagerGenerator(minValue: number, all?: number): number[];
    makePagers(current: number, count: number): number[];
    setMoreBtn(prev: boolean, next: boolean): void;
    clickHandle(to: number): void;
    jumpHandle(step: number): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
