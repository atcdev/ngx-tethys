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
import { Component, Input, HostBinding, ElementRef, ChangeDetectorRef, Inject, InjectionToken, HostListener, Optional } from '@angular/core';
// import { SelectionModel } from '@angular/cdk/collections';
import { inputValueToBoolean } from '../../util/helpers';
var _uniqueIdCounter = 0;
/**
 * Injection token used to provide the parent component to options.
 */
export var THY_OPTION_PARENT_COMPONENT = new InjectionToken('THY_OPTION_PARENT_COMPONENT');
var ThyListOptionComponent = /** @class */ (function () {
    function ThyListOptionComponent(element, changeDetector, 
    /** @docs-private */
    parentSelectionList) {
        this.element = element;
        this.changeDetector = changeDetector;
        this.parentSelectionList = parentSelectionList;
        this._isListOption = true;
        this._role = 'option';
        this._tabIndex = -1;
        this.id = "thy-list-option-" + _uniqueIdCounter++;
    }
    Object.defineProperty(ThyListOptionComponent.prototype, "thyDisabled", {
        set: function (value) {
            this.disabled = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyListOptionComponent.prototype, "selected", {
        /** Whether the option is selected. */
        get: function () {
            return this.parentSelectionList.isSelected(this);
        },
        enumerable: true,
        configurable: true
    });
    ThyListOptionComponent.prototype.onClick = function (event) {
        this.parentSelectionList.toggleOption(this, event);
        this.parentSelectionList.setActiveOption(this);
    };
    // @HostListener('focus', ['$event'])
    // onFocus(event: Event) {
    //     this.parentSelectionList.setFocusedOption(this, event);
    // }
    /** Allows for programmatic focusing of the option. */
    // focus(origin?: FocusOrigin): void {
    //     this.element.nativeElement.focus();
    // }
    ThyListOptionComponent.prototype.setActiveStyles = function () {
        this.element.nativeElement.classList.add('hover');
        this.parentSelectionList.scrollIntoView(this);
    };
    ThyListOptionComponent.prototype.setInactiveStyles = function () {
        this.element.nativeElement.classList.remove('hover');
    };
    /**
     * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
     * @docs-private
     */
    ThyListOptionComponent.prototype.getLabel = function () {
        return '';
    };
    __decorate([
        HostBinding("class.thy-list-option"),
        __metadata("design:type", Object)
    ], ThyListOptionComponent.prototype, "_isListOption", void 0);
    __decorate([
        HostBinding("attr.role"),
        __metadata("design:type", Object)
    ], ThyListOptionComponent.prototype, "_role", void 0);
    __decorate([
        HostBinding("attr.tabindex"),
        __metadata("design:type", Object)
    ], ThyListOptionComponent.prototype, "_tabIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyListOptionComponent.prototype, "id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyListOptionComponent.prototype, "thyValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyListOptionComponent.prototype, "thyDisabled", null);
    __decorate([
        HostBinding("class.disabled"),
        __metadata("design:type", Boolean)
    ], ThyListOptionComponent.prototype, "disabled", void 0);
    __decorate([
        HostBinding("class.active"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ThyListOptionComponent.prototype, "selected", null);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ThyListOptionComponent.prototype, "onClick", null);
    ThyListOptionComponent = __decorate([
        Component({
            selector: 'thy-list-option,[thy-list-option]',
            template: "<ng-content></ng-content> <span class=\"text-light checked-icon\" *ngIf=\"parentSelectionList.multiple\"> <i class=\"wtf wtf-checked\"></i> </span>"
        }),
        __param(2, Optional()), __param(2, Inject(THY_OPTION_PARENT_COMPONENT)),
        __metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef, Object])
    ], ThyListOptionComponent);
    return ThyListOptionComponent;
}());
export { ThyListOptionComponent };
//# sourceMappingURL=list-option.component.js.map