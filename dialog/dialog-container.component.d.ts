import { ComponentRef, EmbeddedViewRef, ElementRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { AnimationEvent } from '@angular/animations';
import { ThyDialogConfig } from './dialog.config';
import { ThyClickPositioner } from '../core';
export declare class ThyDialogContainerComponent {
    private elementRef;
    private document;
    config: ThyDialogConfig;
    private changeDetectorRef;
    private clickPositioner;
    private portalOutlet;
    id: string;
    /** State of the dialog animation. */
    animationState: 'void' | 'enter' | 'exit';
    /** Emits when an animation state changes. */
    animationStateChanged: EventEmitter<AnimationEvent>;
    /** ID of the element that should be considered as the dialog's label. */
    ariaLabelledBy: string | null;
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */
    private elementFocusedBeforeDialogWasOpened;
    private savePreviouslyFocusedElement;
    private restoreFocus;
    private setTransformOrigin;
    constructor(elementRef: ElementRef, document: any, config: ThyDialogConfig, changeDetectorRef: ChangeDetectorRef, clickPositioner: ThyClickPositioner);
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    /** Callback, invoked whenever an animation on the host completes. */
    onAnimationDone(event: AnimationEvent): void;
    /** Callback, invoked when an animation on the host starts. */
    onAnimationStart(event: AnimationEvent): void;
    startExitAnimation(): void;
}
export declare function throwThyDialogContentAlreadyAttachedError(): void;
