var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ViewEncapsulation, HostBinding, EventEmitter, TemplateRef, IterableDiffers } from '@angular/core';
import { ThyTransferComponent } from './transfer.component';
var ThyTransferListComponent = /** @class */ (function () {
    function ThyTransferListComponent(root, differs) {
        this.root = root;
        this.differs = differs;
        this.draggableOptions = {
            disabled: false,
            onStart: this.onDragStart.bind(this),
            onUpdate: this.onDragUpdate.bind(this)
        };
        this.draggableUpdate = new EventEmitter();
        this.select = new EventEmitter();
        this.hostClass = 'thy-transfer-list';
    }
    Object.defineProperty(ThyTransferListComponent.prototype, "draggable", {
        set: function (value) {
            this.draggableOptions.disabled = !value;
        },
        enumerable: true,
        configurable: true
    });
    ThyTransferListComponent.prototype.ngOnInit = function () {
        this._diff = this.differs.find(this.items).create();
    };
    ThyTransferListComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this._diff.diff(this.items);
        if (changes) {
            // 数据发生变化时，更改order值
            changes.forEachAddedItem(function (record) {
                record.item.order = record.currentIndex;
            });
            changes.forEachRemovedItem(function () {
                _this.items.forEach(function (item, index) {
                    item.order = index;
                });
            });
            changes.forEachMovedItem(function () {
                _this.items.forEach(function (item, index) {
                    item.order = index;
                });
            });
        }
    };
    ThyTransferListComponent.prototype.onSelect = function (item) {
        var event = { item: item };
        this.select.emit(event);
    };
    ThyTransferListComponent.prototype.onDragStart = function (event) {
        this._dragModel = this.items[event.oldIndex];
    };
    ThyTransferListComponent.prototype.onDragUpdate = function (event) {
        var dragEvent = {
            model: this._dragModel,
            models: this.items,
            oldIndex: event.oldIndex,
            newIndex: event.newIndex,
        };
        this.draggableUpdate.emit(dragEvent);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyTransferListComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ThyTransferListComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyTransferListComponent.prototype, "draggable", null);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], ThyTransferListComponent.prototype, "template", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTransferListComponent.prototype, "draggableUpdate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTransferListComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyTransferListComponent.prototype, "hostClass", void 0);
    ThyTransferListComponent = __decorate([
        Component({
            selector: 'thy-transfer-list',
            template: "<div class=\"thy-transfer-list-header\"> <span class=\"thy-transfer-list-header-title\">{{title}}</span> </div> <div class=\"thy-transfer-list-body\"> <ul class=\"thy-transfer-list-content\" [class.thy-transfer-drag]=\"!draggableOptions.disabled\" [sortablejs]=\"items\" [sortablejsOptions]=\"draggableOptions\"> <ng-container *ngFor=\"let item of items;\"> <li class=\"thy-transfer-list-content-item\" [ngClass]=\"{'active' : item.checked}\" (click)=\"onSelect(item)\"> <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template> <ng-container *ngIf=\"!template\"> <ng-container *ngIf=\"!draggableOptions.disabled\"> <i class=\"thy-transfer-drag-icon wtf wtf-move\"></i> </ng-container> {{item.title}} </ng-container> </li> </ng-container> </ul> </div>",
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ThyTransferComponent,
            IterableDiffers])
    ], ThyTransferListComponent);
    return ThyTransferListComponent;
}());
export { ThyTransferListComponent };
//# sourceMappingURL=transfer-list.component.js.map