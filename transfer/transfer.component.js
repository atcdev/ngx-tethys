var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ViewEncapsulation, HostBinding, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
var ThyTransferComponent = /** @class */ (function () {
    function ThyTransferComponent() {
        this.hostClass = 'thy-transfer';
        this.leftDraggable = false;
        this.rightDraggable = false;
        this._autoMove = true;
        this.thyDraggableUpdate = new EventEmitter();
        this.thyChange = new EventEmitter();
    }
    Object.defineProperty(ThyTransferComponent.prototype, "thyData", {
        set: function (value) {
            if (value) {
                this.initializeTransferData(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTransferComponent.prototype, "thyTitles", {
        set: function (value) {
            this.leftTitle = value[0] || '';
            this.rightTitle = value[1] || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTransferComponent.prototype, "thyAutoMove", {
        set: function (value) {
            this._autoMove = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTransferComponent.prototype, "thyCanMove", {
        set: function (value) {
            this._canMove = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTransferComponent.prototype, "thyLeftDraggable", {
        set: function (value) {
            this.leftDraggable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyTransferComponent.prototype, "thyRightDraggable", {
        set: function (value) {
            this.rightDraggable = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyTransferComponent.prototype.ngOnInit = function () {
    };
    ThyTransferComponent.prototype.initializeTransferData = function (data) {
        this.leftDataSource = data.filter(function (item) {
            return item.direction === TransferDirection.left;
        });
        this.rightDataSource = data.filter(function (item) {
            return item.direction === TransferDirection.right;
        });
    };
    ThyTransferComponent.prototype.onSelect = function (from, event) {
        var to = (from === TransferDirection.left) ? TransferDirection.right : TransferDirection.left;
        event.item.checked = !event.item.checked;
        if (this._autoMove) {
            this.onMove(to);
        }
    };
    ThyTransferComponent.prototype.onMove = function (to) {
        var from = (to === TransferDirection.right) ? TransferDirection.left : TransferDirection.right;
        var leftDataSource = (to === TransferDirection.right) ? this.leftDataSource : this.rightDataSource;
        var rightDataSource = (to === TransferDirection.right) ? this.rightDataSource : this.leftDataSource;
        var selections = leftDataSource.filter(function (item) { return item.checked; });
        var changeEvent = {
            from: from,
            to: to,
            items: selections.slice()
        };
        selections.forEach(function (item) {
            var index = leftDataSource.indexOf(item);
            var removed = leftDataSource.splice(index, 1)[0];
            removed.checked = !removed.checked;
            removed.direction = to;
            rightDataSource.push(removed);
        });
        this.thyChange.emit(changeEvent);
    };
    ThyTransferComponent.prototype.onDragUpdate = function (event) {
        this.thyDraggableUpdate.emit(event);
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyTransferComponent.prototype, "hostClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ThyTransferComponent.prototype, "thyData", null);
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ThyTransferComponent.prototype, "thyTitles", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyTransferComponent.prototype, "thyAutoMove", null);
    __decorate([
        Input(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], ThyTransferComponent.prototype, "thyCanMove", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyTransferComponent.prototype, "thyLeftDraggable", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyTransferComponent.prototype, "thyRightDraggable", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTransferComponent.prototype, "thyDraggableUpdate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyTransferComponent.prototype, "thyChange", void 0);
    __decorate([
        ContentChild('renderTemplate'),
        __metadata("design:type", TemplateRef)
    ], ThyTransferComponent.prototype, "templateRef", void 0);
    ThyTransferComponent = __decorate([
        Component({
            selector: 'thy-transfer',
            template: "<thy-transfer-list [items]=\"leftDataSource\" [title]=\"leftTitle\" [template]=\"templateRef\" [draggable]=\"leftDraggable\" (draggableUpdate)=\"onDragUpdate($event)\" (select)=\"onSelect('left' , $event)\"></thy-transfer-list> <div class=\"thy-transfer-operation\"> <div class=\"thy-transfer-operation-body\"> <a class=\"operation-link\" href=\"javascript:;\" (click)=\"onMove('right')\"> <i class=\"wtf wtf-angle-right\"></i> </a> <br> <a class=\"operation-link rotate-left\" href=\"javascript:;\" (click)=\"onMove('left')\"> <i class=\"wtf wtf-angle-right\"></i> </a> </div> </div> <thy-transfer-list [items]=\"rightDataSource\" [title]=\"rightTitle\" [template]=\"templateRef\" [draggable]=\"rightDraggable\" (draggableUpdate)=\"onDragUpdate($event)\" (select)=\"onSelect('right' , $event)\"></thy-transfer-list>",
            encapsulation: ViewEncapsulation.None
        })
    ], ThyTransferComponent);
    return ThyTransferComponent;
}());
export { ThyTransferComponent };
export var TransferDirection;
(function (TransferDirection) {
    TransferDirection["left"] = "left";
    TransferDirection["right"] = "right";
})(TransferDirection || (TransferDirection = {}));
//# sourceMappingURL=transfer.component.js.map