import { TemplateRef, ElementRef, EventEmitter, NgZone, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ThyTreeComponent } from './tree.component';
import { ThyTreeNodeData, ThyTreeNode } from './tree.class';
import { ThyTreeService } from './tree.service';
import { Subject } from 'rxjs';
export declare class ThyTreeNodeComponent implements OnDestroy {
    root: ThyTreeComponent;
    thyTreeService: ThyTreeService;
    private ngZone;
    private cdr;
    node: ThyTreeNode;
    thyAsync: boolean;
    thyMultiple: boolean;
    thyDraggable: boolean;
    thyTitleTruncate: boolean;
    templateRef: TemplateRef<any>;
    emptyChildrenTemplateRef: TemplateRef<any>;
    thyShowExpand: boolean | ((_: ThyTreeNodeData) => boolean);
    thyOnClick: EventEmitter<any>;
    thyOnExpandChange: EventEmitter<any>;
    childrenTreeTemplateRef: TemplateRef<any>;
    titleInputElementRef: ElementRef<HTMLInputElement>;
    thyTreeNodeClass: boolean;
    readonly nodeIcon: string;
    readonly nodeIconStyle: {
        [key: string]: any;
    };
    private _showExpand;
    destroy$: Subject<{}>;
    markForCheck(): void;
    constructor(root: ThyTreeComponent, thyTreeService: ThyTreeService, ngZone: NgZone, cdr: ChangeDetectorRef);
    clickNode(event: Event): void;
    expandNode(event: Event): void;
    isShowExpand(node: ThyTreeNodeData): any;
    ngOnDestroy(): void;
}
