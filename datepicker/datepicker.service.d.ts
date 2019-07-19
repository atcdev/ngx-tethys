import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
export declare class ThyDatepickerService {
    localeService: BsLocaleService;
    dataPipe: DatePipe;
    locale: string;
    locales: string[];
    localeRef: any;
    storeType: 'date' | 'range';
    store: {
        originValue?: any;
        originValueType?: any;
        originWithTime?: boolean;
        value?: any;
        withTime?: boolean;
    };
    constructor(localeService: BsLocaleService);
    initLocale(value?: string): void;
    initValueData(value: any, isRefreshType?: boolean): void;
}
