var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding } from '@angular/core';
import { ThyDatepickerNextContainerComponent } from '../datepicker-container.component';
import { ThyDatepickerNextEventsEnum } from '../datepicker-next.interface';
var ThyDatepickerNextOperationComponent = /** @class */ (function () {
    function ThyDatepickerNextOperationComponent(parentComponent) {
        this.parentComponent = parentComponent;
        this.stylesClass = 'operation-container';
    }
    ThyDatepickerNextOperationComponent.prototype.ngOnInit = function () { };
    ThyDatepickerNextOperationComponent.prototype.ok = function () {
        this.parentComponent.behaviorValueChange(ThyDatepickerNextEventsEnum.done);
    };
    ThyDatepickerNextOperationComponent.prototype.clear = function () {
        this.parentComponent.behaviorValueChange(ThyDatepickerNextEventsEnum.clean);
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextOperationComponent.prototype, "stylesClass", void 0);
    ThyDatepickerNextOperationComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-operation',
            template: "<button thyButton=\"outline-primary-square\" class=\"operation-button\" (click)=\"clear()\">清空</button> <button thyButton=\"primary-square\" class=\"operation-button\" (click)=\"ok()\">确定</button> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextContainerComponent])
    ], ThyDatepickerNextOperationComponent);
    return ThyDatepickerNextOperationComponent;
}());
export { ThyDatepickerNextOperationComponent };
//# sourceMappingURL=operation.component.js.map