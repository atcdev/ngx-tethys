import { OnInit } from '@angular/core';
import { ThyFormDirective } from '../form.directive';
export declare class ThyFormGroupErrorComponent implements OnInit {
    private thyParentForm;
    errors: string[];
    thyShowFirst: boolean;
    thyErrors: string[];
    readonly _isFormGroup: boolean;
    isHorizontal: boolean;
    constructor(thyParentForm: ThyFormDirective);
    ngOnInit(): void;
}
