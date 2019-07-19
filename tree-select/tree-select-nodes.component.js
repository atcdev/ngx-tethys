var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ThyTreeSelectComponent } from './tree-select.component';
var ThyTreeSelectNodesComponent = /** @class */ (function () {
    function ThyTreeSelectNodesComponent(parent) {
        this.parent = parent;
        this.treeNodes = this.parent.treeNodes;
        this.primaryKey = this.parent.thyPrimaryKey;
        this.showKey = this.parent.thyShowKey;
        this.isMultiple = this.parent.thyMultiple;
        this.valueIsObject = this.parent.valueIsObject;
        this.selectedValue = this.parent.selectedValue;
        this.childCountKey = this.parent.thyChildCountKey;
    }
    ThyTreeSelectNodesComponent.prototype.ngOnInit = function () { };
    ThyTreeSelectNodesComponent.prototype.treeNodeIsSelected = function (node) {
        var _this = this;
        if (this.parent.thyMultiple) {
            return (this.parent.selectedNodes || []).find(function (item) {
                return item[_this.primaryKey] === node[_this.primaryKey];
            });
        }
        else {
            return this.parent.selectedNode && this.parent.selectedNode[this.primaryKey] === node[this.primaryKey];
        }
    };
    ThyTreeSelectNodesComponent.prototype.treeNodeIsHidden = function (node) {
        if (this.parent.thyHiddenNodeKey) {
            return node[this.parent.thyHiddenNodeKey];
        }
        if (this.parent.thyHiddenNodeFn) {
            return this.parent.thyHiddenNodeFn(node);
        }
        return false;
    };
    ThyTreeSelectNodesComponent.prototype.treeNodeIsDisable = function (node) {
        if (this.parent.thyDisableNodeKey) {
            return node[this.parent.thyDisableNodeKey];
        }
        if (this.parent.thyDisableNodeFn) {
            return this.parent.thyDisableNodeFn(node);
        }
        return false;
    };
    ThyTreeSelectNodesComponent.prototype.treeNodeIsExpand = function (node) {
        var _this = this;
        var isSelectedNodeParent = false;
        if (this.parent.thyMultiple) {
            isSelectedNodeParent = !!(this.parent.selectedNodes || []).find(function (item) {
                return item.parentValues.indexOf(node[_this.primaryKey]) > -1;
            });
        }
        else {
            isSelectedNodeParent = this.parent.selectedNode ?
                this.parent.selectedNode.parentValues.indexOf(node[this.primaryKey]) > -1 : false;
        }
        return node.expand || (Object.keys(node)).indexOf('expand') < 0 && isSelectedNodeParent;
    };
    ThyTreeSelectNodesComponent.prototype.getNodeChildren = function (node) {
        this.parent.getNodeChildren(node);
    };
    ThyTreeSelectNodesComponent.prototype.selectTreeNode = function (event, node) {
        event.stopPropagation();
        if (this.treeNodeIsDisable(node)) {
            return;
        }
        this.parent.selectNode(node);
    };
    ThyTreeSelectNodesComponent.prototype.nodeExpandToggle = function (event, node) {
        event.stopPropagation();
        if (Object.keys(node).indexOf('expand') > -1) {
            node.expand = !node.expand;
        }
        else {
            if (this.treeNodeIsExpand(node)) {
                node.expand = false;
            }
            else {
                node.expand = true;
            }
        }
        if (node.expand && this.parent.thyAsyncNode) {
            this.getNodeChildren(node);
        }
    };
    ThyTreeSelectNodesComponent = __decorate([
        Component({
            selector: 'thy-tree-select-nodes',
            template: "<div class=\"thy-select-container h-100 bg-white\"> <div class=\"thy-select-custom-options thy-tree-select-pop h-100\"> <ng-container *ngIf=\"treeNodes?.length > 0\" [ngTemplateOutlet]=\"treeSelectNode\" [ngTemplateOutletContext]=\"{$implicit:treeNodes}\"></ng-container> <div class=\"thy-tree-select-pop-empty text-muted\" *ngIf=\"treeNodes?.length == 0\">{{parent.thyEmptyOptionsText}}</div> </div> </div> <ng-template #treeSelectNode let-nodes> <div class=\"thy-tree-select-node\"> <ng-container *ngFor=\"let node of nodes\"> <a class=\"thy-option-item\" [ngClass]=\"{'active': treeNodeIsSelected(node)}\" [class.disabled]=\"treeNodeIsDisable(node)\" [ngStyle]=\"{'padding-left.px':10*node.level+5}\" (click)=\"selectTreeNode($event,node)\" *ngIf=\"!treeNodeIsHidden(node)\"> <span class=\"expand-tree-icon text-info\" [class.invisible]=\"!(node.children?.length > 0 || node[childCountKey] && node[childCountKey] > 0)\" (click)=\"nodeExpandToggle($event,node)\"> <i class=\"wtf wtf-caret-down\" [class.rotate-caret]=\"!treeNodeIsExpand(node)\"></i> </span> <span class=\"ml-1\">{{node[showKey]}}</span> <span class=\"text-light checked-icon\"> <i class=\"wtf wtf-checked\"></i> </span> </a> <ng-container *ngIf=\"treeNodeIsExpand(node) && node.children?.length > 0\" [ngTemplateOutlet]=\"treeSelectNode\" [ngTemplateOutletContext]=\"{$implicit:node.children}\"></ng-container> </ng-container> </div> </ng-template> <!-- <div class=\"thy-select-container\"> <div class=\"thy-select-custom-options thy-tree-select-pop\"> <ng-container *ngIf=\"treeNodes?.length > 0\" [ngTemplateOutlet]=\"nodes\"></ng-container> <div class=\"thy-tree-select-pop-empty text-muted\" *ngIf=\"treeNodes?.length == 0\">{{parent.thyEmptyOptionsText}}</div> </div> </div> <ng-template #nodes> <thy-selection-list [thyMultiple]=\"isMultiple\" thyBindKeyEventContainer=\"body\" [thyUniqueKey]=\"primaryKey\" (thySelectionChange)=\"selectTreeNode($event)\" [(ngModel)]=\"selectedValue\"> <ng-container [ngTemplateOutlet]=\"treeSelectNode\" [ngTemplateOutletContext]=\"{$implicit: treeNodes}\"></ng-container> </thy-selection-list> </ng-template> <ng-template #treeSelectNode let-nodes> <thy-list-option [thyValue]=\"valueIsObject ? node : node[primaryKey]\" [thyDisabled]=\"treeNodeIsDisable(node)\" *ngFor=\"let node of nodes\"> <a class=\"thy-option-item\" [ngStyle]=\"{'padding-left.px':10*node.level+5}\" *ngIf=\"!treeNodeIsHidden(node)\"> <span class=\"expand-tree-icon text-info hand\" [class.invisible]=\"!(node.children?.length > 0 || node.childCount && node.childCount > 0)\" (click)=\"nodeExpandToggle($event,node)\"> <i class=\"wtf wtf-caret-down\" [class.rotate-caret]=\"!treeNodeIsExpand(node)\"></i> </span> <span class=\"ml-1\">{{node[showKey]}}</span> <span class=\"text-light checked-icon\"> <i class=\"wtf wtf-checked\"></i> </span> </a> <ng-container *ngIf=\"treeNodeIsExpand(node) && node.children?.length > 0\" [ngTemplateOutlet]=\"treeSelectNode\" [ngTemplateOutletContext]=\"{$implicit:node.children}\"></ng-container> </thy-list-option> </ng-template> {{selectedValue | json}} --> "
        }),
        __metadata("design:paramtypes", [ThyTreeSelectComponent])
    ], ThyTreeSelectNodesComponent);
    return ThyTreeSelectNodesComponent;
}());
export { ThyTreeSelectNodesComponent };
//# sourceMappingURL=tree-select-nodes.component.js.map