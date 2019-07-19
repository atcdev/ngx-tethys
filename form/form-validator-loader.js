var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable, Optional } from '@angular/core';
import { THY_VALIDATOR_CONFIG } from './form.class';
import { helpers } from '../util';
export var ERROR_VALUE_REPLACE_REGEX = /\{(.+?)\}/g;
var INVALID_CLASS = 'is-invalid';
var INVALID_FEEDBACK_CLASS = 'invalid-feedback';
var defaultValidatorConfig = {
    showElementError: true,
    removeElementError: true,
    validationMessages: {}
};
var globalValidationMessages = {
    required: '该选项不能为空',
    maxlength: '该选项输入值长度不能大于{maxlength}',
    minlength: '该选项输入值长度不能小于{minlength}',
    thyUniqueCheck: '输入值已经存在，请重新输入',
    email: '输入邮件的格式不正确',
    repeat: '两次输入不一致',
    pattern: '该选项输入格式不正确',
    number: '必须输入数字',
    url: '输入URL格式不正确',
    max: '该选项输入值不能大于{max}',
    min: '该选项输入值不能小于{min}'
};
var ThyFormValidatorLoader = /** @class */ (function () {
    function ThyFormValidatorLoader(config) {
        this.config = Object.assign({}, defaultValidatorConfig, config);
    }
    ThyFormValidatorLoader.prototype._getDefaultValidationMessage = function (key) {
        if (this.config.globalValidationMessages &&
            this.config.globalValidationMessages[key]) {
            return this.config.globalValidationMessages[key];
        }
        else {
            return globalValidationMessages[key];
        }
    };
    Object.defineProperty(ThyFormValidatorLoader.prototype, "validationMessages", {
        get: function () {
            return this.config.validationMessages;
        },
        enumerable: true,
        configurable: true
    });
    ThyFormValidatorLoader.prototype.getErrorMessage = function (name, key) {
        if (this.validationMessages[name] &&
            this.validationMessages[name][key]) {
            return this.validationMessages[name][key];
        }
        else {
            return this._getDefaultValidationMessage(key);
        }
    };
    ThyFormValidatorLoader.prototype.getErrorMessages = function (name, validationErrors) {
        var messages = [];
        for (var validationError in validationErrors) {
            if (validationErrors.hasOwnProperty(validationError)) {
                messages.push(this.getErrorMessage(name, validationError));
            }
        }
        return messages;
    };
    ThyFormValidatorLoader.prototype.defaultShowError = function (element, errorMessages) {
        if (element && element.parentElement) {
            var documentFrag = document.createDocumentFragment();
            var divNode = document.createElement('DIV');
            var textNode = document.createTextNode(errorMessages[0]);
            divNode.appendChild(textNode);
            divNode.setAttribute('class', INVALID_FEEDBACK_CLASS);
            documentFrag.appendChild(divNode);
            element.parentElement.append(documentFrag);
        }
    };
    ThyFormValidatorLoader.prototype.defaultRemoveError = function (element) {
        if (element && element.parentElement) {
            var invalidFeedback = element.parentElement.querySelector('.invalid-feedback');
            element.parentElement.removeChild(invalidFeedback);
        }
    };
    ThyFormValidatorLoader.prototype.removeError = function (element) {
        element.classList.remove(INVALID_CLASS);
        if (helpers.isFunction(this.config.removeElementError)) {
            this.config.showElementError(element);
        }
        else if (this.config.showElementError) {
            this.defaultRemoveError(element);
        }
        else {
            // do nothings
        }
    };
    ThyFormValidatorLoader.prototype.showError = function (element, errorMessages) {
        element.classList.add(INVALID_CLASS);
        if (helpers.isFunction(this.config.showElementError)) {
            this.config.showElementError(element, errorMessages);
        }
        else if (this.config.showElementError) {
            this.defaultShowError(element, errorMessages);
        }
        else {
            // do nothings
        }
    };
    ThyFormValidatorLoader.prototype.addValidationMessages = function (messages) {
        Object.assign(this.config.validationMessages, messages);
    };
    ThyFormValidatorLoader.prototype.setGlobalValidationMessages = function (validationMessages) {
        this.config.globalValidationMessages = validationMessages;
    };
    ThyFormValidatorLoader = __decorate([
        Injectable(),
        __param(0, Optional()),
        __param(0, Inject(THY_VALIDATOR_CONFIG)),
        __metadata("design:paramtypes", [Object])
    ], ThyFormValidatorLoader);
    return ThyFormValidatorLoader;
}());
export { ThyFormValidatorLoader };
//# sourceMappingURL=form-validator-loader.js.map