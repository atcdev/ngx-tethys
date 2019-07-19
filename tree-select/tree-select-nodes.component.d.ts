import { OnInit } from '@angular/core';
import { ThyTreeSelectComponent } from './tree-select.component';
import { ThyTreeSelectNode } from './tree-select.class';
export declare class ThyTreeSelectNodesComponent implements OnInit {
    parent: ThyTreeSelectComponent;
    treeNodes: ThyTreeSelectNode[];
    primaryKey: string;
    showKey: string;
    isMultiple: boolean;
    valueIsObject: boolean;
    selectedValue: any;
    childCountKey: string;
    constructor(parent: ThyTreeSelectComponent);
    ngOnInit(): void;
    treeNodeIsSelected(node: ThyTreeSelectNode): boolean | ThyTreeSelectNode;
    treeNodeIsHidden(node: ThyTreeSelectNode): any;
    treeNodeIsDisable(node: ThyTreeSelectNode): any;
    treeNodeIsExpand(node: ThyTreeSelectNode): boolean;
    getNodeChildren(node: ThyTreeSelectNode): void;
    selectTreeNode(event: Event, node: ThyTreeSelectNode): void;
    nodeExpandToggle(event: Event, node: ThyTreeSelectNode): void;
}
