var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { getFullTimeText } from '../util';
import { datepickerNextActions, ThyDatepickerNextStore } from '../datepicker-next.store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var ThyDatepickerNextTimeSimplyComponent = /** @class */ (function () {
    function ThyDatepickerNextTimeSimplyComponent(store) {
        this.store = store;
        this.stylesClass = 'time-simply-container';
        this.times = [];
        this.ngUnsubscribe$ = new Subject();
    }
    ThyDatepickerNextTimeSimplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(ThyDatepickerNextStore.timeSelected)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(function (n) {
            _this._combinationTimes();
        });
    };
    ThyDatepickerNextTimeSimplyComponent.prototype._combinationTimes = function () {
        this.times.length = 0;
        for (var index = 0; index < 24; index++) {
            var time = {
                text: getFullTimeText(index) + ":00",
                hour: index,
                minute: 0,
            };
            if (this.store.snapshot.timeSelected
                && this.store.snapshot.timeSelected.hour === time.hour
                && this.store.snapshot.timeSelected.minute === time.minute) {
                time.isActive = true;
            }
            this.times.push(time);
            time = __assign({}, time);
            time.isActive = false;
            time.text = getFullTimeText(index) + ":30";
            time.minute = 30;
            if (this.store.snapshot.timeSelected
                && this.store.snapshot.timeSelected.hour === time.hour
                && this.store.snapshot.timeSelected.minute === time.minute) {
                time.isActive = true;
            }
            this.times.push(time);
        }
    };
    ThyDatepickerNextTimeSimplyComponent.prototype.onSelectTime = function (time) {
        this.times.forEach(function (n) { return n.isActive = false; });
        time.isActive = true;
        this.store.dispatch(datepickerNextActions.changeTimeSelected, {
            hour: time.hour,
            minute: time.minute,
        });
    };
    ThyDatepickerNextTimeSimplyComponent.prototype.trackByFn = function (index) {
        return index;
    };
    ThyDatepickerNextTimeSimplyComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextTimeSimplyComponent.prototype, "stylesClass", void 0);
    ThyDatepickerNextTimeSimplyComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-time-simply',
            template: "<div class=\"time-cell\" *ngFor=\"let time of times; trackBy:trackByFn\" [ngClass]=\"{'active': time.isActive}\" (click)=\"onSelectTime(time)\"> {{time.text}} </div> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore])
    ], ThyDatepickerNextTimeSimplyComponent);
    return ThyDatepickerNextTimeSimplyComponent;
}());
export { ThyDatepickerNextTimeSimplyComponent };
//# sourceMappingURL=time-simply.component.js.map