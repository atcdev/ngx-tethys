import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ThyPopBoxService } from '../../../pop-box';
import { ComponentType } from '@angular/cdk/portal';
export declare class ThyMenuItemActionComponent implements OnInit {
    private popBoxService;
    private renderer;
    private elementRef;
    _boundEvent: boolean;
    _actionMenu: ElementRef | ComponentType<any>;
    isThyMenuItemIconMore: boolean;
    thyActionMenu: ElementRef | ComponentType<any>;
    thyStopPropagation: boolean;
    private bindClickEvent;
    constructor(popBoxService: ThyPopBoxService, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
}
