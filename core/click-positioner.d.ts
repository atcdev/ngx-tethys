import { ThyClickDispatcher } from './event-dispatchers';
export interface ThyClickPosition {
    x: number;
    y: number;
}
export declare class ThyClickPositioner {
    private clickDispatcher;
    private lastPosition;
    private initialized;
    constructor(clickDispatcher: ThyClickDispatcher);
    readonly lastClickPosition: ThyClickPosition | null;
    runTaskUseLastPosition(task: (position?: ThyClickPosition) => void): void;
    initialize(): void;
}
