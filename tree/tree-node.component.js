var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation, ContentChild, TemplateRef, Input, HostBinding, ViewChild, ElementRef, Output, EventEmitter, NgZone, ChangeDetectorRef } from '@angular/core';
import { ThyTreeComponent } from './tree.component';
import { ThyTreeNode } from './tree.class';
import { ThyTreeService } from './tree.service';
import { helpers } from '../util';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
var ThyTreeNodeComponent = /** @class */ (function () {
    function ThyTreeNodeComponent(root, thyTreeService, ngZone, cdr) {
        var _this = this;
        this.root = root;
        this.thyTreeService = thyTreeService;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.thyAsync = false;
        this.thyMultiple = false;
        this.thyDraggable = false;
        this.thyTitleTruncate = true;
        this.thyOnClick = new EventEmitter();
        this.thyOnExpandChange = new EventEmitter();
        this.thyTreeNodeClass = true;
        this.destroy$ = new Subject();
        this.thyTreeService
            .statusChanged()
            .pipe(filter(function (data) { return data.node.key === _this.node.key; }), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.markForCheck();
        });
    }
    Object.defineProperty(ThyTreeNodeComponent.prototype, "thyShowExpand", {
        get: function () {
            return this._showExpand;
        },
        set: function (value) {
            this._showExpand = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTreeNodeComponent.prototype, "nodeIcon", {
        get: function () {
            return this.node.origin.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTreeNodeComponent.prototype, "nodeIconStyle", {
        get: function () {
            return this.node.origin.iconStyle;
        },
        enumerable: true,
        configurable: true
    });
    ThyTreeNodeComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    ThyTreeNodeComponent.prototype.clickNode = function (event) {
        this.root.toggleTreeNode(this.node);
        this.thyOnClick.emit({
            eventName: 'click',
            event: event,
            node: this.node
        });
    };
    ThyTreeNodeComponent.prototype.expandNode = function (event) {
        event.stopPropagation();
        this.node.setExpanded(!this.node.isExpanded);
        if (this.node.isExpanded) {
            this.thyOnExpandChange.emit({
                eventName: 'expand',
                event: event,
                node: this.node
            });
            if (this.thyAsync && this.node.children.length === 0) {
                this.node.setLoading(true);
            }
        }
    };
    ThyTreeNodeComponent.prototype.isShowExpand = function (node) {
        if (helpers.isFunction(this._showExpand)) {
            return this._showExpand(node);
        }
        else {
            return this._showExpand;
        }
    };
    ThyTreeNodeComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    __decorate([
        Input(),
        __metadata("design:type", ThyTreeNode)
    ], ThyTreeNodeComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeNodeComponent.prototype, "thyAsync", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeNodeComponent.prototype, "thyMultiple", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeNodeComponent.prototype, "thyDraggable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeNodeComponent.prototype, "thyTitleTruncate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], ThyTreeNodeComponent.prototype, "templateRef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], ThyTreeNodeComponent.prototype, "emptyChildrenTemplateRef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyTreeNodeComponent.prototype, "thyShowExpand", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTreeNodeComponent.prototype, "thyOnClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTreeNodeComponent.prototype, "thyOnExpandChange", void 0);
    __decorate([
        ContentChild('childrenTree'),
        __metadata("design:type", TemplateRef)
    ], ThyTreeNodeComponent.prototype, "childrenTreeTemplateRef", void 0);
    __decorate([
        ViewChild('title'),
        __metadata("design:type", ElementRef)
    ], ThyTreeNodeComponent.prototype, "titleInputElementRef", void 0);
    __decorate([
        HostBinding('class.thy-tree-node'),
        __metadata("design:type", Object)
    ], ThyTreeNodeComponent.prototype, "thyTreeNodeClass", void 0);
    ThyTreeNodeComponent = __decorate([
        Component({
            selector: 'thy-tree-node',
            template: "<div class=\"thy-tree-node-wrapper thy-sortable-item\" [class.active]=\"root.isSelected(node)\" (click)=\"clickNode($event)\"> <span *ngIf=\"thyDraggable\" class=\"thy-tree-drag-icon\"> <i class=\"wtf wtf wtf-move thy-sortable-handle\"></i> </span> <span class=\"thy-tree-expand\" (click)=\"expandNode($event)\"> <ng-container *ngIf=\"isShowExpand(node)\"> <i class=\"wtf thy-tree-expand-icon\" *ngIf=\"(node.children && node.children.length > 0) || thyAsync || emptyChildrenTemplateRef\" [class.narrow]=\"!node.isExpanded\" ></i> </ng-container> </span> <span class=\"thy-tree-node-content\"> <ng-container *ngIf=\"!templateRef\"> <ng-container *ngIf=\"nodeIcon\"> <span class=\"thy-tree-node-icon\"> <i [ngClass]=\"nodeIcon\" [ngStyle]=\"nodeIconStyle\"></i></span> </ng-container> <span [title]=\"node.title\" class=\"thy-tree-node-title\" [class.truncate]=\"thyTitleTruncate\">{{ node.title }}</span> </ng-container> <ng-container *ngIf=\"templateRef\"> <ng-template [ngTemplateOutlet]=\"templateRef\" [ngTemplateOutletContext]=\"{ $implicit: node, origin: node?.origin }\" ></ng-template> </ng-container> </span> </div> <div class=\"thy-tree-node-children\" *ngIf=\"isShowExpand(node) && node.isExpanded\" [sortablejs]=\"node.children\" [sortablejsOptions]=\"root.treeNodesSortableOptions\" [attr.node-key]=\"node.key\" > <ng-template *ngIf=\"node.children.length === 0 && !node.isLoading\" [ngTemplateOutlet]=\"emptyChildrenTemplateRef\" ></ng-template> <thy-tree-node *ngFor=\"let node of node.children; trackBy: root.trackByFn; let i = index\" [node]=\"node\" [templateRef]=\"templateRef\" [emptyChildrenTemplateRef]=\"emptyChildrenTemplateRef\" [thyAsync]=\"thyAsync\" [thyShowExpand]=\"thyShowExpand\" [thyMultiple]=\"thyMultiple\" [thyDraggable]=\"thyDraggable\" [thyTitleTruncate]=\"thyTitleTruncate\" (thyOnClick)=\"thyOnClick.emit($event)\" (thyOnExpandChange)=\"thyOnExpandChange.emit($event)\" > </thy-tree-node> <ng-container *ngIf=\"thyAsync\"> <thy-loading [thyDone]=\"!node.isLoading\"></thy-loading> </ng-container> </div> ",
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ThyTreeComponent,
            ThyTreeService,
            NgZone,
            ChangeDetectorRef])
    ], ThyTreeNodeComponent);
    return ThyTreeNodeComponent;
}());
export { ThyTreeNodeComponent };
//# sourceMappingURL=tree-node.component.js.map