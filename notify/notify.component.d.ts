import { OnInit, OnDestroy } from '@angular/core';
import { ThyNotifyOption } from './notify-option.interface';
import { ThyNotifyService } from './notify.service';
export declare class ThyNotifyComponent implements OnInit, OnDestroy {
    private notifyService;
    className: boolean;
    flyInOut: string;
    option: ThyNotifyOption;
    notifyIconType: {};
    notifyIconClass: {};
    extendContentClass: boolean;
    closeTimer: any;
    isShowDetail: boolean;
    thyOption: any;
    constructor(notifyService: ThyNotifyService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    extendContent(): void;
    showDetailToggle(): void;
    closeNotify(): void;
    mouseenter(): void;
    mouseleave(): void;
    private _creatCloseTimer;
    private _clearCloseTimer;
}
