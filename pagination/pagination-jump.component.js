var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
var ThyPaginationJumpComponent = /** @class */ (function () {
    function ThyPaginationJumpComponent() {
        this.jump = new EventEmitter();
        this._paginationJump = true;
    }
    ThyPaginationJumpComponent_1 = ThyPaginationJumpComponent;
    ThyPaginationJumpComponent.nextPageNumber = function (page, max) {
        if (page <= 1) {
            return 1;
        }
        if (page >= max) {
            return max;
        }
        return page;
    };
    ThyPaginationJumpComponent.prototype.changeHandle = function (jumpValue) {
        if (Number.isNaN(+jumpValue)) {
            return;
        }
        var next = ThyPaginationJumpComponent_1.nextPageNumber(+jumpValue, this.max);
        var pre = this.page;
        this.page = Math.round(next);
        this.jump.emit(this.page - pre);
    };
    var ThyPaginationJumpComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ThyPaginationJumpComponent.prototype, "page", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ThyPaginationJumpComponent.prototype, "max", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyPaginationJumpComponent.prototype, "jump", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyPaginationJumpComponent.prototype, "disabled", void 0);
    __decorate([
        HostBinding('class.thy-pagination-jump'),
        __metadata("design:type", Object)
    ], ThyPaginationJumpComponent.prototype, "_paginationJump", void 0);
    ThyPaginationJumpComponent = ThyPaginationJumpComponent_1 = __decorate([
        Component({
            selector: 'thy-pagination-jump',
            template: "<span>到</span> <input type=\"number\" #input autocomplete=\"off\" rows=\"2\" [min]=\"1\" [max]=\"max\" [ngModel]=\"page\" (keyup.enter)=\"changeHandle(input.value)\" [disabled]=\"disabled\" /> <span>页</span> <button (click)=\"changeHandle(input.value)\" class=\"thy-pagination-btn\"> 确定 </button> "
        }),
        __metadata("design:paramtypes", [])
    ], ThyPaginationJumpComponent);
    return ThyPaginationJumpComponent;
}());
export { ThyPaginationJumpComponent };
//# sourceMappingURL=pagination-jump.component.js.map