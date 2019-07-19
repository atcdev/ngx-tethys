import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { DialogPosition } from './dialog.config';
import { ThyDialogContainerComponent } from './dialog-container.component';
export declare abstract class ThyDialogRef<T, TResult = any> {
    componentInstance: T;
    id: string;
    backdropClosable: boolean;
    abstract close(dialogResult?: TResult): void;
    abstract afterOpened(): Observable<void>;
    abstract afterClosed(): Observable<TResult | undefined>;
    abstract beforeClosed(): Observable<TResult | undefined>;
    abstract keydownEvents(): Observable<KeyboardEvent>;
    abstract backdropClick(): Observable<MouseEvent>;
    abstract updatePosition(position?: DialogPosition): this;
}
export declare class ThyDialogRefInternal<T, TResult = any> implements ThyDialogRef<T, TResult> {
    private overlayRef;
    containerInstance: ThyDialogContainerComponent;
    readonly id: string;
    /** The instance of component opened into the dialog. */
    componentInstance: T;
    /** Whether the user is allowed to close the dialog. */
    backdropClosable: boolean | undefined;
    /** Subject for notifying the user that the dialog has finished opening. */
    private readonly _afterOpened;
    /** Subject for notifying the user that the dialog has finished closing. */
    private readonly _afterClosed;
    /** Subject for notifying the user that the dialog has started closing. */
    private readonly _beforeClosed;
    /** Result to be passed to afterClosed. */
    private _result;
    /** Fetches the position strategy object from the overlay ref. */
    private _getPositionStrategy;
    constructor(overlayRef: OverlayRef, containerInstance: ThyDialogContainerComponent, id?: string);
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(dialogResult?: TResult): void;
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */
    afterOpened(): Observable<void>;
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    afterClosed(): Observable<TResult | undefined>;
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */
    beforeClosed(): Observable<TResult | undefined>;
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick(): Observable<MouseEvent>;
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents(): Observable<KeyboardEvent>;
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    updatePosition(position?: DialogPosition): this;
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    updateSizeAndPosition(width?: string, height?: string, position?: DialogPosition): this;
}
