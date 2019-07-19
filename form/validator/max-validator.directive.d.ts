import { Validator, AbstractControl } from '@angular/forms';
export declare class ThyMaxDirective implements Validator {
    private _validator;
    max: string;
    validate(control: AbstractControl): {
        [key: string]: any;
    };
}
