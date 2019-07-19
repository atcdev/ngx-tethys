import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { ThyPopBoxService } from '../../pop-box';
import { ComponentType } from '@angular/cdk/portal';
export declare class ThyMenuGroupComponent implements OnInit {
    private popBoxService;
    _actionMenu: ElementRef | ComponentType<any>;
    rightIconClass: string;
    iconClass: string;
    groupHeaderPaddingLeft: number;
    _thyMenuGroup: ElementRef;
    isThyMenuGroup: boolean;
    showIcon: boolean;
    isCollapsed: boolean;
    thyTitle: string;
    thyExpand: boolean;
    thyShowIcon: boolean;
    thyIcon: string;
    thyActionIcon: string;
    thyShowAction: boolean;
    thyActionStopPropagation: boolean;
    thyOnActionClick: EventEmitter<Event>;
    thyActionMenu: ElementRef;
    constructor(popBoxService: ThyPopBoxService);
    ngOnInit(): void;
    collapseGroup(): void;
    onActionClick(event: Event): void;
}
