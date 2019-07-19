import { TemplateRef, Injector, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentType } from '@angular/cdk/portal';
import { ThyDialogConfig } from './dialog.config';
import { Overlay } from '@angular/cdk/overlay';
import { ThyDialogRef } from './dialog-ref';
import { ThyClickPositioner } from '../core';
import { ThyConfirmComponent } from './confirm/confirm.component';
import { ThyConfirmConfig } from './confirm.config';
export declare class ThyDialog implements OnDestroy {
    private overlay;
    private injector;
    private defaultConfig;
    private openedDialogs;
    private readonly _afterAllClosed;
    private readonly _afterOpened;
    private getOverlayPanelClasses;
    private getOverlayConfig;
    private createInjector;
    private attachDialogContainer;
    private attachDialogContent;
    private removeOpenedDialog;
    constructor(overlay: Overlay, injector: Injector, defaultConfig: ThyDialogConfig, clickPositioner: ThyClickPositioner);
    open<T, TData = any, TResult = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: ThyDialogConfig<TData>): ThyDialogRef<T, TResult>;
    confirm<T>(options: ThyConfirmConfig): ThyDialogRef<ThyConfirmComponent, any>;
    afterAllClosed(): Subject<void>;
    afterOpened(): Subject<ThyDialogRef<any, any>>;
    getDialogById(id: string): ThyDialogRef<any> | undefined;
    /**
     * Finds the closest ThyDialogRef to an element by looking at the DOM.
     */
    getClosestDialog(element: HTMLElement): ThyDialogRef<any> | undefined;
    close(result?: any): void;
    closeAll(): void;
    ngOnDestroy(): void;
}
