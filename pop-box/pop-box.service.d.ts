import { ComponentFactoryResolver, NgZone } from '@angular/core';
import { TemplateRef, RendererFactory2 } from '@angular/core';
import { PopBoxRef } from './pop-box-ref.service';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PopBoxOptions } from './pop-box-options.class';
import { ThyPositioningService } from '../positioning/positioning.service';
export declare class ThyPopBoxService {
    private componentFactoryResolver;
    private rendererFactory;
    private clf;
    private thyPositioningService;
    private ngZone;
    private _loaders;
    private _renderer;
    private _popBoxLoader;
    constructor(componentFactoryResolver: ComponentFactoryResolver, rendererFactory: RendererFactory2, clf: ComponentLoaderFactory, thyPositioningService: ThyPositioningService, ngZone: NgZone);
    show(content: string | TemplateRef<any> | any, config: PopBoxOptions): PopBoxRef;
    private _hide;
    hide(): void;
}
