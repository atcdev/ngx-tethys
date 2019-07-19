var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ThyFormValidatorLoader, ERROR_VALUE_REPLACE_REGEX } from './form-validator-loader';
var ThyFormValidatorService = /** @class */ (function () {
    function ThyFormValidatorService(thyFormValidateLoader) {
        this.thyFormValidateLoader = thyFormValidateLoader;
        this.errors = [];
        // 记录所有元素的验证信息
        this.validations = {};
    }
    ThyFormValidatorService.prototype._getElement = function (name) {
        var element = this._formElement[name];
        if (element) {
            return element;
        }
        else {
            return this._formElement.querySelector("[name='" + name + "']");
        }
    };
    ThyFormValidatorService.prototype._clearElementError = function (name) {
        if (this.validations[name] && this.validations[name].hasError) {
            this.validations[name].hasError = false;
            this.validations[name].errorMessages = [];
            this.thyFormValidateLoader.removeError(this._getElement(name));
        }
    };
    ThyFormValidatorService.prototype._tryGetValidation = function (name) {
        if (!this.validations[name]) {
            this._initializeFormControlValidation(name, this._ngForm.controls[name]);
        }
        return this.validations[name];
    };
    ThyFormValidatorService.prototype._addError = function (message) {
        this.errors.unshift(message);
    };
    ThyFormValidatorService.prototype._clearErrors = function () {
        this.errors = [];
    };
    ThyFormValidatorService.prototype._initializeFormControlValidation = function (name, control) {
        var _this = this;
        this.validations[name] = {
            hasError: false,
            errorMessages: []
        };
        control.valueChanges.subscribe(function () {
            _this._clearElementError(name);
            _this._clearErrors();
        });
    };
    ThyFormValidatorService.prototype._restFormControlValidation = function (name) {
        var validation = this.validations[name];
        if (validation) {
            validation.hasError = false;
            validation.errorMessages = [];
        }
    };
    ThyFormValidatorService.prototype._formatValidationMessage = function (name, message) {
        var control = this._ngForm.controls[name];
        if (control) {
            return message.replace(ERROR_VALUE_REPLACE_REGEX, function (tag, key) {
                if (key) {
                    return (control.errors[key][key] ||
                        control.errors[key].requiredLength);
                }
            });
        }
        else {
            return message;
        }
    };
    ThyFormValidatorService.prototype._getValidationMessage = function (name, validationError) {
        var message = null;
        if (this._config &&
            this._config.validationMessages &&
            this._config.validationMessages[name] &&
            this._config.validationMessages[name][validationError]) {
            message = this._config.validationMessages[name][validationError];
        }
        else {
            message = this.thyFormValidateLoader.getErrorMessage(name, validationError);
        }
        return this._formatValidationMessage(name, message);
    };
    ThyFormValidatorService.prototype._getValidationMessages = function (name, validationErrors) {
        var messages = [];
        for (var validationError in validationErrors) {
            if (validationErrors.hasOwnProperty(validationError)) {
                messages.push(this._getValidationMessage(name, validationError));
            }
        }
        return messages;
    };
    ThyFormValidatorService.prototype._setControlValidationError = function (name, errorMessages) {
        var validation = this._tryGetValidation(name);
        validation.errorMessages = errorMessages;
        validation.hasError = true;
        this.thyFormValidateLoader.showError(this._getElement(name), errorMessages);
    };
    ThyFormValidatorService.prototype.initialize = function (ngForm, formElement) {
        this._ngForm = ngForm;
        this._formElement = formElement;
    };
    ThyFormValidatorService.prototype.setValidatorConfig = function (config) {
        this._config = config;
    };
    ThyFormValidatorService.prototype.validateControl = function (name) {
        this._clearElementError(name);
        var control = this._ngForm.controls[name];
        if (control && control.invalid) {
            var errorMessages = this._getValidationMessages(name, control.errors);
            this._setControlValidationError(name, errorMessages);
        }
    };
    ThyFormValidatorService.prototype.validateControls = function () {
        var _this = this;
        // 主要是 无法检测到 ngForm 的 controls 的变化，或者是我没有找到
        // 验证的时候循环 ngForm 的 controls 验证
        // 发现没有 validation 初始化一个，已经存在不会重新初始化，保存缓存数据
        for (var name_1 in this._ngForm.controls) {
            if (this._ngForm.controls.hasOwnProperty(name_1)) {
                this._tryGetValidation(name_1);
                this.validateControl(name_1);
            }
        }
        // 移除已经不存在的 validation
        var names = Object.keys(this.validations);
        names.forEach(function (name) {
            if (!_this._ngForm.controls[name]) {
                delete _this.validations[name];
            }
        });
    };
    ThyFormValidatorService.prototype.addError = function (message) {
        this._addError(message);
    };
    ThyFormValidatorService.prototype.validate = function ($event) {
        this._ngForm.onSubmit($event);
        this.validateControls();
        return this._ngForm.valid;
    };
    ThyFormValidatorService.prototype.reset = function () {
        this._ngForm.reset();
        for (var name_2 in this.validations) {
            if (this.validations.hasOwnProperty(name_2)) {
                this._restFormControlValidation(name_2);
                this._clearElementError(name_2);
            }
        }
    };
    ThyFormValidatorService.prototype.setElementErrorMessage = function (name, message) {
        this._clearElementError(name);
        this._setControlValidationError(name, [message]);
    };
    ThyFormValidatorService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ThyFormValidatorLoader])
    ], ThyFormValidatorService);
    return ThyFormValidatorService;
}());
export { ThyFormValidatorService };
//# sourceMappingURL=form-validator.service.js.map