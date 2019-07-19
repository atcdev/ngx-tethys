import { ThyDatepickerConfig } from './datepicker.config';
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
export declare class ThyDaterangepickerConfig extends ThyDatepickerConfig {
    displayMonths: number;
}
