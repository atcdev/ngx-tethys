import { ChangeDetectorRef } from '@angular/core';
export declare class ThyLoadingComponent {
    private changeDetectorRef;
    isDone: boolean;
    tip: string;
    isMask: boolean;
    thyDone: boolean | string;
    thyTip: string;
    thyIsMask: boolean | string;
    loadingClassName: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef);
}
