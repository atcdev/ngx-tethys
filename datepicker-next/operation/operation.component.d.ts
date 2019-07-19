import { OnInit } from '@angular/core';
import { ThyDatepickerNextContainerComponent } from '../datepicker-container.component';
export declare class ThyDatepickerNextOperationComponent implements OnInit {
    private parentComponent;
    stylesClass: string;
    constructor(parentComponent: ThyDatepickerNextContainerComponent);
    ngOnInit(): void;
    ok(): void;
    clear(): void;
}
