var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { Injectable, TemplateRef, Injector, Optional, Inject } from '@angular/core';
import { of, Subject } from 'rxjs';
import { PortalInjector, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { ThyDialogConfig, ThyDialogSizes, THY_DIALOG_DEFAULT_OPTIONS } from './dialog.config';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ThyDialogContainerComponent } from './dialog-container.component';
import { ThyDialogRef, ThyDialogRefInternal } from './dialog-ref';
import { Directionality } from '@angular/cdk/bidi';
import { helpers } from '../util';
import { ThyClickPositioner } from '../core';
import { ThyConfirmComponent } from './confirm/confirm.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./dialog.config";
import * as i3 from "../core/click-positioner";
var ThyDialog = /** @class */ (function () {
    function ThyDialog(overlay, injector, defaultConfig, clickPositioner) {
        this.overlay = overlay;
        this.injector = injector;
        this.defaultConfig = defaultConfig;
        this.openedDialogs = [];
        this._afterAllClosed = new Subject();
        this._afterOpened = new Subject();
        clickPositioner.initialize();
    }
    ThyDialog.prototype.getOverlayPanelClasses = function (dialogConfig) {
        var classes = ["cdk-overlay-pane", "dialog-overlay-pane"];
        var size = dialogConfig.size || ThyDialogSizes.md;
        classes.push("dialog-" + size);
        if (dialogConfig.panelClass) {
            if (helpers.isArray(dialogConfig.panelClass)) {
                classes = classes.concat(dialogConfig.panelClass);
            }
            else {
                classes.push(dialogConfig.panelClass);
            }
        }
        return classes;
    };
    ThyDialog.prototype.getOverlayConfig = function (dialogConfig) {
        var overlayConfig = new OverlayConfig({
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this.overlay.scrollStrategies.block(),
            panelClass: this.getOverlayPanelClasses(dialogConfig),
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
        });
        if (dialogConfig.backdropClass) {
            overlayConfig.backdropClass = dialogConfig.backdropClass;
        }
        return overlayConfig;
    };
    ThyDialog.prototype.createInjector = function (config, dialogRef, dialogContainer) {
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var injectionTokens = new WeakMap([
            [ThyDialogContainerComponent, dialogContainer],
            [ThyDialogRef, dialogRef]
        ]);
        if (config.direction && (!userInjector || !userInjector.get(Directionality, null))) {
            injectionTokens.set(Directionality, {
                value: config.direction,
                change: of()
            });
        }
        return new PortalInjector(userInjector || this.injector, injectionTokens);
    };
    ThyDialog.prototype.attachDialogContainer = function (overlay, config) {
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var injector = new PortalInjector(userInjector || this.injector, new WeakMap([[ThyDialogConfig, config]]));
        var containerPortal = new ComponentPortal(ThyDialogContainerComponent, config.viewContainerRef, injector);
        var containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
    };
    ThyDialog.prototype.attachDialogContent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        var dialogRef = new ThyDialogRefInternal(overlayRef, dialogContainer, config.id);
        // When the dialog backdrop is clicked, we want to close it.
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(function () {
                if (dialogRef.backdropClosable) {
                    dialogRef.close();
                }
            });
        }
        if (componentOrTemplateRef instanceof TemplateRef) {
            dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, {
                $implicit: config.initialState,
                dialogRef: dialogRef
            }));
        }
        else {
            var injector = this.createInjector(config, dialogRef, dialogContainer);
            var contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, undefined, injector));
            if (config.initialState) {
                Object.assign(contentRef.instance, config.initialState);
            }
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef.updateSizeAndPosition(config.width, config.height, config.position);
        return dialogRef;
    };
    ThyDialog.prototype.removeOpenedDialog = function (dialogRef) {
        var index = this.openedDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openedDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openedDialogs.length) {
                // this._ariaHiddenElements.forEach((previousValue, element) => {
                //   if (previousValue) {
                //     element.setAttribute('aria-hidden', previousValue);
                //   } else {
                //     element.removeAttribute('aria-hidden');
                //   }
                // });
                // this._ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    };
    ThyDialog.prototype.open = function (componentOrTemplateRef, config) {
        var _this = this;
        config = __assign({}, this.defaultConfig, config);
        if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id " + config.id + " exists already. The dialog id must be unique.");
        }
        var overlayConfig = this.getOverlayConfig(config);
        var overlayRef = this.overlay.create(overlayConfig);
        var dialogContainer = this.attachDialogContainer(overlayRef, config);
        var dialogRef = this.attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        this.openedDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () { return _this.removeOpenedDialog(dialogRef); });
        this._afterOpened.next(dialogRef);
        return dialogRef;
    };
    ThyDialog.prototype.confirm = function (options) {
        return this.open(ThyConfirmComponent, {
            initialState: {
                options: options
            }
        });
    };
    ThyDialog.prototype.afterAllClosed = function () {
        return this._afterAllClosed;
    };
    ThyDialog.prototype.afterOpened = function () {
        return this._afterOpened;
    };
    ThyDialog.prototype.getDialogById = function (id) {
        return this.openedDialogs.find(function (dialog) { return dialog.id === id; });
    };
    /**
     * Finds the closest ThyDialogRef to an element by looking at the DOM.
     */
    ThyDialog.prototype.getClosestDialog = function (element) {
        var parent = element.parentElement;
        while (parent && !parent.classList.contains('thy-dialog-container')) {
            parent = parent.parentElement;
        }
        if (parent && parent.id) {
            return this.getDialogById(parent.id);
        }
        return null;
    };
    ThyDialog.prototype.close = function (result) {
        if (this.openedDialogs.length > 0) {
            var lastDialogRef = this.openedDialogs[this.openedDialogs.length - 1];
            if (lastDialogRef) {
                lastDialogRef.close(result);
            }
        }
    };
    ThyDialog.prototype.closeAll = function () {
        var i = this.openedDialogs.length;
        while (i--) {
            // 不需要操作 openedDialogs, 因为 close 会触发 afterClosed 的订阅
            // 触发订阅后会自动从 openedDialogs 中移除
            this.openedDialogs[i].close();
        }
    };
    ThyDialog.prototype.ngOnDestroy = function () {
        this.closeAll();
        this._afterAllClosed.complete();
        this._afterOpened.complete();
    };
    ThyDialog.ngInjectableDef = i0.defineInjectable({ factory: function ThyDialog_Factory() { return new ThyDialog(i0.inject(i1.Overlay), i0.inject(i0.INJECTOR), i0.inject(i2.THY_DIALOG_DEFAULT_OPTIONS, 8), i0.inject(i3.ThyClickPositioner)); }, token: ThyDialog, providedIn: "root" });
    ThyDialog = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(2, Optional()),
        __param(2, Inject(THY_DIALOG_DEFAULT_OPTIONS)),
        __metadata("design:paramtypes", [Overlay,
            Injector,
            ThyDialogConfig,
            ThyClickPositioner])
    ], ThyDialog);
    return ThyDialog;
}());
export { ThyDialog };
//# sourceMappingURL=dialog.service.js.map