var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ElementRef } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var BadgeMutexType = ['thy-badge-count', 'thy-badge-dot', 'thy-badge-hollow'];
var BadgeMutexTheme = ['thy-badge-primary', 'thy-badge-warning', 'thy-badge-danger', 'thy-badge-secondary'];
var BadgeMutexSize = ['thy-badge-lg', 'thy-badge-sm'];
var ThyBadgeComponent = /** @class */ (function () {
    function ThyBadgeComponent(elementRef) {
        this.elementRef = elementRef;
        this.displayContent = '';
        this.badgeClassName = '';
        this._initialized = false;
        this.badgeClassNameMap = {
            'thy-badge-count': true,
            'thy-badge-dot': false,
            'thy-badge-hollow': false,
            'thy-badge-lg': false,
            'thy-badge-sm': false,
            'thy-badge-danger': true,
            'thy-badge-primary': false,
            'thy-badge-warning': false,
            'thy-badge-secondary': false,
            'thy-badge-sup': true,
            'thy-badge-multiple-words': false,
        };
        this.st = {
            value: '',
            isValueOfString: false,
            isSetValue: false,
            isValueKeepShow: false,
            max: {
                is: false,
                value: null
            },
            isElement: false,
            isSup: false,
            isShowBadge: true,
        };
        this.containerClassName = true;
        this.nativeElement = this.elementRef.nativeElement;
        this.st.isElement = this.nativeElement.localName === 'thy-badge';
    }
    Object.defineProperty(ThyBadgeComponent.prototype, "thyType", {
        set: function (value) {
            this.resetBadgeClassNameMap(BadgeMutexTheme);
            switch (value) {
                case 'danger':
                    this.badgeClassNameMap['thy-badge-danger'] = true;
                    break;
                case 'primary':
                    this.badgeClassNameMap['thy-badge-primary'] = true;
                    break;
                case 'warning':
                    this.badgeClassNameMap['thy-badge-warning'] = true;
                    break;
                case 'secondary':
                    this.badgeClassNameMap['thy-badge-secondary'] = true;
                    break;
                default:
                    this.badgeClassNameMap['thy-badge-danger'] = true;
                    break;
            }
            if (this._initialized) {
                this.combineBadgeClassName();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyBadgeComponent.prototype, "thyCount", {
        set: function (value) {
            this.st.value = value;
            this.st.isSetValue = true;
            if (this._initialized) {
                this.combineBadgeDisplayContent();
                this.combineBadgeClassName();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyBadgeComponent.prototype, "thyContext", {
        set: function (value) {
            this.st.value = value;
            this.st.isValueOfString = true;
            this.st.isSetValue = true;
            if (this._initialized) {
                this.combineBadgeDisplayContent();
                this.combineBadgeClassName();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyBadgeComponent.prototype, "thyMaxCount", {
        set: function (value) {
            this.st.max.is = true;
            this.st.max.value = value;
            if (this._initialized) {
                this.combineBadgeDisplayContent();
                this.combineBadgeClassName();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyBadgeComponent.prototype, "thySize", {
        set: function (value) {
            this.resetBadgeClassNameMap(BadgeMutexSize);
            switch (value) {
                case 'lg':
                    this.badgeClassNameMap['thy-badge-lg'] = true;
                    break;
                case 'sm':
                    this.badgeClassNameMap['thy-badge-sm'] = true;
                    break;
            }
            if (this._initialized) {
                this.combineBadgeClassName();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyBadgeComponent.prototype, "thyIsDot", {
        set: function (value) {
            this.resetBadgeClassNameMap(BadgeMutexType);
            this.badgeClassNameMap['thy-badge-dot'] = inputValueToBoolean(value);
            if (this._initialized) {
                this.combineBadgeClassName();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyBadgeComponent.prototype, "thyIsHollow", {
        set: function (value) {
            this.resetBadgeClassNameMap(BadgeMutexType);
            this.badgeClassNameMap['thy-badge-hollow'] = inputValueToBoolean(value);
            if (this._initialized) {
                this.combineBadgeClassName();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyBadgeComponent.prototype, "thyKeepShow", {
        set: function (value) {
            this.st.isValueKeepShow = inputValueToBoolean(value);
            if (this._initialized) {
                this.combineBadgeDisplayContent();
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyBadgeComponent.prototype.ngOnInit = function () {
        this.st.isSup = this.nativeElement.childNodes.length > 1;
        this.combineBadgeClassName();
        if (this.st.isSetValue) {
            this.combineBadgeDisplayContent();
        }
        this._initialized = true;
    };
    ThyBadgeComponent.prototype.combineBadgeClassName = function () {
        this.badgeClassNameMap['thy-badge-sup'] = this.st.isSup;
        this.explorationValueLength();
        var _badgeClassNames = [];
        for (var key in this.badgeClassNameMap) {
            if (this.badgeClassNameMap.hasOwnProperty(key)) {
                if (this.badgeClassNameMap[key]) {
                    _badgeClassNames.push(key);
                }
            }
        }
        this.badgeClassName = _badgeClassNames.join(' ');
    };
    ThyBadgeComponent.prototype.combineBadgeDisplayContent = function () {
        this.displayContent = this.st.value;
        if (this.st.value && this.st.max.is && (this.st.value > this.st.max.value)) {
            this.displayContent = this.st.max.value + "+";
        }
        if (!this.st.value && !this.st.isValueKeepShow) {
            this.st.isShowBadge = false;
        }
        else {
            this.st.isShowBadge = true;
        }
    };
    ThyBadgeComponent.prototype.explorationValueLength = function () {
        if (this.st.value && (this.st.value.toString().length > 1) && this.st.isSup) {
            this.badgeClassNameMap['thy-badge-multiple-words'] = true;
        }
    };
    ThyBadgeComponent.prototype.resetBadgeClassNameMap = function (mutexArray) {
        for (var key in this.badgeClassNameMap) {
            if (this.badgeClassNameMap.hasOwnProperty(key)) {
                if (mutexArray.includes(key)) {
                    this.badgeClassNameMap[key] = false;
                }
            }
        }
    };
    __decorate([
        HostBinding('class.thy-badge-container'),
        __metadata("design:type", Object)
    ], ThyBadgeComponent.prototype, "containerClassName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyBadgeComponent.prototype, "thyType", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyBadgeComponent.prototype, "thyCount", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyBadgeComponent.prototype, "thyContext", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyBadgeComponent.prototype, "thyMaxCount", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyBadgeComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyBadgeComponent.prototype, "thyIsDot", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyBadgeComponent.prototype, "thyIsHollow", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyBadgeComponent.prototype, "thyKeepShow", null);
    ThyBadgeComponent = __decorate([
        Component({
            selector: 'thy-badge,[thyBadge]',
            template: "<ng-container> <span *ngIf=\"st.isShowBadge\" class=\"thy-badge {{badgeClassName}}\">{{displayContent}}</span> </ng-container> <ng-content></ng-content>",
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ThyBadgeComponent);
    return ThyBadgeComponent;
}());
export { ThyBadgeComponent };
//# sourceMappingURL=badge.component.js.map