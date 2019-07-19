var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, ContentChildren, QueryList, NgZone } from '@angular/core';
import { defer, Subject, merge } from 'rxjs';
import { ThyOptionComponent } from './option.component';
import { take, switchMap, startWith, takeUntil, debounceTime, map } from 'rxjs/operators';
var ThySelectOptionGroupComponent = /** @class */ (function () {
    function ThySelectOptionGroupComponent(_ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this._hidden = false;
        this._isOptionGroup = true;
        this._destroy$ = new Subject();
        this.optionVisiableChanges = defer(function () {
            if (_this.options) {
                return merge.apply(void 0, _this.options.map(function (option) { return option.visiableChange; }));
            }
            return _this._ngZone.onStable.asObservable().pipe(take(1), switchMap(function () { return _this.optionVisiableChanges; }));
        });
    }
    Object.defineProperty(ThySelectOptionGroupComponent.prototype, "hidden", {
        get: function () {
            return this._hidden;
        },
        enumerable: true,
        configurable: true
    });
    ThySelectOptionGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.options.changes
            .pipe(startWith(null), takeUntil(this._destroy$))
            .subscribe(function () {
            _this._resetOptions();
        });
    };
    ThySelectOptionGroupComponent.prototype._resetOptions = function () {
        var _this = this;
        var changedOrDestroyed$ = merge(this.options.changes, this._destroy$);
        merge.apply(void 0, this.options.map(function (option) { return option.visiableChange; })).pipe(takeUntil(changedOrDestroyed$), debounceTime(10), map(function (data) {
            var hasOption = _this.options.find(function (option) {
                if (!option.hidden) {
                    return true;
                }
            });
            if (hasOption) {
                return false;
            }
            else {
                return true;
            }
        }))
            .subscribe(function (data) {
            _this._hidden = data;
        });
    };
    ThySelectOptionGroupComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    __decorate([
        Input(),
        HostBinding("class.disabled"),
        __metadata("design:type", Boolean)
    ], ThySelectOptionGroupComponent.prototype, "thyDisabled", void 0);
    __decorate([
        HostBinding('class.thy-option-item-group'),
        __metadata("design:type", Object)
    ], ThySelectOptionGroupComponent.prototype, "_isOptionGroup", void 0);
    __decorate([
        HostBinding('class.thy-select-option-group-hidden'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ThySelectOptionGroupComponent.prototype, "hidden", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThySelectOptionGroupComponent.prototype, "thyGroupLabel", void 0);
    __decorate([
        ContentChildren(ThyOptionComponent),
        __metadata("design:type", QueryList)
    ], ThySelectOptionGroupComponent.prototype, "options", void 0);
    ThySelectOptionGroupComponent = __decorate([
        Component({
            selector: 'thy-option-group',
            template: "<span class=\"group-name text-info\">{{ thyGroupLabel }}</span> <ng-content></ng-content> "
        }),
        __metadata("design:paramtypes", [NgZone])
    ], ThySelectOptionGroupComponent);
    return ThySelectOptionGroupComponent;
}());
export { ThySelectOptionGroupComponent };
//# sourceMappingURL=option-group.component.js.map