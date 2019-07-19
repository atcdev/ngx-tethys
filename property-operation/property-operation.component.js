var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, ContentChild, TemplateRef, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ThyTranslate } from '../shared/translate';
import { htmlElementIsEmpty, inputValueToBoolean } from '../util/helpers';
var ThyPropertyOperationComponent = /** @class */ (function () {
    function ThyPropertyOperationComponent(thyTranslate) {
        this.thyTranslate = thyTranslate;
        this._onlyHasTips = false;
        this._showClose = false;
        this._initialized = false;
        this.thyOnRemove = new EventEmitter();
        this._isPropertyOperation = true;
        this.thyLabelHasValue = true;
    }
    Object.defineProperty(ThyPropertyOperationComponent.prototype, "thyLabelText", {
        set: function (value) {
            this._labelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyPropertyOperationComponent.prototype, "thyValue", {
        set: function (value) {
            this._value = value;
            if (this._initialized) {
                this._setOnlyHasTips();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyPropertyOperationComponent.prototype, "thyLabelTranslateKey", {
        set: function (value) {
            this._labelText = this.thyTranslate.instant(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyPropertyOperationComponent.prototype, "thyIcon", {
        set: function (value) {
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyPropertyOperationComponent.prototype, "thyShowClose", {
        set: function (value) {
            this._showClose = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    ThyPropertyOperationComponent.prototype._setOnlyHasTips = function () {
        if (this._value) {
            this._onlyHasTips = false;
        }
        else if (htmlElementIsEmpty(this.contentElement.nativeElement)) {
            this._onlyHasTips = true;
        }
        else {
            this._onlyHasTips = false;
        }
    };
    ThyPropertyOperationComponent.prototype.ngAfterContentInit = function () {
        this._setOnlyHasTips();
        this._initialized = true;
    };
    ThyPropertyOperationComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.thyOnRemove.emit($event);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyPropertyOperationComponent.prototype, "thyOnRemove", void 0);
    __decorate([
        HostBinding('class.thy-property-operation'),
        __metadata("design:type", Object)
    ], ThyPropertyOperationComponent.prototype, "_isPropertyOperation", void 0);
    __decorate([
        ContentChild('operationIcon'),
        __metadata("design:type", TemplateRef)
    ], ThyPropertyOperationComponent.prototype, "operationIcon", void 0);
    __decorate([
        ViewChild('contentElement'),
        __metadata("design:type", ElementRef)
    ], ThyPropertyOperationComponent.prototype, "contentElement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyPropertyOperationComponent.prototype, "thyLabelText", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyPropertyOperationComponent.prototype, "thyValue", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyPropertyOperationComponent.prototype, "thyLabelTranslateKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyPropertyOperationComponent.prototype, "thyIcon", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyPropertyOperationComponent.prototype, "thyShowClose", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyPropertyOperationComponent.prototype, "thyLabelHasValue", void 0);
    ThyPropertyOperationComponent = __decorate([
        Component({
            selector: 'thy-property-operation',
            template: "<div class=\"thy-operation-icon\"> <ng-container *ngTemplateOutlet=\"operationIcon\"></ng-container> <button *ngIf=\"_icon\" [thyButtonIcon]=\"_icon\" [thyShape]=\"_onlyHasTips ? 'circle-thick-dashed' : 'circle-thick-solid'\"></button> </div> <div class=\"thy-operation-content\" [ngClass]=\"{'only-has-tips' : _onlyHasTips}\"> <div #contentElement> <ng-content></ng-content> </div> <ng-container *ngIf=\"_value\">{{_value}}</ng-container> <div class=\"thy-tips\" *ngIf=\"thyLabelHasValue || !thyLabelHasValue && !_value\">{{_labelText}}</div> </div> <span *ngIf=\"_showClose\" (click)=\"remove($event)\" class=\"close-link close-link-danger close-link-sm wtf wtf-times\"></span> "
        }),
        __metadata("design:paramtypes", [ThyTranslate])
    ], ThyPropertyOperationComponent);
    return ThyPropertyOperationComponent;
}());
export { ThyPropertyOperationComponent };
//# sourceMappingURL=property-operation.component.js.map