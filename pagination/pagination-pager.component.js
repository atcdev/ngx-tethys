var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ThyPaginationPagerComponent = /** @class */ (function () {
    function ThyPaginationPagerComponent() {
        this.clickPage = new EventEmitter();
        this.showPrevMore = false;
        this.showNextMore = false;
    }
    ThyPaginationPagerComponent.prototype.pagerGenerator = function (minValue, all) {
        if (all === void 0) { all = 0; }
        var pagerSize = all ? all : this.pagerSize;
        var target = new Array(pagerSize)
            .fill('')
            .map(function (v, i) { return i + minValue; });
        return target;
    };
    ThyPaginationPagerComponent.prototype.makePagers = function (current, count) {
        if (this.mini) {
            this.setMoreBtn(false, false);
            return [current, count];
        }
        var pagerCount = this.pagerSize + this.reservedNum * 2;
        if (count <= pagerCount) {
            this.setMoreBtn(false, false);
            var target = this.pagerGenerator(2, count);
            target.length = count - 2 >= 0 ? count - 2 : 0;
            return target;
        }
        var half = (this.pagerSize - 1) / 2;
        var max = count - this.reservedNum - 1;
        var min = this.reservedNum + 2;
        if (current + half >= max) {
            this.setMoreBtn(true, false);
            return this.pagerGenerator(count - this.pagerSize);
        }
        if (current - half <= min) {
            this.setMoreBtn(false, true);
            return this.pagerGenerator(2);
        }
        this.setMoreBtn(true, true);
        return this.pagerGenerator(current - half);
    };
    ThyPaginationPagerComponent.prototype.setMoreBtn = function (prev, next) {
        this.showPrevMore = prev;
        this.showNextMore = next;
    };
    ThyPaginationPagerComponent.prototype.clickHandle = function (to) {
        var step = to - this.current;
        this.clickPage.emit(step);
    };
    ThyPaginationPagerComponent.prototype.jumpHandle = function (step) {
        this.clickPage.emit(step);
    };
    ThyPaginationPagerComponent.prototype.ngOnInit = function () {
        this.pagers = this.makePagers(this.current, this.count);
    };
    ThyPaginationPagerComponent.prototype.ngOnChanges = function (changes) {
        if (!changes) {
            return;
        }
        this.pagers = this.makePagers(this.current, this.count);
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ThyPaginationPagerComponent.prototype, "current", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ThyPaginationPagerComponent.prototype, "count", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ThyPaginationPagerComponent.prototype, "reservedNum", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ThyPaginationPagerComponent.prototype, "pagerSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyPaginationPagerComponent.prototype, "mini", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyPaginationPagerComponent.prototype, "clickPage", void 0);
    ThyPaginationPagerComponent = __decorate([
        Component({
            selector: 'thy-pagination-pager',
            template: "<ul class=\"thy-pager\"> <li class=\"thy-pager-item\" [class.active]=\"current === 1\" (click)=\"clickHandle(1)\" *ngIf=\"count > 0 && !mini\" > 1 </li> <li class=\"thy-pager-item\" [class.active]=\"current === 2\" (click)=\"clickHandle(2)\" *ngIf=\"reservedNum === 2 && showPrevMore\" > 2 </li> <li *ngIf=\"showPrevMore\" class=\"thy-pager-item thy-pager-item-more \"></li> <li class=\"thy-pager-item\" *ngFor=\"let pager of pagers\" (click)=\"clickHandle(pager)\" [class.active]=\"current === pager\" > {{ pager }} </li> <li *ngIf=\"showNextMore\" class=\"thy-pager-item thy-pager-item-more\"></li> <li class=\"thy-pager-item\" [class.active]=\"current === count - 1\" (click)=\"clickHandle(count - 1)\" *ngIf=\"reservedNum === 2 && showNextMore\" > {{ count - 1 }} </li> <li class=\"thy-pager-item\" [class.active]=\"current === count\" (click)=\"clickHandle(count)\" *ngIf=\"count > 1 && !mini\" > {{ count }} </li> </ul> "
        }),
        __metadata("design:paramtypes", [])
    ], ThyPaginationPagerComponent);
    return ThyPaginationPagerComponent;
}());
export { ThyPaginationPagerComponent };
//# sourceMappingURL=pagination-pager.component.js.map