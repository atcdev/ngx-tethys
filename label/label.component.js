var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer2, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
import { helpers } from '../util';
var labelTypeClassesMap = {
    'default': ['thy-label', 'thy-label-default'],
    'primary': ['thy-label', 'thy-label-primary'],
    'success': ['thy-label', 'thy-label-success'],
    'info': ['thy-label', 'thy-label-info'],
    'warning': ['thy-label', 'thy-label-warning'],
    'danger': ['thy-label', 'thy-label-danger']
};
var ThyLabelComponent = /** @class */ (function () {
    function ThyLabelComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._thyHasHover = false;
        this._classNameSM = false;
        this._classNameDM = false;
        this._classNameLG = false;
        this._typeClassNames = [];
        this.thyOnRemove = new EventEmitter();
        this.nativeElement = this.el.nativeElement;
    }
    Object.defineProperty(ThyLabelComponent.prototype, "thySize", {
        set: function (value) {
            this._classNameSM = (value === 'sm');
            this._classNameDM = (value === 'md');
            this._classNameLG = (value === 'lg');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyLabelComponent.prototype, "thyHasHover", {
        set: function (value) {
            this._thyHasHover = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyLabelComponent.prototype, "thyLabel", {
        set: function (value) {
            this._type = value;
            this._setClassesByType();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyLabelComponent.prototype, "thyLabelColor", {
        set: function (color) {
            this._color = color;
            this._setLabelCustomColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyLabelComponent.prototype, "thyLabelType", {
        set: function (labelType) {
            this._labelType = labelType;
            this._setClassesByType();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyLabelComponent.prototype, "thyBeforeIcon", {
        set: function (icon) {
            this._icon = icon;
            if (this._icon) {
                var iconPrefix = this.thyIconPrefix || 'wtf';
                this.beforeIconClass = [iconPrefix, "" + this._icon];
            }
            else {
                this.beforeIconClass = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyLabelComponent.prototype, "thyAfterIcon", {
        set: function (icon) {
            this._icon = icon;
            if (this._icon) {
                var iconPrefix = this.thyIconPrefix || 'wtf';
                this.afterIconClass = [iconPrefix, "" + this._icon];
            }
            else {
                this.afterIconClass = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyLabelComponent.prototype._setClassesByType = function () {
        var _this = this;
        var classNames = null;
        if (labelTypeClassesMap[this._type]) {
            classNames = labelTypeClassesMap[this._type];
        }
        else {
            classNames = ['thy-label'];
            classNames.push("thy-label-" + this._type);
        }
        if (this._labelType) {
            classNames = classNames.concat(["thy-label-" + this._labelType]);
        }
        // remove old classes
        this._typeClassNames.forEach(function (className) {
            _this._removeClass(className);
        });
        // add new classes
        this._typeClassNames = classNames;
        this._typeClassNames.forEach(function (className) {
            _this._addClass(className);
        });
    };
    ThyLabelComponent.prototype._setLabelCustomColor = function () {
        if (this._color) {
            if (this._type.indexOf('emboss') > -1) {
                if (this._type === 'emboss-status') {
                    this.el.nativeElement.style.color = '#333';
                }
                else {
                    this.el.nativeElement.style.color = this._color;
                }
                this.el.nativeElement.style.backgroundColor = helpers.hexToRgb(this._color, 0.1);
            }
            else if (this._type.indexOf('outline') > -1) {
                this.el.nativeElement.style.color = this._color;
                this.el.nativeElement.style.borderColor = this._color;
            }
            else {
                this.el.nativeElement.style.backgroundColor = this._color;
            }
        }
    };
    ThyLabelComponent.prototype._addClass = function (className) {
        this.renderer.addClass(this.nativeElement, className);
    };
    ThyLabelComponent.prototype._removeClass = function (className) {
        this.renderer.removeClass(this.nativeElement, className);
    };
    ThyLabelComponent.prototype.remove = function () {
        this.thyOnRemove.emit();
    };
    __decorate([
        HostBinding('class.label-has-hover'),
        __metadata("design:type", Object)
    ], ThyLabelComponent.prototype, "_thyHasHover", void 0);
    __decorate([
        HostBinding('class.thy-label--sm'),
        __metadata("design:type", Object)
    ], ThyLabelComponent.prototype, "_classNameSM", void 0);
    __decorate([
        HostBinding('class.thy-label--md'),
        __metadata("design:type", Object)
    ], ThyLabelComponent.prototype, "_classNameDM", void 0);
    __decorate([
        HostBinding('class.thy-label--lg'),
        __metadata("design:type", Object)
    ], ThyLabelComponent.prototype, "_classNameLG", void 0);
    __decorate([
        Input('thySize'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyLabelComponent.prototype, "thySize", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyLabelComponent.prototype, "thyOnRemove", void 0);
    __decorate([
        Input('thyHasHover'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyLabelComponent.prototype, "thyHasHover", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyLabelComponent.prototype, "thyLabel", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyLabelComponent.prototype, "thyLabelColor", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyLabelComponent.prototype, "thyLabelType", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyLabelComponent.prototype, "thyIconPrefix", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyLabelComponent.prototype, "thyBeforeIcon", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyLabelComponent.prototype, "thyAfterIcon", null);
    ThyLabelComponent = __decorate([
        Component({
            selector: '[thyLabel]',
            template: "<i class=\"mr-1\" [ngClass]=\"beforeIconClass\" [ngStyle]=\"{'color': _color}\" *ngIf=\"beforeIconClass\"></i><ng-content></ng-content> <ng-content></ng-content><i class=\"ml-1\" [ngClass]=\"afterIconClass\" *ngIf=\"afterIconClass\" (click)=\"remove()\"></i>"
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], ThyLabelComponent);
    return ThyLabelComponent;
}());
export { ThyLabelComponent };
//# sourceMappingURL=label.component.js.map