import { ElementRef, TemplateRef } from '@angular/core';
import { ThyPopBoxService } from './pop-box.service';
import { PopBoxOptions } from './pop-box-options.class';
export declare class ThyPopBoxTriggerDirective {
    private elementRef;
    private thyPopBoxService;
    private _templateRef;
    thyPopBoxTrigger: TemplateRef<any>;
    thyPopBoxOptions: PopBoxOptions;
    openPopBox($event: Event): void;
    constructor(elementRef: ElementRef, thyPopBoxService: ThyPopBoxService);
}
