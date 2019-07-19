var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, forwardRef, HostBinding, ContentChild, TemplateRef, ElementRef, ViewChild, NgZone, HostListener, InjectionToken, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isObject, isArray } from '../util/helpers';
import { of } from 'rxjs';
import { CdkOverlayOrigin, Overlay, ScrollDispatcher, CdkScrollable, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { EXPANDED_DROPDOWN_POSITIONS } from '../core/overlay/overlay-opsition-map';
import { $ } from '../typings';
var MAT_SELECT_SCROLL_STRATEGY = new InjectionToken('MAT_SELECT_SCROLL_STRATEGY');
export function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return overlay.scrollStrategies.reposition();
}
var ThyTreeSelectComponent = /** @class */ (function () {
    function ThyTreeSelectComponent(elementRef, renderer, ngZone, overlay, 
    // @Inject(MAT_SELECT_SCROLL_STRATEGY) scrollStrategy: any,
    scrollDispatcher) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.overlay = overlay;
        this.scrollDispatcher = scrollDispatcher;
        this.treeSelectClass = true;
        this.isTreeSelect = true;
        // 菜单是否展开
        this.expandTreeSelectOptions = true;
        this.isMulti = false;
        this.flattenTreeNodes = [];
        this.cdkConnectOverlayWidth = 0;
        // public scrollStrategy: ScrollStrategy;
        this.positions = EXPANDED_DROPDOWN_POSITIONS.slice();
        this.isInit = true;
        this.valueIsObject = false;
        this.cdkScrollables = [];
        this.thyPrimaryKey = '_id';
        this.thyShowKey = 'name';
        this.thyChildCountKey = 'childCount';
        this.thyMultiple = false;
        this.thyDisable = false;
        this.thyPlaceholder = '请选择节点';
        this.thyEmptyOptionsText = '暂时没有数据可选';
        this.thyHiddenNodeKey = 'hidden';
        this.thyDisableNodeKey = 'disabled';
        this.thyAsyncNode = false;
        this.thyShowWholeName = false;
        this.thyHiddenNodeFn = function (node) { return node.hidden; };
        this.thyDisableNodeFn = function (node) { return node.disable; };
        this.thyGetNodeChildren = function (node) { return of([]); };
        // TODO: 是否可以取消选中的node
        // @Input() thyUnRemoveSelectedNodeFn: Function;
        this.onModelChange = function () { };
        this.onModelTouch = function () { };
        // this.scrollStrategy = this.overlay.scrollStrategies.reposition();
    }
    ThyTreeSelectComponent_1 = ThyTreeSelectComponent;
    Object.defineProperty(ThyTreeSelectComponent.prototype, "thyTreeNodes", {
        set: function (value) {
            this.treeNodes = value;
            if (!this.isInit && this.treeNodes && this.treeNodes.length > 0) {
                this.flattenTreeNodes = this.flattenNodes(this.treeNodes, this.flattenTreeNodes, []);
                this._dataLoadingDoneFn();
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyTreeSelectComponent.prototype._getNgModelType = function () {
        if (this.thyMultiple) {
            this.valueIsObject = this.selectedValue[0] && isObject(this.selectedValue[0]);
        }
        else {
            this.valueIsObject = isObject(this.selectedValue);
        }
    };
    ThyTreeSelectComponent.prototype.writeValue = function (value) {
        this.selectedValue = value;
        if (this.isInit) {
            this.flattenTreeNodes = this.flattenNodes(this.treeNodes, this.flattenTreeNodes);
            this.isInit = false;
        }
        if (value) {
            this._getNgModelType();
            this._dataLoadingDoneFn();
        }
    };
    ThyTreeSelectComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ThyTreeSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouch = fn;
    };
    ThyTreeSelectComponent.prototype.onDocumentClick = function (event) {
        event.stopPropagation();
        if (!this.elementRef.nativeElement.contains(event.target) && this.expandTreeSelectOptions) {
            this.expandTreeSelectOptions = false;
            this.deregisterInScrollDispatcher();
        }
    };
    ThyTreeSelectComponent.prototype.ngOnInit = function () {
        this.isMulti = this.thyMultiple;
        this.expandTreeSelectOptions = false;
        this.init();
    };
    ThyTreeSelectComponent.prototype.init = function () {
        this.cdkConnectOverlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    };
    ThyTreeSelectComponent.prototype.registerInScrollDispatcher = function () {
        this.parentNodes = $(this.elementRef.nativeElement).parents();
        for (var i = 0; i < this.parentNodes.length; i++) {
            if (this.parentNodes[i]) {
                if (this.parentNodes[i].scrollHeight > this.parentNodes[i].clientHeight) {
                    var cdkScrollable = new CdkScrollable({ nativeElement: this.parentNodes[i] }, this.scrollDispatcher, this.ngZone);
                    this.cdkScrollables.push(cdkScrollable);
                    this.scrollDispatcher.register(cdkScrollable);
                }
            }
        }
    };
    ThyTreeSelectComponent.prototype.deregisterInScrollDispatcher = function () {
        for (var i = 0; i < this.cdkScrollables.length; i++) {
            this.scrollDispatcher.deregister(this.cdkScrollables[i]);
        }
    };
    ThyTreeSelectComponent.prototype.flattenNodes = function (nodes, resultNodes, parentPrimaryValue) {
        var _this = this;
        if (nodes === void 0) { nodes = []; }
        if (resultNodes === void 0) { resultNodes = []; }
        if (parentPrimaryValue === void 0) { parentPrimaryValue = []; }
        resultNodes = resultNodes.concat(nodes);
        var nodesLeafs = [];
        (nodes || []).forEach(function (item) {
            item.parentValues = parentPrimaryValue;
            item.level = item.parentValues.length;
            if (item.children && isArray(item.children)) {
                var nodeLeafs = _this.flattenNodes(item.children, resultNodes, parentPrimaryValue.concat([item[_this.thyPrimaryKey]]));
                nodesLeafs = nodesLeafs.concat(nodeLeafs);
            }
        });
        return nodes.concat(nodesLeafs);
    };
    ThyTreeSelectComponent.prototype._findTreeNode = function (value) {
        var _this = this;
        return (this.flattenTreeNodes || []).find(function (item) { return item[_this.thyPrimaryKey] === value; });
    };
    ThyTreeSelectComponent.prototype.getShowNodeName = function () {
        var _this = this;
        if (this.thyShowWholeName) {
            var wholeName_1 = '';
            (this.selectedNode.parentValues || []).forEach(function (item, index) {
                var node = _this._findTreeNode(item);
                wholeName_1 = "" + wholeName_1 + node[_this.thyShowKey] + " > ";
            });
            return "" + wholeName_1 + this.selectedNode[this.thyShowKey];
        }
        else {
            return this.selectedNode[this.thyShowKey];
        }
    };
    ThyTreeSelectComponent.prototype._dataLoadingDoneFn = function () {
        var _this = this;
        if (this.selectedValue) {
            // 多选数据初始化
            if (this.thyMultiple) {
                if (this.selectedValue.length > 0) {
                    if (this.valueIsObject && this.selectedValue[0].keys().includes(this.thyPrimaryKey)) {
                        this.selectedNodes = this.selectedValue.map(function (item) {
                            return _this._findTreeNode(item[_this.thyPrimaryKey]);
                        });
                    }
                    else {
                        this.selectedNodes = this.selectedValue.map(function (item) {
                            return _this._findTreeNode(item);
                        });
                    }
                }
            }
            else {
                // 单选数据初始化
                if (this.valueIsObject) {
                    if (this.selectedValue.keys().includes(this.thyPrimaryKey)) {
                        this.selectedNode = this._findTreeNode(this.selectedValue[this.thyPrimaryKey]);
                    }
                }
                else {
                    this.selectedNode = this._findTreeNode(this.selectedValue);
                }
            }
        }
    };
    ThyTreeSelectComponent.prototype.openSelectPop = function () {
        if (this.thyDisable) {
            return;
        }
        this.cdkConnectOverlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        this.expandTreeSelectOptions = !this.expandTreeSelectOptions;
        if (this.expandTreeSelectOptions) {
            this.registerInScrollDispatcher();
        }
    };
    ThyTreeSelectComponent.prototype.close = function () {
        this.expandTreeSelectOptions = false;
        this.deregisterInScrollDispatcher();
    };
    // 单选 thyMultiple = false 时，清除数据时调用
    ThyTreeSelectComponent.prototype.clearSelectedValue = function (event) {
        event.stopPropagation();
        this.selectedValue = null;
        this.selectedNode = null;
        this.onModelChange(this.selectedValue);
    };
    ThyTreeSelectComponent.prototype._changeSelectValue = function () {
        var _this = this;
        if (this.valueIsObject) {
            this.selectedValue = this.thyMultiple ? this.selectedNodes : this.selectedNode;
        }
        else {
            this.selectedValue = this.thyMultiple
                ? this.selectedNodes.map(function (item) { return item[_this.thyPrimaryKey]; })
                : this.selectedNode[this.thyPrimaryKey];
        }
        this.onModelChange(this.selectedValue);
    };
    // thyMultiple = true 时，移除数据时调用
    ThyTreeSelectComponent.prototype.removeSelectedNode = function (node, event) {
        var _this = this;
        if (event) {
            event.stopPropagation();
        }
        if (this.thyDisable) {
            return;
        }
        if (this.thyMultiple) {
            this.selectedNodes = this.selectedNodes.filter(function (item) {
                return item[_this.thyPrimaryKey] !== node[_this.thyPrimaryKey];
            });
            this._changeSelectValue();
        }
    };
    ThyTreeSelectComponent.prototype.selectNode = function (node) {
        var _this = this;
        if (!this.thyMultiple) {
            this.selectedNode = node;
            this.expandTreeSelectOptions = false;
            this.deregisterInScrollDispatcher();
        }
        else {
            if (this.selectedNodes.find(function (item) {
                return item[_this.thyPrimaryKey] === node[_this.thyPrimaryKey];
            })) {
                this.removeSelectedNode(node);
            }
            else {
                this.selectedNodes.push(node);
            }
        }
        this._changeSelectValue();
    };
    ThyTreeSelectComponent.prototype.getNodeChildren = function (node) {
        var _this = this;
        var result = this.thyGetNodeChildren(node);
        if (result && result.subscribe) {
            result.pipe().subscribe(function (data) {
                var nodes = _this.flattenNodes(data, _this.flattenTreeNodes, node.parentValues.concat([node[_this.thyPrimaryKey]]));
                var otherNodes = nodes.filter(function (item) {
                    return !_this.flattenTreeNodes.find(function (hasItem) {
                        return hasItem[_this.thyPrimaryKey] === item[_this.thyPrimaryKey];
                    });
                });
                _this.flattenTreeNodes = _this.flattenTreeNodes.concat(otherNodes);
                node.children = data;
            });
        }
    };
    var ThyTreeSelectComponent_1;
    __decorate([
        HostBinding('class.thy-select-custom'),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "treeSelectClass", void 0);
    __decorate([
        HostBinding('class.thy-select'),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "isTreeSelect", void 0);
    __decorate([
        HostBinding('class.menu-is-opened'),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "expandTreeSelectOptions", void 0);
    __decorate([
        HostBinding('class.thy-select-custom--multiple'),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "isMulti", void 0);
    __decorate([
        ContentChild('thyTreeSelectTriggerDisplay'),
        __metadata("design:type", TemplateRef)
    ], ThyTreeSelectComponent.prototype, "thyTreeSelectTriggerDisplayRef", void 0);
    __decorate([
        ViewChild(CdkOverlayOrigin),
        __metadata("design:type", CdkOverlayOrigin)
    ], ThyTreeSelectComponent.prototype, "cdkOverlayOrigin", void 0);
    __decorate([
        ViewChild(CdkConnectedOverlay),
        __metadata("design:type", CdkConnectedOverlay)
    ], ThyTreeSelectComponent.prototype, "cdkConnectedOverlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ThyTreeSelectComponent.prototype, "thyTreeNodes", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyPrimaryKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyShowKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyChildCountKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyTreeSelectComponent.prototype, "thyAllowClear", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyMultiple", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyDisable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyPlaceholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyTreeSelectComponent.prototype, "thySize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyEmptyOptionsText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyHiddenNodeKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyDisableNodeKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyAsyncNode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeSelectComponent.prototype, "thyShowWholeName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], ThyTreeSelectComponent.prototype, "thyHiddenNodeFn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], ThyTreeSelectComponent.prototype, "thyDisableNodeFn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], ThyTreeSelectComponent.prototype, "thyGetNodeChildren", void 0);
    __decorate([
        HostListener('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ThyTreeSelectComponent.prototype, "onDocumentClick", null);
    ThyTreeSelectComponent = ThyTreeSelectComponent_1 = __decorate([
        Component({
            selector: 'thy-tree-select',
            template: "<div cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" class=\"form-control form-control-custom\" [class.thy-select-selection]=\"!thyMultiple\" [ngClass]=\"thySize ? 'form-control-' + thySize : ''\" [class.disabled]=\"thyDisable\" (click)=\"openSelectPop()\"> <div *ngIf=\"!thyMultiple\" class=\"thy-tree-select-selection-text\"> <span *ngIf=\"selectedNode && !thyTreeSelectTriggerDisplayRef\">{{getShowNodeName()}}</span> <ng-container *ngIf=\"selectedNode && thyTreeSelectTriggerDisplayRef\" [ngTemplateOutlet]=\"thyTreeSelectTriggerDisplayRef\" [ngTemplateOutletContext]=\"{$implicit:selectedNode}\"></ng-container> <span class=\"text-placeholder d-inline-block\" *ngIf=\"!selectedNode\">{{thyPlaceholder}}</span> <a class=\"thy-select-remove remove-link\" href=\"javascript:;\" (click)=\"clearSelectedValue($event)\" *ngIf=\"selectedNode && thyAllowClear\"> <i class=\"wtf wtf-times-circle\"></i> </a> </div> <div *ngIf=\"thyMultiple\" [ngClass]=\"{'multiple-value-wrapper': selectedNodes?.length > 0}\"> <span class=\"mr-1\" [hidden]=\"selectedNodes?.length === 0\" *ngFor=\"let node of selectedNodes;index as i\" thyLabel=\"default\" [thyAfterIcon]=\"'wtf-times'\" (click)=\"removeSelectedNode(node,$event)\">{{node[thyShowKey]}} </span> <span class=\"text-placeholder\" *ngIf=\"selectedNodes?.length == 0\">{{thyPlaceholder}}</span> </div> </div> <ng-template cdkConnectedOverlay [cdkConnectedOverlayHasBackdrop]=\"false\" [cdkConnectedOverlayPositions]=\"positions\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayWidth]=\"cdkConnectOverlayWidth\" [cdkConnectedOverlayMinHeight]=\"100\" [cdkConnectedOverlayHeight]=\"250\" [cdkConnectedOverlayOpen]=\"expandTreeSelectOptions\" (backdropClick)=\"close()\" (detach)=\"close();\"> <div class=\"thy-select-custom\"> <thy-tree-select-nodes class=\"thy-select-container-wrapper h-100\"></thy-tree-select-nodes> </div> </ng-template> <!-- <div (click)=\"openSelectPop($event)\" class=\"form-control form-control-custom\" [class.thy-select-selection]=\"!thyMultiple\" [ngClass]=\"thySize ? 'form-control-' + thySize : ''\" [class.disabled]=\"thyDisable\"> <ng-container *ngIf=\"!thyMultiple\"> <span *ngIf=\"selectedNode && !thyTreeSelectTriggerDisplayRef\">{{selectedNode[thyShowKey]}}</span> <ng-container *ngIf=\"selectedNode && thyTreeSelectTriggerDisplayRef\" [ngTemplateOutlet]=\"thyTreeSelectTriggerDisplayRef\" [ngTemplateOutletContext]=\"{$implicit:selectedNode}\"></ng-container> <span class=\"text-placeholder d-inline-block\" *ngIf=\"!selectedNode\">{{thyPlaceholder}}</span> <a class=\"thy-select-remove remove-link\" href=\"javascript:;\" (click)=\"clearSelectedValue($event)\" *ngIf=\"selectedNode && thyAllowClear\"> <i class=\"wtf wtf-times-circle\"></i> </a> </ng-container> <div *ngIf=\"thyMultiple\" [ngClass]=\"{'multiple-value-wrapper': selectedNodes?.length > 0}\"> <span class=\"mr-1\" [hidden]=\"selectedNodes?.length === 0\" *ngFor=\"let node of selectedNodes;index as i\" thyLabel=\"default\" [thyAfterIcon]=\"'wtf-times'\" (click)=\"removeSelectedNode(node,$event)\">{{node[thyShowKey]}} </span> <span class=\"text-placeholder\" *ngIf=\"selectedNodes?.length == 0\">{{thyPlaceholder}}</span> </div> </div> <thy-tree-select-nodes class=\"thy-select-container-wrapper\" *ngIf=\"expandTreeSelectOptions\"></thy-tree-select-nodes> --> ",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyTreeSelectComponent_1; }),
                    multi: true
                }
                // {
                //     provide: MAT_SELECT_SCROLL_STRATEGY,
                //     deps: [Overlay],
                //     useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
                // }
            ]
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            NgZone,
            Overlay,
            ScrollDispatcher])
    ], ThyTreeSelectComponent);
    return ThyTreeSelectComponent;
}());
export { ThyTreeSelectComponent };
//# sourceMappingURL=tree-select.component.js.map