import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatepickerValueEntry } from './i.datepicker';
export declare class ThyDatepickerFormatPipe implements PipeTransform {
    dataPipe: DatePipe;
    transform(value: DatepickerValueEntry, exponent?: string): string;
}
