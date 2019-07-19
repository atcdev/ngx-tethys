var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, Output, EventEmitter, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UpdateHostClassService } from '../shared';
export var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return ThyPaginationComponent; }),
    multi: true
};
var ThyPaginationComponent = /** @class */ (function () {
    function ThyPaginationComponent(updateHostClassService, elementRef) {
        this.updateHostClassService = updateHostClassService;
        this.elementRef = elementRef;
        /** ===   === */
        this._pagination = true;
        this._page = 1;
        this.inited = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        // tslint:disable-next-line:member-ordering
        this.numPages = new EventEmitter();
        // tslint:disable-next-line:member-ordering
        this.pageChanged = new EventEmitter();
        updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    Object.defineProperty(ThyPaginationComponent.prototype, "itemsPerPage", {
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            if (this.totalItems !== undefined) {
                this.totalPages = this.calculateTotalPages();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyPaginationComponent.prototype, "totalItems", {
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyPaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyPaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (v) {
            var _previous = this._page;
            this._page = v > this.totalPages ? this.totalPages : v || 1;
            this.onChangeCallback(v);
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    ThyPaginationComponent.prototype.writeValue = function (page) {
        if (page !== this._page) {
            this._page = page;
        }
    };
    ThyPaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ThyPaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ThyPaginationComponent.prototype.ngOnInit = function () {
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : 20;
        this.thySize =
            typeof this.thySize !== 'undefined' ? this.thySize : 'md';
        this._setSize(this.thySize);
        this.thyJump =
            typeof this.thyJump !== 'undefined' ? this.thyJump : true;
        if (typeof this.totalPages === 'undefined') {
            this.totalPages = this.calculateTotalPages();
        }
        this.inited = true;
    };
    ThyPaginationComponent.prototype.nextHandle = function (step) {
        if (this.disabled) {
            return;
        }
        var nextPage = this.page + step;
        this.page =
            nextPage < 1
                ? 1
                : nextPage > this.totalPages
                    ? this.totalPages
                    : nextPage;
    };
    ThyPaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    ThyPaginationComponent.prototype._setSize = function (v) {
        switch (v) {
            case 'sm':
                this.reservedNum = 1;
                this.pagerSize = 5;
                break;
            case 'md':
                this.reservedNum = 2;
                this.pagerSize = 7;
                break;
            case 'xs':
                this.thyJump =
                    typeof this.thyJump !== 'undefined' ? this.thyJump : false;
                this.reservedNum = 1;
                this.pagerSize = 1;
                this.updateHostClassService.updateClass(["thy-pagination-xs"]);
                break;
        }
        this.pagerCount = this.pagerSize + this.reservedNum * 2;
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyPaginationComponent.prototype, "align", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ThyPaginationComponent.prototype, "maxSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyPaginationComponent.prototype, "boundaryLinks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyPaginationComponent.prototype, "directionLinks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyPaginationComponent.prototype, "firstText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyPaginationComponent.prototype, "previousText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyPaginationComponent.prototype, "nextText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyPaginationComponent.prototype, "lastText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyPaginationComponent.prototype, "rotate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyPaginationComponent.prototype, "pageBtnClass", void 0);
    __decorate([
        HostBinding('class.thy-pagination'),
        __metadata("design:type", Object)
    ], ThyPaginationComponent.prototype, "_pagination", void 0);
    __decorate([
        HostBinding('class.disabled'),
        Input(),
        __metadata("design:type", Boolean)
    ], ThyPaginationComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyPaginationComponent.prototype, "thyJump", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyPaginationComponent.prototype, "thySize", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyPaginationComponent.prototype, "numPages", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyPaginationComponent.prototype, "pageChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyPaginationComponent.prototype, "itemsPerPage", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyPaginationComponent.prototype, "totalItems", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyPaginationComponent.prototype, "totalPages", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyPaginationComponent.prototype, "page", null);
    ThyPaginationComponent = __decorate([
        Component({
            selector: 'thy-pagination',
            template: "<button class=\"thy-pagination-btn btn-prev wtf wtf-angle-left\" [class.disabled]=\"page === 1\" (click)=\"nextHandle(-1)\" ></button> <thy-pagination-pager [reservedNum]=\"reservedNum\" [pagerSize]=\"pagerSize\" [current]=\"page\" [count]=\"totalPages\" (clickPage)=\"nextHandle($event)\" *ngIf=\"inited\" [mini]=\"thySize === 'xs'\" ></thy-pagination-pager> <button class=\"thy-pagination-btn btn-next wtf wtf-angle-right\" [class.disabled]=\"page === totalPages\" (click)=\"nextHandle(1)\" ></button> <thy-pagination-jump *ngIf=\"inited && thyJump && totalPages > pagerCount\" [page]=\"page\" [max]=\"totalPages\" (jump)=\"nextHandle($event)\" [disabled]=\"disabled\" ></thy-pagination-jump> ",
            providers: [PAGINATION_CONTROL_VALUE_ACCESSOR, UpdateHostClassService]
        }),
        __metadata("design:paramtypes", [UpdateHostClassService,
            ElementRef])
    ], ThyPaginationComponent);
    return ThyPaginationComponent;
}());
export { ThyPaginationComponent };
//# sourceMappingURL=pagination.component.js.map