var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
import { UpdateHostClassService } from '../shared';
var btnTypeClassesMap = {
    'primary': ['btn', 'btn-primary'],
    'secondary': ['btn', 'btn-primary', 'btn-md'],
    'outline-primary': ['btn', 'btn-outline-primary'],
    'outline-default': ['btn', 'btn-outline-default'],
    'danger': ['btn', 'btn-danger'],
    'link': ['btn', 'btn-link'],
    'link-info': ['btn', 'btn-link', 'btn-link-info'],
    'link-secondary': ['btn', 'btn-link', 'btn-link-info'],
    'link-danger-weak': ['btn', 'btn-link', 'btn-link-danger-weak'],
    'link-danger': ['btn', 'btn-link', 'btn-link-danger'],
    'link-success': ['btn', 'btn-link', 'btn-link-success'] // 成功按钮
};
var ThyButtonComponent = /** @class */ (function () {
    function ThyButtonComponent(elementRef, renderer, updateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.updateHostClassService = updateHostClassService;
        this._initialized = false;
        // 圆角方形
        this._isRadiusSquare = false;
        this._nativeElement = this.elementRef.nativeElement;
        this.updateHostClassService.initializeElement(this._nativeElement);
    }
    ThyButtonComponent.prototype._setBtnType = function (value) {
        if (value) {
            if (value.includes('-square')) {
                this._type = value.replace('-square', '');
                this._isRadiusSquare = true;
            }
            else {
                this._type = value;
            }
            if (this._initialized) {
                this._setClasses();
            }
        }
    };
    Object.defineProperty(ThyButtonComponent.prototype, "thyButton", {
        set: function (value) {
            this._setBtnType(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonComponent.prototype, "thyType", {
        set: function (value) {
            this._setBtnType(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonComponent.prototype, "thyLoading", {
        set: function (value) {
            var newLoading = inputValueToBoolean(value);
            // from false to true
            if (!this._loading && newLoading) {
                this._loading = newLoading;
                this._originalText = this._nativeElement.innerText;
                this._setLoadingStatus();
            }
            else {
                this._loading = newLoading;
                this._setLoadingStatus();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonComponent.prototype, "thyLoadingText", {
        set: function (value) {
            if (this._loadingText !== value) {
                this._loadingText = value;
                if (this._loading) {
                    this.renderer.setProperty(this._nativeElement, 'innerText', this._loadingText);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonComponent.prototype, "thySize", {
        set: function (size) {
            this._size = size;
            if (this._initialized) {
                this._setClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonComponent.prototype, "thyIcon", {
        set: function (icon) {
            this._icon = icon;
            if (this._icon) {
                var classes = this._icon.split(' ');
                if (classes.length === 1) {
                    classes.unshift('wtf');
                }
                this._iconClass = classes;
            }
            else {
                this._iconClass = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyButtonComponent.prototype, "thySquare", {
        set: function (value) {
            this._isRadiusSquare = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    ThyButtonComponent.prototype._setLoadingStatus = function () {
        // let disabled = false;
        var innerText;
        if (this._loading) {
            // disabled = true;
            innerText = this._loadingText ? this._loadingText : null;
        }
        else {
            // disabled = false;
            innerText = this._originalText ? this._originalText : null;
        }
        // this.renderer.setProperty(this._nativeElement, 'disabled', disabled);
        this._setClasses();
        if (innerText) {
            this.renderer.setProperty(this._nativeElement, 'innerText', innerText);
        }
    };
    ThyButtonComponent.prototype._setClasses = function () {
        var classNames = null;
        if (btnTypeClassesMap[this._type]) {
            classNames = btnTypeClassesMap[this._type].slice();
        }
        else {
            classNames = ['btn'];
            if (this._type) {
                classNames.push("btn-" + this._type);
            }
            // console.error(`button type (${this._type}) is not support`);
        }
        if (this._size) {
            classNames.push("btn-" + this._size);
        }
        if (this._icon) {
            classNames.push('btn-has-icon');
        }
        if (this._isRadiusSquare) {
            classNames.push('btn-square');
        }
        if (this._loading) {
            classNames.push('loading');
        }
        this.updateHostClassService.updateClass(classNames);
    };
    ThyButtonComponent.prototype.ngOnInit = function () {
        this._setClasses();
        this._initialized = true;
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonComponent.prototype, "thyButton", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonComponent.prototype, "thyType", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyButtonComponent.prototype, "thyLoading", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonComponent.prototype, "thyLoadingText", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyButtonComponent.prototype, "thyIcon", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyButtonComponent.prototype, "thySquare", null);
    ThyButtonComponent = __decorate([
        Component({
            selector: '[thy-button],[thyButton]',
            template: "<i [ngClass]=\"_iconClass\" *ngIf=\"_iconClass\"></i><ng-content></ng-content>",
            providers: [
                UpdateHostClassService
            ],
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            UpdateHostClassService])
    ], ThyButtonComponent);
    return ThyButtonComponent;
}());
export { ThyButtonComponent };
//# sourceMappingURL=button.component.js.map