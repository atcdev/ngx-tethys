export interface DatepickerValueEntry {
    date: Date | '' | number | any;
    with_time: boolean | number;
}
export interface DaterangepickerValueEntry {
    begin: {
        date: Date | '' | number | any;
        with_time: boolean | number;
    };
    end: {
        date: Date | '' | number | any;
        with_time: boolean | number;
    };
}
export interface DatepickerInitialState {
    value: DatepickerValueEntry;
    changeValue: Function;
}
export declare enum DatepickerValueShowTypesEnum {
    dateTime = 0,
    dateTimeLong = 1,
    dateObject = 2,
    datepickerObject = 3,
    datepickerTimeObject = 4,
    datepickerTimeLongObject = 5,
    datepickerNullValue = 6,
    nullValue = 7,
    daterangepickerObject = 8,
    daterangepickerTime = 9,
    daterangepickerTimeObject = 10,
    daterangepickerNullValue = 11,
    daterangepickerNullValueObject = 12
}
export declare enum DatepickerFormatRules {
    default = "yyyy-MM-dd",
    short = "yyyy-MM-dd",
    full = "yyyy-MM-dd HH:mm"
}
