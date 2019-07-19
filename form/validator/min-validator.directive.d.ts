import { Validator, AbstractControl } from '@angular/forms';
export declare class ThyMinDirective implements Validator {
    private _validator;
    min: string;
    validate(control: AbstractControl): {
        [key: string]: any;
    };
}
