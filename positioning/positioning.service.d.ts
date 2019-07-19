import { ElementRef, NgZone } from '@angular/core';
import { NewClientRect } from './client-rect';
export declare enum PlacementTypes {
    left = "left",
    right = "right",
    center = "center",
    top = "top",
    bottom = "bottom"
}
export interface PositioningOptions {
    /** The DOM element, ElementRef, or a selector string of an element which will be moved */
    attach?: HTMLElement | ElementRef | string;
    /** The DOM element, ElementRef, or a selector string of an element which the element will be attached to  */
    target?: HTMLElement | ElementRef | string;
    /**
     * A string of the form 'vert-attachment horiz-attachment' or 'placement'
     * - placement can be "top", "bottom", "left", "right"
     * not yet supported:
     * - vert-attachment can be any of 'top', 'middle', 'bottom'
     * - horiz-attachment can be any of 'left', 'center', 'right'
     */
    placement?: string;
    position?: {
        top: number;
        left: number;
    };
    /** A string of the form 'vert-offset horiz-offset'
     * - vert-offset and horiz-offset can be of the form "20px" or "55%"
     */
    offset?: number;
    /** If true component will be attached to body */
    appendToBody?: boolean;
    /** If true component auto adapt top or bottom */
    autoAdapt?: boolean;
}
export declare const defaultPositioningOptions: PositioningOptions;
export declare class ThyPositioningService {
    private ngZone;
    constructor(ngZone: NgZone);
    static getHTMLElement(element: HTMLElement | ElementRef | string): HTMLElement;
    private autoPosition;
    private getAllStyles;
    private getStyle;
    private isStaticPositioned;
    private offsetParent;
    private calculateTopBottomPosition;
    private calculateLeftRightPosition;
    private autoAdaptTopBottom;
    position(element: HTMLElement, round?: boolean): NewClientRect;
    offset(element: HTMLElement, round?: boolean): NewClientRect;
    calculatePosition(hostElement: HTMLElement, targetElement: HTMLElement, options: PositioningOptions): ClientRect;
    setPosition(options: PositioningOptions): void;
}