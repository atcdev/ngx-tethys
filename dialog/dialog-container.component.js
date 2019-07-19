var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Inject, EventEmitter, ChangeDetectorRef, HostBinding } from '@angular/core';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ThyDialogConfig } from './dialog.config';
import { thyDialogAnimations } from './dialog-animations';
import { ThyClickPositioner } from '../core';
var ThyDialogContainerComponent = /** @class */ (function () {
    function ThyDialogContainerComponent(elementRef, document, config, changeDetectorRef, clickPositioner) {
        this.elementRef = elementRef;
        this.document = document;
        this.config = config;
        this.changeDetectorRef = changeDetectorRef;
        this.clickPositioner = clickPositioner;
        /** State of the dialog animation. */
        this.animationState = 'enter';
        /** Emits when an animation state changes. */
        this.animationStateChanged = new EventEmitter();
        /** ID of the element that should be considered as the dialog's label. */
        this.ariaLabelledBy = null;
        /** Element that was focused before the dialog was opened. Save this to restore upon close. */
        this.elementFocusedBeforeDialogWasOpened = null;
    }
    ThyDialogContainerComponent.prototype.savePreviouslyFocusedElement = function () {
        var _this = this;
        if (this.document) {
            this.elementFocusedBeforeDialogWasOpened = this.document
                .activeElement;
            // Note that there is no focus method when rendering on the server.
            if (this.elementRef.nativeElement.focus) {
                // Move focus onto the dialog immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then(function () {
                    return _this.elementRef.nativeElement.focus();
                });
            }
        }
    };
    ThyDialogContainerComponent.prototype.restoreFocus = function () {
        var toFocus = this.elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.config.restoreFocus &&
            toFocus &&
            typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        // if (this._focusTrap) {
        //   this._focusTrap.destroy();
        // }
    };
    ThyDialogContainerComponent.prototype.setTransformOrigin = function () {
        var _this = this;
        this.clickPositioner.runTaskUseLastPosition(function (lastPosition) {
            if (lastPosition) {
                var containerElement = _this.elementRef
                    .nativeElement;
                var transformOrigin = lastPosition.x -
                    containerElement.offsetLeft + "px " + (lastPosition.y -
                    containerElement.offsetTop) + "px 0px";
                containerElement.style['transform-origin'] = transformOrigin;
            }
        });
    };
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    ThyDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
        if (this.portalOutlet.hasAttached()) {
            throwThyDialogContentAlreadyAttachedError();
        }
        this.setTransformOrigin();
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachComponentPortal(portal);
    };
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    ThyDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
        if (this.portalOutlet.hasAttached()) {
            throwThyDialogContentAlreadyAttachedError();
        }
        this.setTransformOrigin();
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachTemplatePortal(portal);
    };
    /** Callback, invoked whenever an animation on the host completes. */
    ThyDialogContainerComponent.prototype.onAnimationDone = function (event) {
        if (event.toState === 'enter') {
            // this._trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.animationStateChanged.emit(event);
    };
    /** Callback, invoked when an animation on the host starts. */
    ThyDialogContainerComponent.prototype.onAnimationStart = function (event) {
        this.animationStateChanged.emit(event);
    };
    ThyDialogContainerComponent.prototype.startExitAnimation = function () {
        this.animationState = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this.changeDetectorRef.markForCheck();
    };
    __decorate([
        ViewChild(CdkPortalOutlet),
        __metadata("design:type", CdkPortalOutlet)
    ], ThyDialogContainerComponent.prototype, "portalOutlet", void 0);
    __decorate([
        HostBinding("attr.id"),
        __metadata("design:type", String)
    ], ThyDialogContainerComponent.prototype, "id", void 0);
    ThyDialogContainerComponent = __decorate([
        Component({
            selector: 'thy-dialog-container',
            template: "\n        <ng-template cdkPortalOutlet></ng-template>\n    ",
            // Using OnPush for dialogs caused some sync issues, e.g. custom ngModel can't to detect changes
            // Disabled until we can track them down.
            changeDetection: ChangeDetectionStrategy.Default,
            animations: [thyDialogAnimations.dialogContainer],
            host: {
                class: 'thy-dialog-container',
                tabindex: '-1',
                'aria-modal': 'true',
                '[attr.id]': 'id',
                '[attr.role]': 'config.role',
                '[attr.aria-labelledby]': 'config.ariaLabel ? null : ariaLabelledBy',
                '[attr.aria-label]': 'config.ariaLabel',
                '[attr.aria-describedby]': 'config.ariaDescribedBy || null',
                '[@dialogContainer]': 'animationState',
                '(@dialogContainer.start)': 'onAnimationStart($event)',
                '(@dialogContainer.done)': 'onAnimationDone($event)'
            }
        }),
        __param(1, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [ElementRef, Object, ThyDialogConfig,
            ChangeDetectorRef,
            ThyClickPositioner])
    ], ThyDialogContainerComponent);
    return ThyDialogContainerComponent;
}());
export { ThyDialogContainerComponent };
export function throwThyDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
//# sourceMappingURL=dialog-container.component.js.map