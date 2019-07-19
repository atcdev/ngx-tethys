var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ThyDatepickerNextService } from './datepicker-next.service';
import { ThyDatepickerNextComponent } from './datepicker-next.component';
import { ThyDatepickerNextContainerComponent } from './datepicker-container.component';
import { ThyDatepickerNextCalendarComponent } from './calendar/calendar.component';
import { ThyDatepickerNextCalendarHeadComponent } from './calendar/calendar.head.component';
import { ThyDatepickerNextCalendarDayComponent } from './calendar/calendar-day.component';
import { ThyDatepickerNextCalendarMonthComponent } from './calendar/calendar-month.component';
import { ThyDatepickerNextCalendarYearComponent } from './calendar/calendar-year.component';
import { ThyDatepickerNextShortcutComponent } from './shortcut/shortcut.component';
import { ThyDatepickerNextTimeComponent } from './time/time.component';
import { ThyDatepickerNextTimeAccurateComponent } from './time/time-accurate.component';
import { ThyDatepickerNextTimeSimplyComponent } from './time/time-simply.component';
import { ThyStoreModule } from '../store/module';
import { ThyDatepickerNextStore } from './datepicker-next.store';
import { ThyButtonModule } from '../button';
import { ThyDatepickerNextOperationComponent } from './operation/operation.component';
import { FormsModule } from '@angular/forms';
import { ThyDatepickerNextDirective } from './datepicker-next.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { ThyDirectiveModule } from '../directive';
import { ThyInputModule } from '../input';
var ThyDatepickerNextModule = /** @class */ (function () {
    function ThyDatepickerNextModule() {
    }
    ThyDatepickerNextModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                OverlayModule,
                ThyDirectiveModule,
                ThyButtonModule,
                ThyInputModule,
                ThyStoreModule.forFeature([ThyDatepickerNextStore])
            ],
            exports: [
                ThyDatepickerNextComponent,
                ThyDatepickerNextDirective,
                ThyDatepickerNextContainerComponent,
                ThyDatepickerNextTimeSimplyComponent,
                ThyDatepickerNextTimeAccurateComponent
            ],
            entryComponents: [
                ThyDatepickerNextCalendarComponent,
                ThyDatepickerNextCalendarDayComponent,
                ThyDatepickerNextCalendarMonthComponent,
                ThyDatepickerNextCalendarYearComponent,
                ThyDatepickerNextShortcutComponent,
                ThyDatepickerNextTimeComponent,
                ThyDatepickerNextTimeAccurateComponent,
                ThyDatepickerNextTimeSimplyComponent,
                ThyDatepickerNextOperationComponent,
                ThyDatepickerNextTimeSimplyComponent,
                ThyDatepickerNextTimeAccurateComponent
            ],
            declarations: [
                ThyDatepickerNextComponent,
                ThyDatepickerNextDirective,
                ThyDatepickerNextContainerComponent,
                ThyDatepickerNextCalendarComponent,
                ThyDatepickerNextCalendarHeadComponent,
                ThyDatepickerNextCalendarDayComponent,
                ThyDatepickerNextCalendarMonthComponent,
                ThyDatepickerNextCalendarYearComponent,
                ThyDatepickerNextShortcutComponent,
                ThyDatepickerNextTimeComponent,
                ThyDatepickerNextTimeAccurateComponent,
                ThyDatepickerNextTimeSimplyComponent,
                ThyDatepickerNextOperationComponent,
                ThyDatepickerNextTimeSimplyComponent,
                ThyDatepickerNextTimeAccurateComponent
            ],
            providers: []
        })
    ], ThyDatepickerNextModule);
    return ThyDatepickerNextModule;
}());
export { ThyDatepickerNextModule };
//# sourceMappingURL=datepicker-next.module.js.map