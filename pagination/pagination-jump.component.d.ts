import { EventEmitter } from '@angular/core';
export declare class ThyPaginationJumpComponent {
    page: number;
    max: number;
    jump: EventEmitter<number>;
    disabled: boolean;
    _paginationJump: boolean;
    constructor();
    static nextPageNumber(page: number, max: number): number;
    changeHandle(jumpValue: number): void;
}
