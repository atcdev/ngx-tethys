var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { ThyPopBoxService } from '../pop-box/pop-box.service';
import { inputValueToBoolean } from '../util/helpers';
export var ActionEnum;
(function (ActionEnum) {
    ActionEnum["click"] = "click";
    ActionEnum["contextmenu"] = "contextmenu";
})(ActionEnum || (ActionEnum = {}));
var ThyActionMenuToggleDirective = /** @class */ (function () {
    function ThyActionMenuToggleDirective(popBoxService) {
        this.popBoxService = popBoxService;
        this._action = ActionEnum.click;
        this._stopPropagation = false;
        this._thyContainerClass = '';
    }
    Object.defineProperty(ThyActionMenuToggleDirective.prototype, "thyActionMenuToggle", {
        set: function (value) {
            this._templateRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyActionMenuToggleDirective.prototype, "thyPlacement", {
        set: function (value) {
            this._placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyActionMenuToggleDirective.prototype, "thyAction", {
        set: function (value) {
            this._action = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyActionMenuToggleDirective.prototype, "thyStopPropagation", {
        set: function (value) {
            this._stopPropagation = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyActionMenuToggleDirective.prototype, "thyContainerClass", {
        set: function (value) {
            this._thyContainerClass = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyActionMenuToggleDirective.prototype.onClick = function (event) {
        if (this._action === ActionEnum.click) {
            this._show.bind(this)(event);
        }
    };
    ThyActionMenuToggleDirective.prototype.onRightClick = function (event) {
        if (this._action === ActionEnum.contextmenu) {
            this._show.bind(this)(event);
            return false;
        }
        return true;
    };
    ThyActionMenuToggleDirective.prototype._show = function (event) {
        if (this._stopPropagation) {
            event.stopPropagation();
            // event.preventDefault();
        }
        this.popBoxService.show(this._templateRef, {
            target: event.currentTarget,
            insideAutoClose: true,
            stopPropagation: this._stopPropagation,
            placement: this._placement || 'bottom left',
            containerClass: this._thyContainerClass,
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", ElementRef),
        __metadata("design:paramtypes", [ElementRef])
    ], ThyActionMenuToggleDirective.prototype, "thyActionMenuToggle", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyActionMenuToggleDirective.prototype, "thyPlacement", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyActionMenuToggleDirective.prototype, "thyAction", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyActionMenuToggleDirective.prototype, "thyStopPropagation", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyActionMenuToggleDirective.prototype, "thyContainerClass", null);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThyActionMenuToggleDirective.prototype, "onClick", null);
    __decorate([
        HostListener('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], ThyActionMenuToggleDirective.prototype, "onRightClick", null);
    ThyActionMenuToggleDirective = __decorate([
        Directive({
            selector: '[thyActionMenuToggle]'
        }),
        __metadata("design:paramtypes", [ThyPopBoxService])
    ], ThyActionMenuToggleDirective);
    return ThyActionMenuToggleDirective;
}());
export { ThyActionMenuToggleDirective };
//# sourceMappingURL=action-menu-toggle.component.js.map