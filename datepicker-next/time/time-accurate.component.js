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
import { ThyDatepickerNextStore, datepickerNextActions } from '../datepicker-next.store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var ThyDatepickerNextTimeAccurateComponent = /** @class */ (function () {
    function ThyDatepickerNextTimeAccurateComponent(store) {
        this.store = store;
        this.stylesClass = 'time-accurate-container';
        this.hours = [];
        this.minutes = [];
        this.time = {
            hour: null,
            minute: null,
        };
        this.ngUnsubscribe$ = new Subject();
    }
    ThyDatepickerNextTimeAccurateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(ThyDatepickerNextStore.timeSelected)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(function (n) {
            if (_this.store.snapshot.timeSelected) {
                _this.time = {
                    hour: _this.store.snapshot.timeSelected.hour,
                    minute: _this.store.snapshot.timeSelected.minute,
                };
            }
            _this._combinationHours();
            _this._combinationMinutes();
        });
    };
    ThyDatepickerNextTimeAccurateComponent.prototype._combinationHours = function () {
        this.hours.length = 0;
        for (var index = 0; index < 24; index++) {
            this.hours.push({
                text: getFullTimeText(index),
                hour: index,
                isActive: this.store.snapshot.timeSelected && this.store.snapshot.timeSelected.hour === index,
            });
        }
    };
    ThyDatepickerNextTimeAccurateComponent.prototype._combinationMinutes = function () {
        this.minutes.length = 0;
        for (var index = 0; index < 60; index++) {
            this.minutes.push({
                text: getFullTimeText(index),
                minute: index,
                isActive: this.store.snapshot.timeSelected && this.store.snapshot.timeSelected.minute === index,
            });
        }
    };
    ThyDatepickerNextTimeAccurateComponent.prototype.onSelectHour = function (hour) {
        this.hours.forEach(function (n) { return n.isActive = false; });
        hour.isActive = true;
        this.time.hour = hour.hour;
    };
    ThyDatepickerNextTimeAccurateComponent.prototype.onSelectMinute = function (minute) {
        this.minutes.forEach(function (n) { return n.isActive = false; });
        minute.isActive = true;
        this.time.minute = minute.minute;
        this._behaviorTimeDone();
    };
    ThyDatepickerNextTimeAccurateComponent.prototype._behaviorTimeDone = function () {
        if (this.time.hour !== null && this.time.minute !== null) {
            this.store.dispatch(datepickerNextActions.changeTimeSelected, {
                hour: this.time.hour,
                minute: this.time.minute,
            });
        }
    };
    ThyDatepickerNextTimeAccurateComponent.prototype.trackByFn = function (index) {
        return index;
    };
    ThyDatepickerNextTimeAccurateComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextTimeAccurateComponent.prototype, "stylesClass", void 0);
    ThyDatepickerNextTimeAccurateComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-time-accurate',
            template: "<div class=\"time-group\"> <div class=\"time-cell\" *ngFor=\"let hour of hours; trackBy:trackByFn\" [ngClass]=\"{'active': hour.isActive}\" (click)=\"onSelectHour(hour)\"> {{hour.text}} </div> </div> <div class=\"time-group\"> <div class=\"time-cell\" *ngFor=\"let minute of minutes; trackBy:trackByFn\" [ngClass]=\"{'active': minute.isActive}\" (click)=\"onSelectMinute(minute)\"> {{minute.text}} </div> </div> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore])
    ], ThyDatepickerNextTimeAccurateComponent);
    return ThyDatepickerNextTimeAccurateComponent;
}());
export { ThyDatepickerNextTimeAccurateComponent };
//# sourceMappingURL=time-accurate.component.js.map