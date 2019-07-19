var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ElementRef, ViewEncapsulation, TemplateRef, EventEmitter, ContentChild, HostBinding, NgZone, forwardRef } from '@angular/core';
import { ThyTreeNode } from './tree.class';
import { helpers } from '../util';
import { ThyTreeService } from './tree.service';
import { SelectionModel } from '@angular/cdk/collections';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UpdateHostClassService } from '../shared/update-host-class.service';
var treeTypeClassMap = {
    secondary: ['thy-tree-secondary']
};
var ThyTreeComponent = /** @class */ (function () {
    function ThyTreeComponent(ngZone, thyTreeService, elementRef, updateHostClassService) {
        this.ngZone = ngZone;
        this.thyTreeService = thyTreeService;
        this.elementRef = elementRef;
        this.updateHostClassService = updateHostClassService;
        this._draggable = false;
        this.treeNodesSortableOptions = {
            group: {
                name: 'tree-node',
                put: ['tree-node']
            },
            disabled: true,
            animation: 250,
            ghostClass: 'thy-sortable-ghost',
            handle: '.thy-sortable-handle',
            dragClass: 'thy-sortable-drag',
            onStart: this._onDraggableStart.bind(this),
            onAdd: this._onDraggableAdd.bind(this),
            onUpdate: this._onDraggableUpdate.bind(this)
        };
        this.thyShowExpand = true;
        this.thyMultiple = false;
        this.thyAsync = false;
        this.thyTitleTruncate = true;
        this.thyOnClick = new EventEmitter();
        this.thyOnExpandChange = new EventEmitter();
        this.thyOnDraggableChange = new EventEmitter();
        this.thyTreeClass = true;
        this.thyTreeDraggableClass = false;
        this._onTouched = function () { };
        this._onChange = function (_) { };
    }
    ThyTreeComponent_1 = ThyTreeComponent;
    Object.defineProperty(ThyTreeComponent.prototype, "thyNodes", {
        set: function (value) {
            var _this = this;
            this.treeNodes = (value || []).map(function (node) { return new ThyTreeNode(node, null, _this.thyTreeService); });
            this.thyTreeService.treeNodes = this.treeNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTreeComponent.prototype, "thyDraggable", {
        get: function () {
            return this._draggable;
        },
        set: function (value) {
            if (helpers.isBoolean(value)) {
                this._draggable = value;
                this.treeNodesSortableOptions.disabled = !value;
            }
            else {
                if (value) {
                    Object.assign(this.treeNodesSortableOptions, value);
                    this._draggable = !this.treeNodesSortableOptions.disabled;
                }
            }
            this.thyTreeDraggableClass = this._draggable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTreeComponent.prototype, "templateRef", {
        get: function () {
            return this._templateRef;
        },
        set: function (template) {
            if (template) {
                this._templateRef = template;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTreeComponent.prototype, "emptyChildrenTemplateRef", {
        get: function () {
            return this._emptyChildrenTemplateRef;
        },
        set: function (template) {
            if (template) {
                this._emptyChildrenTemplateRef = template;
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyTreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.thyType && !changes.thyType.isFirstChange) {
            this._setTreeType();
        }
    };
    ThyTreeComponent.prototype.ngOnInit = function () {
        this.updateHostClassService.initializeElement(this.elementRef.nativeElement);
        this._setTreeType();
        this._instanceSelectionModel();
    };
    ThyTreeComponent.prototype._setTreeType = function () {
        this.updateHostClassService.addClass(treeTypeClassMap[this.thyType]);
    };
    ThyTreeComponent.prototype._instanceSelectionModel = function () {
        this._selectionModel = new SelectionModel(this.thyMultiple);
    };
    ThyTreeComponent.prototype.isSelected = function (node) {
        return this._selectionModel.isSelected(node);
    };
    ThyTreeComponent.prototype.toggleTreeNode = function (node) {
        if (node && !node.isDisabled) {
            this._selectionModel.toggle(node);
        }
    };
    ThyTreeComponent.prototype.trackByFn = function (index, item) {
        return item.key || index;
    };
    ThyTreeComponent.prototype._formatDraggableEvent = function (event, eventName) {
        var dragToElement = event.to;
        var key = dragToElement.getAttribute('node-key');
        var targetNode = this.thyTreeService.getTreeNode(key);
        return {
            eventName: eventName,
            dragNode: this._draggableNode,
            targetNode: targetNode,
            event: event
        };
    };
    ThyTreeComponent.prototype._onDraggableStart = function (event) {
        var key = event.from.getAttribute('node-key');
        if (key) {
            var node = this.thyTreeService.getTreeNode(key);
            this._draggableNode = node.children[event.oldIndex];
        }
        else {
            this._draggableNode = this.treeNodes[event.oldIndex];
        }
    };
    ThyTreeComponent.prototype._onDraggableUpdate = function (event) {
        var _this = this;
        var draggableEvent = this._formatDraggableEvent(event, 'draggableChange');
        this.thyTreeService.resetSortedTreeNodes(this.treeNodes);
        this.ngZone.runTask(function () {
            _this.thyOnDraggableChange.emit(draggableEvent);
        });
    };
    ThyTreeComponent.prototype._onDraggableAdd = function (event) {
        var _this = this;
        var draggableEvent = this._formatDraggableEvent(event, 'draggableChange');
        this.thyTreeService.resetSortedTreeNodes(this.treeNodes);
        this.ngZone.runTask(function () {
            _this.thyOnDraggableChange.emit(draggableEvent);
        });
    };
    ThyTreeComponent.prototype.writeValue = function (value) {
        this.thyNodes = value;
    };
    ThyTreeComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ThyTreeComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    // region 公开出去函数
    ThyTreeComponent.prototype.selectTreeNode = function (node) {
        this._selectionModel.select(node);
    };
    ThyTreeComponent.prototype.getRootNodes = function () {
        return this.treeNodes;
    };
    ThyTreeComponent.prototype.getSelectedNode = function () {
        return this._selectionModel.selected[0];
    };
    ThyTreeComponent.prototype.getSelectedNodes = function () {
        return this._selectionModel.selected;
    };
    ThyTreeComponent.prototype.getExpandedNodes = function () {
        return this.thyTreeService.getExpandedNodes();
    };
    ThyTreeComponent.prototype.addTreeNode = function (node, parent, index) {
        if (index === void 0) { index = -1; }
        if (parent) {
            parent.addChildren(node, index);
        }
        else {
            if (index > -1) {
                this.treeNodes.splice(index, 0, new ThyTreeNode(node, null, this.thyTreeService));
            }
            else {
                this.treeNodes.push(new ThyTreeNode(node, null, this.thyTreeService));
            }
        }
    };
    ThyTreeComponent.prototype.deleteTreeNode = function (node) {
        if (this.isSelected(node)) {
            this._selectionModel.toggle(node);
        }
        this.thyTreeService.deleteTreeNode(node);
    };
    var ThyTreeComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ThyTreeComponent.prototype, "thyNodes", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeComponent.prototype, "thyShowExpand", void 0);
    __decorate([
        HostBinding("class.thy-multiple-selection-list"),
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeComponent.prototype, "thyMultiple", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyTreeComponent.prototype, "thyDraggable", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeComponent.prototype, "thyAsync", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyTreeComponent.prototype, "thyType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeComponent.prototype, "thyTitleTruncate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTreeComponent.prototype, "thyOnClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTreeComponent.prototype, "thyOnExpandChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTreeComponent.prototype, "thyOnDraggableChange", void 0);
    __decorate([
        ContentChild('treeNodeTemplate'),
        __metadata("design:type", TemplateRef),
        __metadata("design:paramtypes", [TemplateRef])
    ], ThyTreeComponent.prototype, "templateRef", null);
    __decorate([
        ContentChild('emptyChildrenTemplate'),
        __metadata("design:type", TemplateRef)
    ], ThyTreeComponent.prototype, "emptyChildrenTemplate", void 0);
    __decorate([
        HostBinding('class.thy-tree'),
        __metadata("design:type", Object)
    ], ThyTreeComponent.prototype, "thyTreeClass", void 0);
    __decorate([
        HostBinding('class.thy-tree-draggable'),
        __metadata("design:type", Object)
    ], ThyTreeComponent.prototype, "thyTreeDraggableClass", void 0);
    ThyTreeComponent = ThyTreeComponent_1 = __decorate([
        Component({
            selector: 'thy-tree',
            template: "<div [sortablejs]=\"treeNodes\" [sortablejsOptions]=\"treeNodesSortableOptions\" [attr.node-key]=\"''\"> <thy-tree-node *ngFor=\"let node of treeNodes; trackBy: trackByFn; let i = index\" [node]=\"node\" [templateRef]=\"templateRef\" [emptyChildrenTemplateRef]=\"emptyChildrenTemplate\" [thyAsync]=\"thyAsync\" [thyDraggable]=\"thyDraggable\" [thyShowExpand]=\"thyShowExpand\" [thyMultiple]=\"thyMultiple\" [thyTitleTruncate]=\"thyTitleTruncate\" (thyOnClick)=\"thyOnClick.emit($event)\" (thyOnExpandChange)=\"thyOnExpandChange.emit($event)\" > </thy-tree-node> </div> ",
            encapsulation: ViewEncapsulation.None,
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyTreeComponent_1; }),
                    multi: true
                },
                ThyTreeService,
                UpdateHostClassService
            ]
        }),
        __metadata("design:paramtypes", [NgZone,
            ThyTreeService,
            ElementRef,
            UpdateHostClassService])
    ], ThyTreeComponent);
    return ThyTreeComponent;
}());
export { ThyTreeComponent };
//# sourceMappingURL=tree.component.js.map