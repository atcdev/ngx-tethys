import { TemplateRef, RendererFactory2, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
export declare class ThyModalService extends BsModalService {
    private modalService;
    onShow: EventEmitter<any>;
    onShown: EventEmitter<any>;
    onHide: EventEmitter<any>;
    onHidden: EventEmitter<any>;
    private modalConfig;
    private bsModalRefs;
    constructor(modalService: BsModalService, rendererFactory: RendererFactory2, clf: ComponentLoaderFactory);
    show(content: string | TemplateRef<any> | any, config?: ThyModalConfigInfo): BsModalRef;
    close(): void;
    private setModalConfig;
}
export declare class ThyModalConfigInfo {
    size?: string;
    backdrop?: string | boolean;
    keyboard?: boolean;
    animated?: boolean;
    ignoreBackdropClick?: boolean;
    initialState?: object;
    class?: string;
    show?: boolean;
}
