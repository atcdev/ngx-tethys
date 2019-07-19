var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Store, Action } from '../store';
import { DatepickerNextCalendarViewModeEnum, DatepickerNextViewFeatureConfig } from './datepicker-next.interface';
import { calendarDateConvert } from './util';
var DatepickerNextState = /** @class */ (function () {
    function DatepickerNextState() {
    }
    return DatepickerNextState;
}());
export { DatepickerNextState };
export var datepickerNextActions = {
    initState: 'initState',
    changeViewFeatureConfig: 'changeViewFeatureConfig',
    changeCalendarViewMode: 'changeCalendarViewMode',
    changeCalendarCurrent: 'changeCalendarCurrent',
    changeCalendarSelected: 'changeCalendarSelected',
    changeTimeSelected: 'changeTimeSelected',
    valueChange: 'valueChange',
    setDisableRules: 'setDisableRules'
};
var ThyDatepickerNextStore = /** @class */ (function (_super) {
    __extends(ThyDatepickerNextStore, _super);
    function ThyDatepickerNextStore() {
        return _super.call(this, new DatepickerNextState()) || this;
    }
    ThyDatepickerNextStore.calendarViewMode = function (state) {
        return state.calendarViewMode;
    };
    ThyDatepickerNextStore.calendarCurrent = function (state) {
        return state.calendarCurrent;
    };
    ThyDatepickerNextStore.calendarSelected = function (state) {
        return state.calendarSelected;
    };
    ThyDatepickerNextStore.timeSelected = function (state) {
        return state.timeSelected;
    };
    ThyDatepickerNextStore.calendarCurrentYear = function (state) {
        return state.calendarCurrent.year;
    };
    ThyDatepickerNextStore.valueChange = function (state) {
        return state.valueChange;
    };
    ThyDatepickerNextStore.disableRules = function (state) {
        return state.disableRules;
    };
    ThyDatepickerNextStore.prototype.clear = function () {
        this.next(new DatepickerNextState());
    };
    ThyDatepickerNextStore.prototype.initState = function (state, payload) {
        // calendarDate
        var year, month, day;
        if (payload && payload.calendarDate) {
            year = payload.calendarDate.year;
            month = payload.calendarDate.month;
            day = payload.calendarDate.day;
            this.dispatch(datepickerNextActions.changeCalendarSelected, {
                year: year,
                month: month,
                day: day
            });
        }
        else {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth();
            day = today.getDate();
        }
        this.dispatch(datepickerNextActions.changeCalendarCurrent, {
            year: year,
            month: month,
            day: 1,
            viewMode: DatepickerNextCalendarViewModeEnum.day
        });
        // calendarTime
        var hour, minute;
        if (payload && payload.calendarTime) {
            hour = payload.calendarTime.hour;
            minute = payload.calendarTime.minute;
            this.dispatch(datepickerNextActions.changeTimeSelected, {
                hour: hour,
                minute: minute
            });
        }
    };
    ThyDatepickerNextStore.prototype.changeViewFeatureConfig = function (state, payload) {
        if (!state.viewFeatureConfig) {
            state.viewFeatureConfig = {};
        }
        for (var key in payload) {
            if (payload.hasOwnProperty(key)) {
                state.viewFeatureConfig[key] = payload[key];
            }
        }
        this.next(state);
    };
    ThyDatepickerNextStore.prototype.changeCalendarSelected = function (state, payload) {
        var result = state.calendarSelected || {};
        if (payload.year !== undefined) {
            result.year = payload.year;
        }
        if (payload.month !== undefined) {
            result.month = payload.month;
        }
        if (payload.day !== undefined) {
            result.day = payload.day;
        }
        state.calendarSelected = calendarDateConvert(result.year, result.month, result.day);
        this.next(state);
    };
    ThyDatepickerNextStore.prototype.changeCalendarViewMode = function (state, payload) {
        state.calendarViewMode = payload.viewMode;
        this.next(state);
    };
    ThyDatepickerNextStore.prototype.changeCalendarCurrent = function (state, payload) {
        if (state.calendarCurrent) {
            if (payload.year !== undefined) {
                state.calendarCurrent.year = payload.year;
            }
            if (payload.month !== undefined) {
                var date = calendarDateConvert(state.calendarCurrent.year, payload.month);
                state.calendarCurrent.year = date.year;
                state.calendarCurrent.month = date.month;
            }
            if (payload.day !== undefined) {
                var date = calendarDateConvert(state.calendarCurrent.year, state.calendarCurrent.month, payload.day);
                state.calendarCurrent.year = date.year;
                state.calendarCurrent.month = date.month;
                state.calendarCurrent.day = date.day;
            }
        }
        else {
            state.calendarCurrent = {
                year: payload.year,
                month: payload.month,
                day: payload.day
            };
        }
        state.calendarCurrent = Object.assign({}, state.calendarCurrent);
        if (payload.viewMode) {
            state.calendarViewMode = payload.viewMode;
        }
        this.next(state);
    };
    ThyDatepickerNextStore.prototype.valueChange = function (state, payload) {
        state.valueChange = payload.type;
        this.next(state);
    };
    ThyDatepickerNextStore.prototype.changeTimeSelected = function (state, payload) {
        if (payload) {
            state.timeSelected = {
                hour: payload.hour,
                minute: payload.minute
            };
        }
        else {
            state.timeSelected = null;
        }
        this.next(state);
    };
    ThyDatepickerNextStore.prototype.setDisableRules = function (state, payload) {
        state.disableRules = Object.assign({}, state.disableRules, payload);
        this.next(state);
    };
    __decorate([
        Action(datepickerNextActions.initState),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DatepickerNextState, Object]),
        __metadata("design:returntype", void 0)
    ], ThyDatepickerNextStore.prototype, "initState", null);
    __decorate([
        Action(datepickerNextActions.changeViewFeatureConfig),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DatepickerNextState,
            DatepickerNextViewFeatureConfig]),
        __metadata("design:returntype", void 0)
    ], ThyDatepickerNextStore.prototype, "changeViewFeatureConfig", null);
    __decorate([
        Action(datepickerNextActions.changeCalendarSelected),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DatepickerNextState, Object]),
        __metadata("design:returntype", void 0)
    ], ThyDatepickerNextStore.prototype, "changeCalendarSelected", null);
    __decorate([
        Action(datepickerNextActions.changeCalendarViewMode),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DatepickerNextState, Object]),
        __metadata("design:returntype", void 0)
    ], ThyDatepickerNextStore.prototype, "changeCalendarViewMode", null);
    __decorate([
        Action(datepickerNextActions.changeCalendarCurrent),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DatepickerNextState, Object]),
        __metadata("design:returntype", void 0)
    ], ThyDatepickerNextStore.prototype, "changeCalendarCurrent", null);
    __decorate([
        Action(datepickerNextActions.valueChange),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DatepickerNextState, Object]),
        __metadata("design:returntype", void 0)
    ], ThyDatepickerNextStore.prototype, "valueChange", null);
    __decorate([
        Action(datepickerNextActions.changeTimeSelected),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DatepickerNextState, Object]),
        __metadata("design:returntype", void 0)
    ], ThyDatepickerNextStore.prototype, "changeTimeSelected", null);
    __decorate([
        Action(datepickerNextActions.setDisableRules),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DatepickerNextState, Object]),
        __metadata("design:returntype", void 0)
    ], ThyDatepickerNextStore.prototype, "setDisableRules", null);
    return ThyDatepickerNextStore;
}(Store));
export { ThyDatepickerNextStore };
//# sourceMappingURL=datepicker-next.store.js.map