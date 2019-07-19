import { OnInit } from '@angular/core';
import { ThyDatepickerNextStore } from '../datepicker-next.store';
import { ThyDatepickerNextContainerComponent } from '../datepicker-container.component';
declare enum ThyDatepickerNextShortcutTypeEnum {
    today = "today",
    tomorrow = "tomorrow",
    aWeekLater = "aWeekLater"
}
export declare class ThyDatepickerNextShortcutComponent implements OnInit {
    store: ThyDatepickerNextStore;
    private parentComponent;
    stylesClass: string;
    shortcutTypeEnum: typeof ThyDatepickerNextShortcutTypeEnum;
    constructor(store: ThyDatepickerNextStore, parentComponent: ThyDatepickerNextContainerComponent);
    ngOnInit(): void;
    shortcutClick(type: ThyDatepickerNextShortcutTypeEnum): void;
}
export {};
