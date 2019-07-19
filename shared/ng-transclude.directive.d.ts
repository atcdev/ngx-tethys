import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class ThyTranscludeDirective {
    viewRef: ViewContainerRef;
    protected _viewRef: ViewContainerRef;
    protected _ngTransclude: TemplateRef<any>;
    thyTransclude: TemplateRef<any>;
    constructor(viewRef: ViewContainerRef);
}
