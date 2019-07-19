/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
export var ThyDialogSizes;
(function (ThyDialogSizes) {
    ThyDialogSizes["lg"] = "lg";
    ThyDialogSizes["supperLg"] = "supper-lg";
    ThyDialogSizes["maxLg"] = "max-lg";
    ThyDialogSizes["md"] = "md";
    ThyDialogSizes["sm"] = "sm";
})(ThyDialogSizes || (ThyDialogSizes = {}));
/**
 * Configuration for opening a modal dialog with the ThyDialog service.
 */
var ThyDialogConfig = /** @class */ (function () {
    function ThyDialogConfig() {
        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Custom class for the overlay pane. */
        this.panelClass = ''; // 'thy-dialog-panel';
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
        /** Custom class for the backdrop, */
        this.backdropClass = ''; // 'thy-dialog-backdrop';
        /** Whether the user can use escape or clicking on the backdrop to close the modal. */
        this.backdropClosable = true;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
        /** Min-height of the dialog. If a number is provided, pixel units are assumed. */
        this.minHeight = '20vh';
        /** Data being injected into the child component. */
        this.initialState = null;
        /** ID of the element that describes the dialog. */
        this.ariaDescribedBy = null;
        /** Aria label to assign to the dialog element */
        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */
        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
    }
    return ThyDialogConfig;
}());
export { ThyDialogConfig };
/** Injection token that can be used to specify default dialog options. */
export var THY_DIALOG_DEFAULT_OPTIONS = new InjectionToken('thy-dialog-default-options');
export var THY_DIALOG_DEFAULT_OPTIONS_PROVIDER = {
    provide: THY_DIALOG_DEFAULT_OPTIONS,
    useValue: {
        role: 'dialog',
        hasBackdrop: true,
        backdropClass: '',
        panelClass: '',
        backdropClosable: true,
        closeOnNavigation: true,
        autoFocus: true,
        restoreFocus: true
    }
};
//# sourceMappingURL=dialog.config.js.map