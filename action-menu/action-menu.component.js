var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, Input, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
var ThyActionMenuComponent = /** @class */ (function () {
    function ThyActionMenuComponent() {
        this.className = true;
        this.themeClassName = false;
        this.styleWidth = '';
    }
    Object.defineProperty(ThyActionMenuComponent.prototype, "thyTheme", {
        set: function (value) {
            this.themeClassName = value === 'group';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyActionMenuComponent.prototype, "thyWidth", {
        set: function (value) {
            this.styleWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.action-menu'),
        __metadata("design:type", Object)
    ], ThyActionMenuComponent.prototype, "className", void 0);
    __decorate([
        HostBinding('class.action-menu--group'),
        __metadata("design:type", Object)
    ], ThyActionMenuComponent.prototype, "themeClassName", void 0);
    __decorate([
        HostBinding('style.width'),
        __metadata("design:type", Object)
    ], ThyActionMenuComponent.prototype, "styleWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyActionMenuComponent.prototype, "thyTheme", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyActionMenuComponent.prototype, "thyWidth", null);
    ThyActionMenuComponent = __decorate([
        Component({
            selector: 'thy-action-menu',
            template: "<ng-content></ng-content>",
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuComponent);
    return ThyActionMenuComponent;
}());
export { ThyActionMenuComponent };
var ThyActionMenuItemDirective = /** @class */ (function () {
    function ThyActionMenuItemDirective() {
        this.className = true;
        this.disabled = false;
    }
    Object.defineProperty(ThyActionMenuItemDirective.prototype, "thyDisabled", {
        set: function (value) {
            this.disabled = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    ThyActionMenuItemDirective.prototype.onClick = function (event) {
        if (this.disabled) {
            event.stopPropagation();
            event.preventDefault();
        }
    };
    __decorate([
        HostBinding('class.action-menu-item'),
        __metadata("design:type", Object)
    ], ThyActionMenuItemDirective.prototype, "className", void 0);
    __decorate([
        HostBinding('class.action-menu-item--disabled'),
        __metadata("design:type", Object)
    ], ThyActionMenuItemDirective.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyActionMenuItemDirective.prototype, "thyDisabled", null);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ThyActionMenuItemDirective.prototype, "onClick", null);
    ThyActionMenuItemDirective = __decorate([
        Directive({
            selector: '[thyActionMenuItem]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuItemDirective);
    return ThyActionMenuItemDirective;
}());
export { ThyActionMenuItemDirective };
var ThyActionMenuItemIconDirective = /** @class */ (function () {
    function ThyActionMenuItemIconDirective() {
        this.className = true;
    }
    __decorate([
        HostBinding('class.icon'),
        __metadata("design:type", Object)
    ], ThyActionMenuItemIconDirective.prototype, "className", void 0);
    ThyActionMenuItemIconDirective = __decorate([
        Directive({
            selector: '[thyActionMenuItemIcon]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuItemIconDirective);
    return ThyActionMenuItemIconDirective;
}());
export { ThyActionMenuItemIconDirective };
var ThyActionMenuItemNameDirective = /** @class */ (function () {
    function ThyActionMenuItemNameDirective() {
        this.className = true;
    }
    __decorate([
        HostBinding('class.name'),
        __metadata("design:type", Object)
    ], ThyActionMenuItemNameDirective.prototype, "className", void 0);
    ThyActionMenuItemNameDirective = __decorate([
        Directive({
            selector: '[thyActionMenuItemName]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuItemNameDirective);
    return ThyActionMenuItemNameDirective;
}());
export { ThyActionMenuItemNameDirective };
var ThyActionMenuItemMetaDirective = /** @class */ (function () {
    function ThyActionMenuItemMetaDirective() {
        this.className = true;
    }
    __decorate([
        HostBinding('class.meta'),
        __metadata("design:type", Object)
    ], ThyActionMenuItemMetaDirective.prototype, "className", void 0);
    ThyActionMenuItemMetaDirective = __decorate([
        Directive({
            selector: '[thyActionMenuItemMeta]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuItemMetaDirective);
    return ThyActionMenuItemMetaDirective;
}());
export { ThyActionMenuItemMetaDirective };
var ThyActionMenuItemInfoDirective = /** @class */ (function () {
    function ThyActionMenuItemInfoDirective() {
        this.className = true;
    }
    __decorate([
        HostBinding('class.info'),
        __metadata("design:type", Object)
    ], ThyActionMenuItemInfoDirective.prototype, "className", void 0);
    ThyActionMenuItemInfoDirective = __decorate([
        Directive({
            selector: '[thyActionMenuItemInfo]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuItemInfoDirective);
    return ThyActionMenuItemInfoDirective;
}());
export { ThyActionMenuItemInfoDirective };
var ThyActionMenuItemExtendIconDirective = /** @class */ (function () {
    function ThyActionMenuItemExtendIconDirective() {
        this.className = true;
    }
    __decorate([
        HostBinding('class.extend-icon'),
        __metadata("design:type", Object)
    ], ThyActionMenuItemExtendIconDirective.prototype, "className", void 0);
    ThyActionMenuItemExtendIconDirective = __decorate([
        Directive({
            selector: '[thyActionMenuItemExtendIcon]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuItemExtendIconDirective);
    return ThyActionMenuItemExtendIconDirective;
}());
export { ThyActionMenuItemExtendIconDirective };
var ThyActionMenuSubItemDirective = /** @class */ (function () {
    function ThyActionMenuSubItemDirective() {
        this.className = true;
    }
    __decorate([
        HostBinding('class.action-menu-sub-item'),
        __metadata("design:type", Object)
    ], ThyActionMenuSubItemDirective.prototype, "className", void 0);
    ThyActionMenuSubItemDirective = __decorate([
        Directive({
            selector: '[thyActionMenuSubItem]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuSubItemDirective);
    return ThyActionMenuSubItemDirective;
}());
export { ThyActionMenuSubItemDirective };
var ThyActionMenuDividerComponent = /** @class */ (function () {
    function ThyActionMenuDividerComponent() {
        this.className = true;
    }
    Object.defineProperty(ThyActionMenuDividerComponent.prototype, "thyTitle", {
        set: function (value) {
            this.title = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.action-menu-divider'),
        __metadata("design:type", Object)
    ], ThyActionMenuDividerComponent.prototype, "className", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyActionMenuDividerComponent.prototype, "thyTitle", null);
    ThyActionMenuDividerComponent = __decorate([
        Component({
            selector: 'thy-action-menu-divider',
            template: "<div class=\"action-menu-divider-title\">{{title}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuDividerComponent);
    return ThyActionMenuDividerComponent;
}());
export { ThyActionMenuDividerComponent };
var ThyActionMenuDividerTitleDirective = /** @class */ (function () {
    function ThyActionMenuDividerTitleDirective() {
        this.className = true;
    }
    __decorate([
        HostBinding('class.action-menu-divider-title'),
        __metadata("design:type", Object)
    ], ThyActionMenuDividerTitleDirective.prototype, "className", void 0);
    ThyActionMenuDividerTitleDirective = __decorate([
        Directive({
            selector: '[thyActionMenuDividerTitle]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuDividerTitleDirective);
    return ThyActionMenuDividerTitleDirective;
}());
export { ThyActionMenuDividerTitleDirective };
var ThyActionMenuItemActiveDirective = /** @class */ (function () {
    function ThyActionMenuItemActiveDirective() {
        this._isActive = false;
    }
    Object.defineProperty(ThyActionMenuItemActiveDirective.prototype, "thyActionMenuItemActive", {
        set: function (value) {
            this._isActive = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.active'),
        __metadata("design:type", Object)
    ], ThyActionMenuItemActiveDirective.prototype, "_isActive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyActionMenuItemActiveDirective.prototype, "thyActionMenuItemActive", null);
    ThyActionMenuItemActiveDirective = __decorate([
        Directive({
            selector: '[thyActionMenuItemActive]',
        }),
        __metadata("design:paramtypes", [])
    ], ThyActionMenuItemActiveDirective);
    return ThyActionMenuItemActiveDirective;
}());
export { ThyActionMenuItemActiveDirective };
//# sourceMappingURL=action-menu.component.js.map