import { ElementRef } from '@angular/core';
import { ThyPopBoxService } from '../pop-box/pop-box.service';
export declare enum ActionEnum {
    click = "click",
    contextmenu = "contextmenu"
}
export declare class ThyActionMenuToggleDirective {
    private popBoxService;
    private _templateRef;
    private _placement;
    private _action;
    private _stopPropagation;
    private _thyContainerClass;
    thyActionMenuToggle: ElementRef;
    thyPlacement: string;
    thyAction: ActionEnum;
    thyStopPropagation: boolean;
    thyContainerClass: string;
    constructor(popBoxService: ThyPopBoxService);
    onClick(event: any): void;
    onRightClick(event: any): boolean;
    private _show;
}
