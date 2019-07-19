import { ThyTreeService } from './tree.service';
export interface ThyTreeNodeData {
    key?: number | string;
    title?: string;
    icon?: string;
    iconStyle?: {
        [key: string]: any;
    };
    children?: ThyTreeNodeData[];
    origin?: any;
    expanded?: boolean;
    edited?: boolean;
    disabled?: boolean;
    [key: string]: any;
}
export declare class ThyTreeNode {
    key?: number | string;
    title?: string;
    children: ThyTreeNode[];
    parentNode: ThyTreeNode;
    level: number;
    origin: ThyTreeNodeData;
    isExpanded: boolean;
    isLoading: boolean;
    isDisabled: boolean;
    private readonly service;
    readonly treeService: ThyTreeService;
    constructor(node: ThyTreeNodeData, parent?: ThyTreeNode, service?: ThyTreeService);
    setKey(key: string): void;
    setTitle(title: string): void;
    setExpanded(expanded: boolean): void;
    setLoading(loading: boolean): void;
    getParentNode(): ThyTreeNode;
    getChildren(): ThyTreeNode[];
    addChildren(children: ThyTreeNodeData | ThyTreeNodeData[], index?: number): void;
}
export interface ThyTreeEmitEvent {
    eventName: string;
    node?: ThyTreeNode;
    event?: Event | any;
    dragNode?: ThyTreeNode;
    targetNode?: ThyTreeNode;
}
