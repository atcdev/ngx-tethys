var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var ThyTreeService = /** @class */ (function () {
    function ThyTreeService() {
        this.$statusChange = new Subject();
    }
    ThyTreeService.prototype._getParallelTreeNodes = function (nodes, list) {
        var _this = this;
        if (list === void 0) { list = []; }
        nodes.forEach(function (node) {
            list.push(node);
            _this._getParallelTreeNodes(node.children || [], list);
        });
        return list;
    };
    ThyTreeService.prototype.resetSortedTreeNodes = function (treeNodes, parent) {
        var _this = this;
        treeNodes.forEach(function (node) {
            node.level = node.parentNode ? node.parentNode.level + 1 : 0;
            node.origin.children = node.children.map(function (n) { return n.origin; });
            node.parentNode = parent;
            _this.resetSortedTreeNodes(node.children, node);
        });
    };
    ThyTreeService.prototype.getTreeNode = function (key) {
        var allNodes = this._getParallelTreeNodes(this.treeNodes);
        return allNodes.find(function (n) { return n.key === key; });
    };
    ThyTreeService.prototype.getExpandedNodes = function () {
        var allNodes = this._getParallelTreeNodes(this.treeNodes);
        return allNodes.filter(function (n) { return n.isExpanded; });
    };
    ThyTreeService.prototype.deleteTreeNode = function (node) {
        var children = node.parentNode
            ? node.parentNode.children
            : this.treeNodes;
        var index = children.findIndex(function (n) { return n.key === node.key; });
        if (index > -1) {
            children.splice(index, 1);
        }
    };
    ThyTreeService.prototype.statusChanged = function () {
        return this.$statusChange.asObservable();
    };
    ThyTreeService.prototype.ngOnDestroy = function () {
        this.$statusChange.complete();
        this.$statusChange = null;
    };
    ThyTreeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ThyTreeService);
    return ThyTreeService;
}());
export { ThyTreeService };
//# sourceMappingURL=tree.service.js.map