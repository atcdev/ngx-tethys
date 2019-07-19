import { TemplateRef } from '@angular/core';
import { ThySlideOption } from './slide-options.class';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
export declare class ThySlideService {
    private clf;
    private openedSlideRefs;
    private _slideLoader;
    private _config;
    private _isHide;
    constructor(clf: ComponentLoaderFactory);
    show(content: string | TemplateRef<any> | any, config?: ThySlideOption): void;
    private _show;
    hide(): void;
    private _hide;
}
