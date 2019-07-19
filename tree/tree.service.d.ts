import { OnDestroy } from '@angular/core';
import { ThyTreeNode } from './tree.class';
import { Subject } from 'rxjs';
export declare class ThyTreeService implements OnDestroy {
    treeNodes: ThyTreeNode[];
    $statusChange: Subject<ThyTreeFormatEmitEvent>;
    constructor();
    private _getParallelTreeNodes;
    resetSortedTreeNodes(treeNodes: ThyTreeNode[], parent?: ThyTreeNode): void;
    getTreeNode(key: string): ThyTreeNode;
    getExpandedNodes(): ThyTreeNode[];
    deleteTreeNode(node: ThyTreeNode): void;
    statusChanged(): import("rxjs").Observable<ThyTreeFormatEmitEvent>;
    ngOnDestroy(): void;
}
export interface ThyTreeFormatEmitEvent {
    eventName: string;
    node: ThyTreeNode;
    event?: MouseEvent | DragEvent;
}
