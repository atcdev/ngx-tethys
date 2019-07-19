import { DatepickerValueShowTypesEnum } from './i.datepicker';
export declare function datepickerUtilIdentificationValueType(value: any): DatepickerValueShowTypesEnum;
export declare function datepickerUtilConvertToDatepickerObject(value: any, valueType?: DatepickerValueShowTypesEnum): {
    date: any;
    with_time: any;
};
export declare function daterangepickerUtilIdentificationValueType(value: any): DatepickerValueShowTypesEnum;
export declare function daterangepickerUtilConvertToDaterangepickerObject(value: any, valueType?: DatepickerValueShowTypesEnum): any;
export declare class DatepickerUtil {
    constructor();
}
