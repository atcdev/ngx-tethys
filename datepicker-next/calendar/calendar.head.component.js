var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { ThyDatepickerNextStore, datepickerNextActions } from '../datepicker-next.store';
import { Subject } from 'rxjs';
import { DatepickerNextCalendarViewModeEnum } from '../datepicker-next.interface';
import { CALENDAR_YEAR_CONSTANT } from './calendar-year.component';
import { takeUntil } from 'rxjs/operators';
var ThyDatepickerNextCalendarHeadComponent = /** @class */ (function () {
    function ThyDatepickerNextCalendarHeadComponent(store) {
        this.store = store;
        this.preClick = new EventEmitter();
        this.nextClick = new EventEmitter();
        this.ngUnsubscribe$ = new Subject();
    }
    ThyDatepickerNextCalendarHeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(ThyDatepickerNextStore.calendarCurrent)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(function (n) {
            _this._combinationNavigationText();
        });
    };
    ThyDatepickerNextCalendarHeadComponent.prototype.changeViewMode = function () {
        var mode = this.store.snapshot.calendarViewMode;
        var jumpMode;
        if (mode === DatepickerNextCalendarViewModeEnum.day) {
            jumpMode = DatepickerNextCalendarViewModeEnum.year;
        }
        else if (mode === DatepickerNextCalendarViewModeEnum.month) {
            jumpMode = DatepickerNextCalendarViewModeEnum.year;
        }
        else {
            return;
        }
        this.store.dispatch(datepickerNextActions.changeCalendarViewMode, {
            viewMode: jumpMode
        });
    };
    ThyDatepickerNextCalendarHeadComponent.prototype.viewPreClick = function () {
        this.preClick.emit();
    };
    ThyDatepickerNextCalendarHeadComponent.prototype.viewNextClick = function () {
        this.nextClick.emit();
    };
    ThyDatepickerNextCalendarHeadComponent.prototype._combinationNavigationText = function () {
        var mode = this.store.snapshot.calendarViewMode;
        if (mode === DatepickerNextCalendarViewModeEnum.day) {
            this.navigationText = this.store.snapshot.calendarCurrent.year + "\u5E74" + (this.store.snapshot.calendarCurrent.month + 1) + "\u6708";
        }
        else if (mode === DatepickerNextCalendarViewModeEnum.month) {
            this.navigationText = this.store.snapshot.calendarCurrent.year + "\u5E74";
        }
        else if (mode === DatepickerNextCalendarViewModeEnum.year) {
            var begin = void 0, end = void 0;
            begin = this.store.snapshot.calendarCurrent.year
                + CALENDAR_YEAR_CONSTANT.currentReciprocalPosition
                - CALENDAR_YEAR_CONSTANT.yearInterval;
            end = this.store.snapshot.calendarCurrent.year + CALENDAR_YEAR_CONSTANT.currentReciprocalPosition - 1;
            this.navigationText = begin + "~" + end;
        }
    };
    ThyDatepickerNextCalendarHeadComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyDatepickerNextCalendarHeadComponent.prototype, "preClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyDatepickerNextCalendarHeadComponent.prototype, "nextClick", void 0);
    ThyDatepickerNextCalendarHeadComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-calendar-head',
            template: "<div class=\"calendar-head\"> <span class=\"calendar-button-previous\" href=\"javascript:;\" (click)=\"viewPreClick()\"> <i class=\"wtf wtf-angle-left\"></i> </span> <span class=\"calendar-navigation\" href=\"javascript:;\" (click)=\"changeViewMode()\">{{navigationText}}</span> <span class=\"calendar-button-next\" href=\"javascript:;\" (click)=\"viewNextClick()\"> <i class=\"wtf wtf-angle-right\"></i> </span> </div> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore])
    ], ThyDatepickerNextCalendarHeadComponent);
    return ThyDatepickerNextCalendarHeadComponent;
}());
export { ThyDatepickerNextCalendarHeadComponent };
//# sourceMappingURL=calendar.head.component.js.map