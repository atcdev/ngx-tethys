import { ElementRef } from '@angular/core';
/**
 * Match `el` to `selector`.
 */
export declare function match(el: any, selector: string): any;
export declare function isDocument(element: any): boolean;
export declare function isElement(element: any): boolean;
export declare function getWindow(elem: any): any;
export declare function getElementOffset(elem: HTMLElement): ClientRect | {
    top: number;
    left: number;
    height?: undefined;
    width?: undefined;
} | {
    top: number;
    left: number;
    height: number;
    width: number;
};
export declare function getElementOuterHeight(element: any): any;
export declare type ElementSelector = HTMLElement | ElementRef | string;
export declare function getHTMLElementBySelector(selector: ElementSelector, defaultElementRef: ElementRef): HTMLElement;
