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
import { ThyDatepickerNextStore, datepickerNextActions } from '../datepicker-next.store';
import { DatepickerNextCalendarViewModeEnum, ThyDatepickerNextEventsEnum } from '../datepicker-next.interface';
import { ThyDatepickerNextContainerComponent } from '../datepicker-container.component';
var ThyDatepickerNextShortcutTypeEnum;
(function (ThyDatepickerNextShortcutTypeEnum) {
    ThyDatepickerNextShortcutTypeEnum["today"] = "today";
    ThyDatepickerNextShortcutTypeEnum["tomorrow"] = "tomorrow";
    ThyDatepickerNextShortcutTypeEnum["aWeekLater"] = "aWeekLater";
})(ThyDatepickerNextShortcutTypeEnum || (ThyDatepickerNextShortcutTypeEnum = {}));
var ThyDatepickerNextShortcutComponent = /** @class */ (function () {
    function ThyDatepickerNextShortcutComponent(store, parentComponent) {
        this.store = store;
        this.parentComponent = parentComponent;
        this.stylesClass = 'shortcut-container';
        this.shortcutTypeEnum = ThyDatepickerNextShortcutTypeEnum;
    }
    ThyDatepickerNextShortcutComponent.prototype.ngOnInit = function () { };
    ThyDatepickerNextShortcutComponent.prototype.shortcutClick = function (type) {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var day = today.getDate();
        switch (type) {
            case this.shortcutTypeEnum.today:
                break;
            case this.shortcutTypeEnum.tomorrow:
                day += 1;
                break;
            case this.shortcutTypeEnum.aWeekLater:
                day += 7;
                break;
        }
        this.store.dispatch(datepickerNextActions.changeCalendarViewMode, { viewMode: DatepickerNextCalendarViewModeEnum.day });
        this.store.dispatch(datepickerNextActions.changeCalendarSelected, { year: year, month: month, day: day });
        this.store.dispatch(datepickerNextActions.changeCalendarCurrent, { year: year, month: month, day: day });
        this.parentComponent.behaviorValueChange(ThyDatepickerNextEventsEnum.shortcutDone);
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextShortcutComponent.prototype, "stylesClass", void 0);
    ThyDatepickerNextShortcutComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-shortcut',
            template: "<button thyButton=\"outline-default-square\" thySize=\"sm\" class=\"shortcut-button\" (click)=\"shortcutClick(shortcutTypeEnum.today)\">今天</button> <button thyButton=\"outline-default-square\" thySize=\"sm\" class=\"shortcut-button\" (click)=\"shortcutClick(shortcutTypeEnum.tomorrow)\">明天</button> <button thyButton=\"outline-default-square\" thySize=\"sm\" class=\"shortcut-button\" (click)=\"shortcutClick(shortcutTypeEnum.aWeekLater)\">一周后</button> "
        }),
        __metadata("design:paramtypes", [ThyDatepickerNextStore,
            ThyDatepickerNextContainerComponent])
    ], ThyDatepickerNextShortcutComponent);
    return ThyDatepickerNextShortcutComponent;
}());
export { ThyDatepickerNextShortcutComponent };
//# sourceMappingURL=shortcut.component.js.map