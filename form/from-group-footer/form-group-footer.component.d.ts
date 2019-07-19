import { OnInit } from '@angular/core';
import { ThyFormDirective } from '../form.directive';
export declare class ThyFormGroupFooterComponent implements OnInit {
    private thyParentForm;
    _isFormGroup: boolean;
    isHorizontal: boolean;
    constructor(thyParentForm: ThyFormDirective);
    ngOnInit(): void;
}
