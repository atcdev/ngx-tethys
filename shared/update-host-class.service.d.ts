import { Renderer2 } from '@angular/core';
import { Dictionary } from '../typings';
export declare class UpdateHostClassService {
    private renderer;
    private _classNames;
    private _hostElement;
    constructor(renderer: Renderer2);
    initializeElement(nativeElement: HTMLElement): void;
    updateClass(classNames: string[]): void;
    updateClassByMap(classMap: Dictionary<boolean>): void;
    addClass(className: string): void;
    removeClass(className: string): void;
}
