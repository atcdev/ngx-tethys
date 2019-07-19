import { ESCAPE } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
// Counter for unique dialog ids.
var uniqueId = 0;
var ThyDialogRef = /** @class */ (function () {
    function ThyDialogRef() {
    }
    return ThyDialogRef;
}());
export { ThyDialogRef };
var ThyDialogRefInternal = /** @class */ (function () {
    function ThyDialogRefInternal(overlayRef, containerInstance, id) {
        if (id === void 0) { id = "thy-dialog-" + uniqueId++; }
        var _this = this;
        this.overlayRef = overlayRef;
        this.containerInstance = containerInstance;
        this.id = id;
        /** Whether the user is allowed to close the dialog. */
        this.backdropClosable = this.containerInstance.config.backdropClosable;
        /** Subject for notifying the user that the dialog has finished opening. */
        this._afterOpened = new Subject();
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new Subject();
        /** Subject for notifying the user that the dialog has started closing. */
        this._beforeClosed = new Subject();
        // Pass the id along to the container.
        containerInstance.id = id;
        // Emit when opening animation completes
        containerInstance.animationStateChanged
            .pipe(filter(function (event) { return event.phaseName === 'done' && event.toState === 'enter'; }), take(1))
            .subscribe(function () {
            _this._afterOpened.next();
            _this._afterOpened.complete();
        });
        // Dispose overlay when closing animation is complete
        containerInstance.animationStateChanged
            .pipe(filter(function (event) { return event.phaseName === 'done' && event.toState === 'exit'; }), take(1))
            .subscribe(function () { return _this.overlayRef.dispose(); });
        overlayRef.detachments().subscribe(function () {
            _this._beforeClosed.next(_this._result);
            _this._beforeClosed.complete();
            _this._afterClosed.next(_this._result);
            _this._afterClosed.complete();
            _this.componentInstance = null;
            _this.overlayRef.dispose();
        });
        overlayRef
            .keydownEvents()
            .pipe(filter(function (event) { return event.keyCode === ESCAPE && _this.backdropClosable; }))
            .subscribe(function () { return _this.close(); });
    }
    /** Fetches the position strategy object from the overlay ref. */
    ThyDialogRefInternal.prototype._getPositionStrategy = function () {
        return this.overlayRef.getConfig().positionStrategy;
    };
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    ThyDialogRefInternal.prototype.close = function (dialogResult) {
        var _this = this;
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        this.containerInstance.animationStateChanged
            .pipe(filter(function (event) { return event.phaseName === 'start'; }), take(1))
            .subscribe(function () {
            _this._beforeClosed.next(dialogResult);
            _this._beforeClosed.complete();
            _this.overlayRef.detachBackdrop();
        });
        this.containerInstance.startExitAnimation();
    };
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */
    ThyDialogRefInternal.prototype.afterOpened = function () {
        return this._afterOpened.asObservable();
    };
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    ThyDialogRefInternal.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */
    ThyDialogRefInternal.prototype.beforeClosed = function () {
        return this._beforeClosed.asObservable();
    };
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    ThyDialogRefInternal.prototype.backdropClick = function () {
        return this.overlayRef.backdropClick();
    };
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    ThyDialogRefInternal.prototype.keydownEvents = function () {
        return this.overlayRef.keydownEvents();
    };
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    ThyDialogRefInternal.prototype.updatePosition = function (position) {
        var strategy = this._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this.overlayRef.updatePosition();
        return this;
    };
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    ThyDialogRefInternal.prototype.updateSizeAndPosition = function (width, height, position) {
        if (width === void 0) { width = ''; }
        if (height === void 0) { height = ''; }
        this._getPositionStrategy()
            .width(width)
            .height(height);
        this.updatePosition(position);
        return this;
    };
    return ThyDialogRefInternal;
}());
export { ThyDialogRefInternal };
//# sourceMappingURL=dialog-ref.js.map