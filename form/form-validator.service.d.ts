import { NgForm } from '@angular/forms';
import { ThyFormValidatorLoader } from './form-validator-loader';
import { ThyFormValidatorConfig } from './form.class';
import { Dictionary } from '../typings';
export declare class ThyFormValidatorService {
    private thyFormValidateLoader;
    private _ngForm;
    private _formElement;
    private _config;
    errors: string[];
    validations: Dictionary<{
        hasError?: boolean;
        errorMessages?: string[];
    }>;
    private _getElement;
    private _clearElementError;
    private _tryGetValidation;
    private _addError;
    private _clearErrors;
    private _initializeFormControlValidation;
    private _restFormControlValidation;
    private _formatValidationMessage;
    private _getValidationMessage;
    private _getValidationMessages;
    _setControlValidationError(name: string, errorMessages: string[]): void;
    constructor(thyFormValidateLoader: ThyFormValidatorLoader);
    initialize(ngForm: NgForm, formElement: HTMLElement): void;
    setValidatorConfig(config: ThyFormValidatorConfig): void;
    validateControl(name: string): void;
    validateControls(): void;
    addError(message: string): void;
    validate($event?: Event): boolean;
    reset(): void;
    setElementErrorMessage(name: string, message: string): void;
}