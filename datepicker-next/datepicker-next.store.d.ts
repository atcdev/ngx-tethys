import { Store } from '../store';
import { DatepickerNextCalendarViewModeEnum, ThyDatepickerNextCalendarDate, DatepickerNextValueChangeTypeEnum, ThyDatepickerNextTimeInfo, DatepickerNextViewFeatureConfig, DatepickerNextDisableRules } from './datepicker-next.interface';
export declare class DatepickerNextState {
    viewFeatureConfig: DatepickerNextViewFeatureConfig;
    calendarViewMode: DatepickerNextCalendarViewModeEnum;
    calendarViewModeComponent: any;
    calendarNavigation: {
        text: string;
    };
    calendarCurrent: ThyDatepickerNextCalendarDate;
    calendarSelected: ThyDatepickerNextCalendarDate;
    timeSelected: ThyDatepickerNextTimeInfo;
    valueChange: any;
    disableRules: DatepickerNextDisableRules;
}
export declare const datepickerNextActions: {
    initState: string;
    changeViewFeatureConfig: string;
    changeCalendarViewMode: string;
    changeCalendarCurrent: string;
    changeCalendarSelected: string;
    changeTimeSelected: string;
    valueChange: string;
    setDisableRules: string;
};
export declare class ThyDatepickerNextStore extends Store<DatepickerNextState> {
    static calendarViewMode(state: DatepickerNextState): DatepickerNextCalendarViewModeEnum;
    static calendarCurrent(state: DatepickerNextState): ThyDatepickerNextCalendarDate;
    static calendarSelected(state: DatepickerNextState): ThyDatepickerNextCalendarDate;
    static timeSelected(state: DatepickerNextState): ThyDatepickerNextTimeInfo;
    static calendarCurrentYear(state: DatepickerNextState): number;
    static valueChange(state: DatepickerNextState): any;
    static disableRules(state: DatepickerNextState): DatepickerNextDisableRules;
    constructor();
    clear(): void;
    initState(state: DatepickerNextState, payload: {
        calendarDate: ThyDatepickerNextCalendarDate;
        calendarTime: ThyDatepickerNextTimeInfo;
    }): void;
    changeViewFeatureConfig(state: DatepickerNextState, payload: DatepickerNextViewFeatureConfig): void;
    changeCalendarSelected(state: DatepickerNextState, payload: ThyDatepickerNextCalendarDate): void;
    changeCalendarViewMode(state: DatepickerNextState, payload: {
        viewMode: DatepickerNextCalendarViewModeEnum;
    }): void;
    changeCalendarCurrent(state: DatepickerNextState, payload: {
        year: number;
        month: number;
        day: number;
        viewMode: DatepickerNextCalendarViewModeEnum;
    }): void;
    valueChange(state: DatepickerNextState, payload: {
        type: DatepickerNextValueChangeTypeEnum;
    }): void;
    changeTimeSelected(state: DatepickerNextState, payload: ThyDatepickerNextTimeInfo): void;
    setDisableRules(state: DatepickerNextState, payload: DatepickerNextDisableRules): void;
}
