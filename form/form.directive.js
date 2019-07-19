var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Renderer2, HostBinding, NgZone } from '@angular/core';
import { UpdateHostClassService } from '../shared';
import { NgForm } from '@angular/forms';
import { keycodes } from '../util';
import { ThyFormValidatorService } from './form-validator.service';
// 1. submit 按 Enter 键提交, Textare 除外，需要按 Ctrl | Command + Enter 提交
// 2. alwaysSubmit 不管是哪个元素 按 Enter 键都提交
// 3. forbidSubmit Enter 键禁止提交
// 默认 submit
export var ThyEnterKeyMode;
(function (ThyEnterKeyMode) {
    ThyEnterKeyMode["submit"] = "submit";
    ThyEnterKeyMode["alwaysSubmit"] = "alwaysSubmit";
    ThyEnterKeyMode["forbidSubmit"] = "forbidSubmit";
})(ThyEnterKeyMode || (ThyEnterKeyMode = {}));
var ThyFormDirective = /** @class */ (function () {
    function ThyFormDirective(ngForm, elementRef, renderer, ngZone, updateHostClassService, validator) {
        this.ngForm = ngForm;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.updateHostClassService = updateHostClassService;
        this.validator = validator;
        this._layout = 'horizontal';
        this.wasValidated = false;
        this.updateHostClassService.initializeElement(this.elementRef.nativeElement);
    }
    Object.defineProperty(ThyFormDirective.prototype, "thyLayout", {
        get: function () {
            return this._layout;
        },
        set: function (value) {
            this._layout = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormDirective.prototype, "isHorizontal", {
        get: function () {
            return this._layout === 'horizontal';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFormDirective.prototype, "thyFormValidatorConfig", {
        set: function (config) {
            this.validator.setValidatorConfig(config);
        },
        enumerable: true,
        configurable: true
    });
    ThyFormDirective.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        this.ngZone.runOutsideAngular(function () {
            _this._unsubscribe = _this.renderer.listen(_this.elementRef.nativeElement, 'keydown', _this.onKeydown.bind(_this));
        });
        this.updateHostClassService.updateClassByMap((_a = {
                'thy-form': true
            },
            _a["thy-form-" + this.thyLayout] = true,
            _a));
        this.validator.initialize(this.ngForm, this.elementRef.nativeElement);
    };
    ThyFormDirective.prototype.submit = function ($event) {
        if (this.validator.validate($event)) {
            this.onSubmitSuccess($event);
        }
        else {
            // this.wasValidated = true;
        }
    };
    ThyFormDirective.prototype.submitRunInZone = function ($event) {
        var _this = this;
        this.ngZone.run(function () {
            _this.submit($event);
        });
    };
    ThyFormDirective.prototype.onKeydown = function ($event) {
        var currentInput = document.activeElement;
        var key = $event.which || $event.keyCode;
        if (key === keycodes.ENTER && currentInput.tagName) {
            if (!this.thyEnterKeyMode ||
                this.thyEnterKeyMode === ThyEnterKeyMode.submit) {
                // TEXTAREA Ctrl + Enter 或者 Command + Enter 阻止默认行为并提交
                if (currentInput.tagName === 'TEXTAREA') {
                    if ($event.ctrlKey || $event.metaKey) {
                        $event.preventDefault();
                        this.submitRunInZone($event);
                    }
                }
                else {
                    // 不是 TEXTAREA Enter 阻止默认行为并提交
                    $event.preventDefault();
                    this.submitRunInZone($event);
                }
            }
            else if (this.thyEnterKeyMode === ThyEnterKeyMode.alwaysSubmit) {
                $event.preventDefault();
                this.submitRunInZone($event);
            }
            else {
                // do nothing
            }
        }
    };
    ThyFormDirective.prototype.ngOnDestroy = function () {
        if (this._unsubscribe) {
            this._unsubscribe();
            this._unsubscribe = null;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyFormDirective.prototype, "thyLayout", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyFormDirective.prototype, "thyEnterKeyMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyFormDirective.prototype, "thyFormValidatorConfig", null);
    __decorate([
        HostBinding('class.was-validated'),
        __metadata("design:type", Object)
    ], ThyFormDirective.prototype, "wasValidated", void 0);
    ThyFormDirective = __decorate([
        Directive({
            selector: '[thyForm],[thy-form]',
            providers: [UpdateHostClassService, ThyFormValidatorService],
            exportAs: 'thyForm'
        }),
        __metadata("design:paramtypes", [NgForm,
            ElementRef,
            Renderer2,
            NgZone,
            UpdateHostClassService,
            ThyFormValidatorService])
    ], ThyFormDirective);
    return ThyFormDirective;
}());
export { ThyFormDirective };
//# sourceMappingURL=form.directive.js.map