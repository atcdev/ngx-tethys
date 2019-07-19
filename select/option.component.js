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
import { Component, Input, TemplateRef, ViewChild, ChangeDetectionStrategy, HostBinding, HostListener, ElementRef, InjectionToken, ChangeDetectorRef, EventEmitter, Output, Inject, Optional } from '@angular/core';
var OptionSelectionChange = /** @class */ (function () {
    function OptionSelectionChange() {
    }
    return OptionSelectionChange;
}());
export { OptionSelectionChange };
var OptionVisiableChange = /** @class */ (function () {
    function OptionVisiableChange() {
    }
    return OptionVisiableChange;
}());
export { OptionVisiableChange };
/**
 * Injection token used to provide the parent component to options.
 */
export var THY_SELECT_OPTION_PARENT_COMPONENT = new InjectionToken('THY_SELECT_OPTION_PARENT_COMPONENT');
var ThyOptionComponent = /** @class */ (function () {
    function ThyOptionComponent(element, parent, cdr) {
        this.element = element;
        this.parent = parent;
        this.cdr = cdr;
        this._selected = false;
        this._hidden = false;
        this._isOptionItem = true;
        this.selectionChange = new EventEmitter();
        this.visiableChange = new EventEmitter();
    }
    Object.defineProperty(ThyOptionComponent.prototype, "hidden", {
        get: function () {
            return this._hidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyOptionComponent.prototype, "selected", {
        /** Whether or not the option is currently selected. */
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    ThyOptionComponent.prototype.onClick = function (event) {
        if (this.parent.thyMode === 'multiple') {
            this._selected ? this.deselect() : this.select();
        }
        else {
            this.select();
        }
    };
    /** Selects the option. */
    ThyOptionComponent.prototype.select = function (event) {
        if (!this.thyDisabled) {
            if (!this._selected) {
                this._selected = true;
                this.selectionChange.emit({
                    option: this,
                    selected: this._selected
                });
                this.cdr.markForCheck();
            }
        }
    };
    /** Deselects the option. */
    ThyOptionComponent.prototype.deselect = function () {
        if (this._selected) {
            this._selected = false;
            this.selectionChange.emit({
                option: this,
                selected: this._selected
            });
            this.cdr.markForCheck();
        }
    };
    ThyOptionComponent.prototype.hideOption = function () {
        if (!this._hidden) {
            this._hidden = true;
            this.visiableChange.emit({ option: this });
            this.cdr.markForCheck();
        }
    };
    ThyOptionComponent.prototype.showOption = function () {
        if (this._hidden) {
            this._hidden = false;
            this.visiableChange.emit({ option: this });
            this.cdr.markForCheck();
        }
    };
    ThyOptionComponent.prototype.matchSearchText = function (searchText) {
        if (this.thySearchKey) {
            if (this.thySearchKey.indexOf(searchText) >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (this.thyLabelText.indexOf(searchText) >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    ThyOptionComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyOptionComponent.prototype, "thyValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyOptionComponent.prototype, "thyRawValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyOptionComponent.prototype, "thyLabelText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThyOptionComponent.prototype, "thyShowOptionCustom", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyOptionComponent.prototype, "thySearchKey", void 0);
    __decorate([
        HostBinding('class.thy-option-item'),
        __metadata("design:type", Object)
    ], ThyOptionComponent.prototype, "_isOptionItem", void 0);
    __decorate([
        ViewChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], ThyOptionComponent.prototype, "template", void 0);
    __decorate([
        Input(),
        HostBinding("class.disabled"),
        __metadata("design:type", Boolean)
    ], ThyOptionComponent.prototype, "thyDisabled", void 0);
    __decorate([
        HostBinding('class.hidden'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ThyOptionComponent.prototype, "hidden", null);
    __decorate([
        HostBinding("class.active"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ThyOptionComponent.prototype, "selected", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyOptionComponent.prototype, "selectionChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyOptionComponent.prototype, "visiableChange", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ThyOptionComponent.prototype, "onClick", null);
    ThyOptionComponent = __decorate([
        Component({
            selector: 'thy-option',
            template: "<ng-container *ngIf=\"thyShowOptionCustom; else defaultOption\"> <ng-content></ng-content> </ng-container> <ng-template #defaultOption> <span class=\"ml-1\">{{ thyLabelText }}</span> <span class=\"text-light checked-icon\"> <i class=\"wtf wtf-checked\"></i> </span> </ng-template> ",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __param(1, Optional()), __param(1, Inject(THY_SELECT_OPTION_PARENT_COMPONENT)),
        __metadata("design:paramtypes", [ElementRef, Object, ChangeDetectorRef])
    ], ThyOptionComponent);
    return ThyOptionComponent;
}());
export { ThyOptionComponent };
//# sourceMappingURL=option.component.js.map