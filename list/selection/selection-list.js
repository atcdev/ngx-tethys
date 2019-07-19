var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ContentChildren, QueryList, ChangeDetectionStrategy, Renderer2, ElementRef, EventEmitter, Output, NgZone, forwardRef } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { ThyListOptionComponent, THY_OPTION_PARENT_COMPONENT } from '../../core/option';
import { keycodes, helpers, dom } from '../../util';
import { inputValueToBoolean } from '../../util/helpers';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScrollToService } from '../../core';
var ThySelectionListComponent = /** @class */ (function () {
    function ThySelectionListComponent(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this._selectionChangesUnsubscribe$ = Subscription.EMPTY;
        this._isList = true;
        this._isSelectionList = true;
        this.multiple = true;
        /** Emits a change event whenever the selected state of an option changes. */
        this.thySelectionChange = new EventEmitter();
        this._onTouched = function () { };
        this._onChange = function (_) { };
    }
    ThySelectionListComponent_1 = ThySelectionListComponent;
    Object.defineProperty(ThySelectionListComponent.prototype, "thyMultiple", {
        set: function (value) {
            var previousValue = this.multiple;
            this.multiple = inputValueToBoolean(value);
            if (previousValue !== this.multiple) {
                this._instanceSelectionModel();
            }
        },
        enumerable: true,
        configurable: true
    });
    ThySelectionListComponent.prototype._emitChangeEvent = function (option, event) {
        this.thySelectionChange.emit({
            source: this,
            value: option.thyValue,
            option: option,
            event: event,
            selected: this.isSelected(option)
        });
    };
    ThySelectionListComponent.prototype._emitModelValueChange = function () {
        var _this = this;
        if (this.options) {
            var selectedValues = this.selectionModel.selected;
            if (this.thyUniqueKey) {
                selectedValues = selectedValues.map(function (selectedValue) {
                    var selectedOption = _this.options.find(function (option) {
                        return option.thyValue[_this.thyUniqueKey] === selectedValue;
                    });
                    if (selectedOption) {
                        return selectedOption.thyValue;
                    }
                    else {
                        return _this._modelValues.find(function (value) {
                            return value[_this.thyUniqueKey] === selectedValue;
                        });
                    }
                });
            }
            this._modelValues = selectedValues;
            var changeValue = selectedValues;
            if (!this.multiple && selectedValues && selectedValues.length > 0) {
                changeValue = selectedValues[0];
            }
            this._onChange(changeValue);
        }
    };
    ThySelectionListComponent.prototype._toggleFocusedOption = function (event) {
        var _this = this;
        if (this._keyManager.activeItem) {
            this.ngZone.run(function () {
                _this.toggleOption(_this._keyManager.activeItem, event);
            });
        }
    };
    ThySelectionListComponent.prototype._initializeFocusKeyManager = function () {
        this._keyManager = new ActiveDescendantKeyManager(this.options)
            .withWrap()
            // .withTypeAhead()
            // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
            // screenreader users, that allows reading the different options of the list.
            .skipPredicate(function () { return false; });
    };
    ThySelectionListComponent.prototype._instanceSelectionModel = function () {
        this.selectionModel = new SelectionModel(this.multiple);
    };
    ThySelectionListComponent.prototype._getElementBySelector = function (element) {
        return dom.getHTMLElementBySelector(element, this.elementRef);
    };
    ThySelectionListComponent.prototype._compareValue = function (value1, value2) {
        if (this.thyCompareWith) {
            var compareFn = this.thyCompareWith;
            return compareFn(value1, value2);
        }
        else if (this.thyUniqueKey) {
            return value1 && value1[this.thyUniqueKey] === value2 && value2[this.thyUniqueKey];
        }
        else {
            return value1 === value2;
        }
    };
    ThySelectionListComponent.prototype._getOptionSelectionValue = function (option) {
        if (option.thyValue) {
            return this.thyUniqueKey ? option.thyValue[this.thyUniqueKey] : option.thyValue;
        }
        else {
            return option;
        }
    };
    ThySelectionListComponent.prototype._setSelectionByValues = function (values) {
        var _this = this;
        this.selectionModel.clear();
        values.forEach(function (value) {
            if (_this.thyUniqueKey) {
                _this.selectionModel.select(value[_this.thyUniqueKey]);
            }
            else {
                _this.selectionModel.select(value);
            }
        });
    };
    ThySelectionListComponent.prototype._setAllOptionsSelected = function (toIsSelected) {
        var _this = this;
        // Keep track of whether anything changed, because we only want to
        // emit the changed event when something actually changed.
        var hasChanged = false;
        this.options.forEach(function (option) {
            var fromIsSelected = _this.selectionModel.isSelected(option.thyValue);
            if (fromIsSelected !== toIsSelected) {
                hasChanged = true;
                _this.selectionModel.toggle(option.thyValue);
            }
        });
        if (hasChanged) {
            this._emitModelValueChange();
        }
    };
    ThySelectionListComponent.prototype._getOptionByValue = function (value) {
        var _this = this;
        return this.options.find(function (option) {
            return _this._compareValue(option.thyValue, value);
        });
    };
    ThySelectionListComponent.prototype._getActiveOption = function () {
        if (this._keyManager.activeItem) {
            return this._getOptionByValue(this._keyManager.activeItem.thyValue);
        }
        else {
            return null;
        }
    };
    ThySelectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bindKeyEventElement = this._getElementBySelector(this.thyBindKeyEventContainer);
        this.ngZone.runOutsideAngular(function () {
            _this._bindKeyEventUnsubscribe = _this.renderer.listen(bindKeyEventElement, 'keydown', _this.onKeydown.bind(_this));
        });
        this._instanceSelectionModel();
    };
    ThySelectionListComponent.prototype.writeValue = function (value) {
        if (value) {
            if (this.multiple && !helpers.isArray(value)) {
                throw new Error("multiple selection ngModel must be array.");
            }
            if (!this.multiple && helpers.isArray(value)) {
                throw new Error("single selection ngModel not be array.");
            }
        }
        var values = helpers.isArray(value) ? value : (value ? [value] : []);
        this._modelValues = values;
        if (this.options) {
            this._setSelectionByValues(values);
        }
    };
    ThySelectionListComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ThySelectionListComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    ThySelectionListComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    ThySelectionListComponent.prototype.onKeydown = function (event) {
        if (this.thyBeforeKeydown) {
            // stop key down event
            var isContinue = this.thyBeforeKeydown(event);
            if (!isContinue) {
                return;
            }
        }
        var keyCode = event.keyCode || event.which;
        var manager = this._keyManager;
        var previousFocusIndex = manager.activeItemIndex;
        switch (keyCode) {
            case keycodes.SPACE:
            case keycodes.ENTER:
                this._toggleFocusedOption(event);
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
            default:
                manager.onKeydown(event);
        }
        if ((keyCode === keycodes.UP_ARROW || keyCode === keycodes.DOWN_ARROW) && event.shiftKey &&
            manager.activeItemIndex !== previousFocusIndex) {
            this._toggleFocusedOption(event);
        }
    };
    ThySelectionListComponent.prototype.toggleOption = function (option, event) {
        if (option && !option.disabled) {
            this.selectionModel.toggle(this._getOptionSelectionValue(option));
            // Emit a change event because the focused option changed its state through user
            // interaction.
            this._emitModelValueChange();
            this._emitChangeEvent(option, event);
        }
    };
    ThySelectionListComponent.prototype.setActiveOption = function (option) {
        this._keyManager.updateActiveItem(option); // .updateActiveItemIndex(this._getOptionIndex(option));
    };
    ThySelectionListComponent.prototype.scrollIntoView = function (option) {
        var scrollContainerElement = dom.getHTMLElementBySelector(this.thyScrollContainer, this.elementRef);
        ScrollToService.scrollToElement(option.element.nativeElement, scrollContainerElement);
    };
    ThySelectionListComponent.prototype.isSelected = function (option) {
        return this.selectionModel.isSelected(this._getOptionSelectionValue(option));
    };
    ThySelectionListComponent.prototype.clearActiveItem = function () {
        if (this._keyManager.activeItem) {
            this._keyManager.setActiveItem(-1);
        }
    };
    ThySelectionListComponent.prototype.determineClearActiveItem = function () {
        if (!this._getActiveOption()) {
            this.clearActiveItem();
        }
    };
    /** Selects all of the options. */
    ThySelectionListComponent.prototype.selectAll = function () {
        this._setAllOptionsSelected(true);
    };
    /** Deselects all of the options. */
    ThySelectionListComponent.prototype.deselectAll = function () {
        this._setAllOptionsSelected(false);
    };
    ThySelectionListComponent.prototype.ngAfterContentInit = function () {
        this._initializeFocusKeyManager();
        // if (this._tempValues) {
        //     this._setSelectionByValues(this._tempValues);
        //     this._tempValues = null;
        // }
    };
    ThySelectionListComponent.prototype.ngOnDestroy = function () {
        this._selectionChangesUnsubscribe$.unsubscribe();
        if (this._bindKeyEventUnsubscribe) {
            this._bindKeyEventUnsubscribe();
        }
    };
    var ThySelectionListComponent_1;
    __decorate([
        HostBinding("class.thy-list"),
        __metadata("design:type", Object)
    ], ThySelectionListComponent.prototype, "_isList", void 0);
    __decorate([
        HostBinding("class.thy-selection-list"),
        __metadata("design:type", Object)
    ], ThySelectionListComponent.prototype, "_isSelectionList", void 0);
    __decorate([
        HostBinding("class.thy-multiple-selection-list"),
        __metadata("design:type", Object)
    ], ThySelectionListComponent.prototype, "multiple", void 0);
    __decorate([
        ContentChildren(ThyListOptionComponent),
        __metadata("design:type", QueryList)
    ], ThySelectionListComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThySelectionListComponent.prototype, "thyMultiple", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThySelectionListComponent.prototype, "thyBindKeyEventContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThySelectionListComponent.prototype, "thyScrollContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], ThySelectionListComponent.prototype, "thyBeforeKeydown", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThySelectionListComponent.prototype, "thyUniqueKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], ThySelectionListComponent.prototype, "thyCompareWith", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThySelectionListComponent.prototype, "thySelectionChange", void 0);
    ThySelectionListComponent = ThySelectionListComponent_1 = __decorate([
        Component({
            selector: 'thy-selection-list,[thy-selection-list]',
            template: '<ng-content></ng-content>',
            providers: [
                {
                    provide: THY_OPTION_PARENT_COMPONENT,
                    useExisting: ThySelectionListComponent_1
                },
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThySelectionListComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            NgZone])
    ], ThySelectionListComponent);
    return ThySelectionListComponent;
}());
export { ThySelectionListComponent };
//# sourceMappingURL=selection-list.js.map