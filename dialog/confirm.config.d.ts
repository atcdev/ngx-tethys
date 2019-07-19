import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
export interface ThyConfirmConfig {
    title?: string;
    content: string;
    okText?: string;
    okType?: 'primary' | 'danger';
    okLoadingText?: string;
    onOk?: () => Observable<boolean> | void;
    cancelText?: string;
    onCancel?: void;
}
export declare const THY_CONFIRM_DEFAULT_OPTIONS: InjectionToken<ThyConfirmConfig>;
export declare const THY_CONFIRM_DEFAULT_OPTIONS_PROVIDER: {
    provide: InjectionToken<ThyConfirmConfig>;
    useValue: {
        title: string;
        okText: string;
        okType: string;
        cancelText: string;
    };
};
