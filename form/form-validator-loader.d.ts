import { ThyFormValidatorGlobalConfig, ThyFormValidationMessages } from './form.class';
import { Dictionary } from '../typings';
import { ValidationErrors } from '@angular/forms';
export declare const ERROR_VALUE_REPLACE_REGEX: RegExp;
export declare class ThyFormValidatorLoader {
    private config;
    private _getDefaultValidationMessage;
    constructor(config: ThyFormValidatorGlobalConfig);
    readonly validationMessages: Dictionary<Dictionary<string>>;
    getErrorMessage(name: string, key: string): any;
    getErrorMessages(name: string, validationErrors: ValidationErrors): any[];
    defaultShowError(element: any, errorMessages: string[]): void;
    defaultRemoveError(element: HTMLElement): void;
    removeError(element: HTMLElement): void;
    showError(element: HTMLElement, errorMessages: string[]): void;
    addValidationMessages(messages: ThyFormValidationMessages): void;
    setGlobalValidationMessages(validationMessages: Dictionary<string>): void;
}
